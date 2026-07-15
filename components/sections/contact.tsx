import { Section } from "@/components/ui/section";
import { contact, site, socials } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-10">
        <p className="max-w-lg text-base leading-relaxed sm:text-lg">
          {contact.paragraph}
        </p>

        <a
          href={`mailto:${site.email}`}
          className="hover:text-accent decoration-border hover:decoration-accent inline-block text-2xl font-semibold tracking-tight underline underline-offset-8 transition-colors sm:text-3xl"
        >
          {site.email}
        </a>

        <ul className="border-border/60 divide-border/50 flex flex-col divide-y border-b">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition-colors"
              >
                <span className="group-hover:text-accent text-lg transition-colors">
                  {social.label}
                </span>
                <span className="text-muted group-hover:text-foreground text-base transition-colors">
                  {social.handle}{" "}
                  <span
                    aria-hidden
                    className="transform transition-transform duration-150 group-hover:translate-2"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
