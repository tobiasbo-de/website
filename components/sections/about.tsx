import { Section, SectionHeading } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { about, education, experience, techStack } from "@/content/site";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-20">
        <Bio />
        <TechStack />
        <Experience />
        <Education />
      </div>
    </Section>
  );
}

function Bio() {
  return (
    <div className="space-y-5 text-base leading-relaxed sm:text-lg">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function TechStack() {
  return (
    <div>
      <SectionHeading>{about.techStack}</SectionHeading>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((item) => (
          <li
            key={item}
            className="tech-pill border-border bg-surface hover:text-accent rounded-full border px-3 py-1 text-base transition-colors duration-300 hover:border-transparent"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <SectionHeading>{about.experience}</SectionHeading>
      <Timeline entries={experience} />
    </div>
  );
}

function Education() {
  return (
    <div>
      <SectionHeading>{about.education}</SectionHeading>
      <Timeline entries={education} />
    </div>
  );
}
