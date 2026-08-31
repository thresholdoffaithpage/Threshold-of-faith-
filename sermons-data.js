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
    videoId   - the part of the YouTube URL after "v=" (leave "" if none yet)
    body      - the full sermon text. Each item in the array is one paragraph.
                Use "## " at the start of a line to make it a subheading.
*/

const SERMONS = [
  {
    slug: "sample-the-narrow-gate",
    title: "The Narrow Gate",
    scripture: "Matthew 7:13-14",
    date: "August 24, 2026",
    tags: ["Discipleship", "Gospels"],
    summary: "This is placeholder text — replace it with your own sermon. A short look at what it means that few find the narrow way, and why that should shape how we walk.",
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
