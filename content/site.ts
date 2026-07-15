export const site = {
  name: "Tobias Bode",
  role: "Software Engineer",
  tagline: "I build websites, from the first idea to the last pixel.",
  email: "contact@tobias-bo.de",
  location: "Munich, Germany",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "After learning my first programming language, I found my footing in code by teaching it. As a student assistant, I helped others learn to program. An experience that taught me much about communication and reading other people's code.",
    "Today I direct my curiosity into frontend development, where I care about building interfaces that feel intuitive, are accessible and look right down to the last pixel.",
    "Away from the screen, I'm currently learning photography, improving my eye for light and composition, or clearing my head while doing sports.",
  ],
  techStack: "My preferred stack",
  experience: "My experience",
  education: "And my education",
} as const;

export const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Storybook",
  "Claude Code",
];

export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description?: string;
};

export const experience: TimelineEntry[] = [
  {
    period: "2024 - Present",
    title: "Software Engineer",
    organization: "MaibornWolff GmbH",
    description:
      "Working as a Frontend Web Developer, building tailored web solutions for client projects.",
  },
  {
    period: "2018 - 2023",
    title: "Student Assistant",
    organization: "University of Mannheim",
    description:
      "Teaching new students how to code and reading loads and loads of code written by others.",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2021 - 2023",
    title: "M.Sc. Business Informatics",
    organization: "University of Mannheim",
    description:
      "Specializing in software engineering, but a bit of business and data science classes sprinkled in. One semester was on exchange at the University of Oulu.",
  },
  {
    period: "2017 - 2020",
    title: "B.Sc. Business Informatics",
    organization: "University of Mannheim",
    description:
      "Focusing on software engineering and exploring additional business lectures.",
  },
];

export const contact = {
  paragraph:
    "Got a project, a role, or just a good question? The fastest way to reach me is email. I read everything and reply to most of it.",
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/tobiasbo-de",
    handle: "@tobiasbo-de",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/t-bode/",
    handle: "in/t-bode",
  },
];
