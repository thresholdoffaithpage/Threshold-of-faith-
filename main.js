function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function paragraphsToHtml(body) {
  return body
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2>${escapeHtml(block.slice(3))}</h2>`;
      }
      return `<p>${escapeHtml(block)}</p>`;
    })
    .join("\n");
}

function sermonRowHtml(s) {
  return `
    <a class="sermon-row" href="sermon.html?slug=${encodeURIComponent(s.slug)}">
      <div class="date">${escapeHtml(s.date)}</div>
      <div class="details">
        <h3>${escapeHtml(s.title)}</h3>
        <p class="scripture">${escapeHtml(s.scripture)}</p>
        <p class="summary">${escapeHtml(s.summary)}</p>
      </div>
    </a>`;
}

// ---- Homepage: recent sermons ----
function renderRecent(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const recent = SERMONS.slice(0, count);
  if (recent.length === 0) {
    el.innerHTML = `<div class="empty-state">No sermons published yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = recent.map(sermonRowHtml).join("");
}

// ---- Sermons archive page, with tag filtering ----
function renderArchive(listId, filterBarId) {
  const listEl = document.getElementById(listId);
  const filterEl = document.getElementById(filterBarId);
  if (!listEl) return;

  const allTags = Array.from(new Set(SERMONS.flatMap((s) => s.tags))).sort();

  function draw(activeTag) {
    const items = activeTag
      ? SERMONS.filter((s) => s.tags.includes(activeTag))
      : SERMONS;
    listEl.innerHTML = items.length
      ? items.map(sermonRowHtml).join("")
      : `<div class="empty-state">No sermons found for this topic yet.</div>`;
  }

  if (filterEl) {
    const chips = ["All", ...allTags];
    filterEl.innerHTML = chips
      .map(
        (t, i) =>
          `<button class="filter-chip${i === 0 ? " active" : ""}" data-tag="${
            t === "All" ? "" : escapeHtml(t)
          }">${escapeHtml(t)}</button>`
      )
      .join("");
    filterEl.querySelectorAll(".filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        filterEl
          .querySelectorAll(".filter-chip")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        draw(btn.dataset.tag);
      });
    });
  }

  draw("");
}

// ---- Sermon detail page ----
function renderDetail(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const sermon = SERMONS.find((s) => s.slug === slug);

  if (!sermon) {
    root.innerHTML = `<div class="empty-state">Sermon not found. <a href="sermons.html">Back to all sermons</a>.</div>`;
    document.title = "Sermon not found — Threshold of Faith";
    return;
  }

  document.title = `${sermon.title} — Threshold of Faith`;

  const videoHtml = sermon.videoId
    ? `<div class="video-frame"><div class="ratio">
        <iframe src="https://www.youtube.com/embed/${encodeURIComponent(
          sermon.videoId
        )}" title="${escapeHtml(sermon.title)}" allowfullscreen></iframe>
       </div></div>`
    : "";

  root.innerHTML = `
    <div class="page-intro">
      <div class="sermon-meta">
        <span>${escapeHtml(sermon.date)}</span>
        <span class="scripture">${escapeHtml(sermon.scripture)}</span>
      </div>
      <h1>${escapeHtml(sermon.title)}</h1>
    </div>
    ${videoHtml}
    <div class="prose">${paragraphsToHtml(sermon.body)}</div>
  `;
}

// ---- Books page ----
function bookCardHtml(b) {
  const buyBtn = b.buyUrl
    ? `<a class="btn btn-primary" href="${escapeHtml(b.buyUrl)}" target="_blank" rel="noopener">Buy now — ${escapeHtml(b.price)}</a>`
    : `<span class="btn btn-outline btn-disabled">Coming soon</span>`;
  return `
    <div class="book-card">
      <div class="book-cover" aria-hidden="true">${escapeHtml(b.title.slice(0, 1))}</div>
      <div class="book-info">
        <h3>${escapeHtml(b.title)}</h3>
        <p>${escapeHtml(b.blurb)}</p>
        ${buyBtn}
      </div>
    </div>`;
}

function renderBooks(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (BOOKS.length === 0) {
    el.innerHTML = `<div class="empty-state">No books listed yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = BOOKS.map(bookCardHtml).join("");
}

// ---- Contact form: builds a mailto link, no backend needed ----
function wireContactForm(formId, mailto) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();
    const subject = encodeURIComponent(`Message from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
  });
}
