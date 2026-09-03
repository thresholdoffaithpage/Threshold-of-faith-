/*
  SERMONS DATA
  ------------
  This is the only file you need to touch to add a new sermon.
  Copy one block below (from the opening { to the closing },),
  paste it at the TOP of the list, and fill in your own details.

  Fields:
    slug      - short web-address-friendly id, no spaces (e.g. "walking-by-faith")
    title     - the sermon title
    scripture - the main passage, e.g. "Romans 8:1-11"
    date      - "Month Day, Year"
    tags      - topics, used for filtering on the Sermons page
    summary   - one or two sentences, shown in listings
    image     - path to a thumbnail image file (just the filename, e.g. "my-photo.jpg") (leave "" if none)
    videoId   - the part of the YouTube URL after "v=" (leave "" if none yet)
    body      - the full sermon text. Each item in the array is one paragraph.
                Use "## " at the start of a line to make it a subheading.
*/

const SERMONS = [
  {
    slug: "busy-here-and-there",
    title: "Busy Here and There: The Hidden Cost of Distraction (1 Kings 20)",
    scripture: "1 Kings 20:35-42",
    date: "September 1, 2026",
    tags: ["Old Testament", "Spiritual Growth"],
    summary: "A disguised prophet, a distracted king, and a warning that still applies today: how ordinary busyness can cost us the very things God entrusted to our care.",
    image: "sermon-busy-here-and-there.jpg",
    videoId: "",
    body: [
      "There's a quiet danger tucked inside an obscure Old Testament story — and it might be costing you something sacred right now. In 1 Kings 20:35–42, a disguised prophet corners King Ahab with a parable that becomes a mirror for every one of us: the danger of being busy here and there.",
      "A prophet of God, obeying a strange instruction, disguises himself with a bandage over his eyes and waits by the road for the king. When Ahab passes, the prophet presents himself as a soldier fresh from battle with a sobering confession: he was given one job — guard a prisoner of war — and while he was \"busy here and there,\" the prisoner slipped away.",
      "The king, unwittingly stepping into the prophet's trap, delivers his own verdict: \"So shall your judgment be; you yourself have decided it.\" The prophet then reveals himself and pronounces God's judgment: because Ahab was busy here and there, he let escape the very man — King Ben-hadad — whom God had devoted to destruction. The consequence would be severe: Ahab's life for the life he let go.",
      "## The Spiritual Danger of \"Busy Here and There\"",
      "The prophet's story is a mirror for our souls. How often has a divine assignment, a precious promise, a sacred season of our lives been lost — not through outright rebellion, but simply in the fog of ordinary, legitimate busyness?",
      "**We lose our focus on the essential.** The soldier's one job was to guard the prisoner. Our one necessary thing is to sit at the feet of Jesus. Yet we stay busy here and there — with work, chores, social media, even good ministry — and the quiet hour of prayer slips away. The moment of kindness we were meant to show passes by. The Spirit's gentle nudge to forgive, to reach out, to worship, is drowned out by the noise of \"here and there.\"",
      "**We miss divine appointments and alignment.** King Ahab missed a season of complete victory because he was distracted. God had a kairos moment — a strategic, appointed time — but Ahab was living in chronos, the mundane tick-tock of busyness. Like the wise men who could have missed the star, we too can miss God's movement because we're busy with activity instead of watching for His presence.",
      "**The cost is higher than we realize.** The soldier's life was required for the life he lost. Spiritually, the cost of lost intimacy, missed purpose, and diluted joy is just as real. We trade the profound for the petty, the eternal for the urgent.",
      "## Reclaiming What Was Lost: A Path Back",
      "This story isn't told to condemn you, but to awaken and uplift you. The very stirring you feel reading this is evidence of the Spirit's call to realignment.",
      "**Repent of the \"busy.\"** Repentance means to turn — from frantic hurry to focused devotion. Stillness is an act of spiritual warfare against chaos.",
      "**Re-establish the guard post.** What is the \"prisoner\" God entrusted to you? Your prayer life? Your family? A promise? A calling? Station yourself deliberately. Set guards of discipline and gates of discernment. Say no to good things to protect the best things.",
      "**Redeem the time.** Walk wisely, making the best use of what you've been given. By God's grace, you can buy back what was lost. Start now — this moment.",
      "**Fix your eyes on the King.** The soldier failed because he looked away. The cure is focus — fixing our eyes on Jesus. When He is central, distractions lose their power.",
      "## Be Encouraged",
      "You have not missed your window. God restores years that seemed lost. Conviction is not rejection — it is kindness calling you back to center.",
      "Lay down the burden of being busy here and there. Take up the yoke that is easy and light. Guard the treasure of His presence. Walk in step with His seasons. Your alignment is restored in surrender.",
      "Move forward — not in frantic haste, but in peaceful purpose — secure in the hands of the One who never gets distracted from loving you."
    ]
  },
  {
    slug: "sample-the-narrow-gate",
    title: "The Narrow Gate",
    scripture: "Matthew 7:13-14",
    date: "August 24, 2026",
    tags: ["Discipleship", "Gospels"],
    summary: "This is placeholder text — replace it with your own sermon. A short look at what it means that few find the narrow way, and why that should shape how we walk.",
    image: "",
    videoId: "",
    body: [
      "This is a placeholder sermon so you can see how a full message will look once it is published. Replace every paragraph in this array with your own writing.",
      "## Structure",
      "Use a '## ' subheading like this one to break a longer message into sections — introduction, the text itself, application, and so on.",
      "When you're ready, send me the sermon and I'll help you get it formatted, tightened, and split into paragraphs like this."
    ]
  },
  {
    slug: "sample-faith-that-works",
    title: "Faith That Works",
    scripture: "James 2:14-26",
    date: "August 10, 2026",
    tags: ["Doctrine", "Epistles"],
    summary: "This is placeholder text — replace it with your own sermon. James' teaching on the relationship between genuine faith and the works that follow it.",
    image: "",
    videoId: "",
    body: [
      "This is a second placeholder message, so the Sermons page has more than one entry to show you how the list and filters behave.",
      "Delete this once you've added a few of your own."
    ]
  },
  {
    slug: "sample-the-good-shepherd",
    title: "The Good Shepherd",
    scripture: "John 10:1-18",
    date: "July 27, 2026",
    tags: ["Doctrine", "Gospels"],
    summary: "This is placeholder text — replace it with your own sermon. What Jesus meant by calling himself the good shepherd, and what it means to know his voice.",
    videoId: "",
    body: [
      "A third placeholder entry — three is usually enough to preview how a 'recent sermons' section on the homepage looks with a full row."
    ]
  }
];
