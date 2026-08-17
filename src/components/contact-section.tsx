import { Mail, MapPin } from "lucide-react";
import { contact, siteConfig } from "@/data/portfolio";

/** Final call to action. */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line dark:border-line-dark"
    >
      <div className="shell py-20 md:py-28">
        <div className="panel relative overflow-hidden rounded-2xl p-8 md:p-14">
          <div className="grid-lines absolute inset-0" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-accent-strong dark:text-accent">07</span>
              <span aria-hidden="true" className="h-px w-8 bg-line dark:bg-line-dark" />
              <span>{contact.eyebrow}</span>
            </p>
            <h2
              id="contact-heading"
              className="mt-5 font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              {contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg dark:text-slate-soft">
              {contact.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contact.emailLabel}
              </a>
              <span className="inline-flex items-center gap-2 font-mono text-sm text-ink-soft dark:text-slate-soft">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {contact.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
