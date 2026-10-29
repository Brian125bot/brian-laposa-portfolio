// Site content, kept in one place so copy changes never touch layout code.

export const EMAIL = "redstarapp@proton.me";

export const profiles = [
  { name: "GitHub", handle: "brian125bot", url: "https://github.com/brian125bot" },
  { name: "dev.to", handle: "brianbot", url: "https://dev.to/brianbot" },
  {
    name: "Google Developer",
    handle: "brianlaposa",
    url: "https://g.dev/brianlaposa",
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  url: string;
  linkLabel: string;
};

export const featured = {
  title: "CoreTek Paddles",
  domain: "coretekpaddles.com",
  url: "https://coretekpaddles.com",
  description:
    "A pickleball paddle company built on materials science. The Alpha and Omega paddles use advanced composite constructions, and AI-assisted analysis informs how each design is tuned.",
  stack: ["Composite materials", "E-commerce", "AI analysis"],
};

export const liveApps: Project[] = [
  {
    title: "Red Star Realism",
    description:
      "Turns a portrait into a Socialist Realist poster using generative AI.",
    stack: ["Generative AI", "React"],
    url: "https://red-star-realism.vercel.app/",
    linkLabel: "Visit site",
  },
  {
    title: "Our Lord of Lethality",
    description: "A satire generator that writes militarized dominionist prayers.",
    stack: ["Generative AI", "Satire"],
    url: "https://ourlordoflethality.vercel.app",
    linkLabel: "Visit site",
  },
];

export const tools: Project[] = [
  {
    title: "Vercel EZSlack",
    description:
      "A serverless Slack agent on Gemini and Vercel, with tool orchestration, approval flows for risky actions, and a live dashboard.",
    stack: ["Gemini", "Express", "Vercel"],
    url: "https://github.com/Brian125bot/vercel_ezslack",
    linkLabel: "View source",
  },
  {
    title: "AI Smart Fill",
    description:
      "A Chrome extension that batch-fills online forms with Gemini, using context you provide.",
    stack: ["Gemini", "Chrome extension"],
    url: "https://github.com/Brian125bot/ai_smart_fill",
    linkLabel: "View source",
  },
  {
    title: "RepoPilot",
    description:
      "A control plane for launching and supervising Google Jules coding-agent sessions across repositories.",
    stack: ["Next.js", "Jules", "GitHub"],
    url: "https://github.com/Brian125bot/repopilot",
    linkLabel: "View source",
  },
  {
    title: "RepoLM",
    description:
      "A multimedia notebook for exploring public and private GitHub repositories.",
    stack: ["AI notebook", "GitHub"],
    url: "https://github.com/Brian125bot",
    linkLabel: "View on GitHub",
  },
];

export const publication = {
  title:
    "Mass Spectrometry Cleavable Strategy for Identification and Differentiation of Prenylated Peptides",
  authors: [
    "Ruchika P. Bhawal",
    "Sandhya C. Sadananda",
    "Alejandro Bugarin",
    "Brian Laposa",
    "Saiful M. Chowdhury",
  ],
  journal: "Analytical Chemistry",
  year: "2015",
  doi: "10.1021/ac503794s",
  url: "https://pubs.acs.org/doi/abs/10.1021/ac503794s",
  summary:
    "A method for detecting and distinguishing prenylated peptides at scale. Simple chemistry on the prenyl group, combined with the cleavable behavior of a sulfoxide group, produces a signature mass spectrum that identifies the modification.",
};

export const award = {
  title: "Undergraduate Research Award",
  organization: "Dallas–Fort Worth Section, American Chemical Society",
};

export const disciplines = [
  {
    area: "Science",
    items: [
      "Analytical chemistry",
      "Mass spectrometry",
      "Materials science",
      "Signal processing",
      "Patent development",
    ],
  },
  {
    area: "AI",
    items: ["Agentic development", "Generative AI", "Applied machine learning"],
  },
  {
    area: "Engineering",
    items: ["TypeScript", "Next.js", "Astro", "HTML and CSS", "Cloud infrastructure"],
  },
];
