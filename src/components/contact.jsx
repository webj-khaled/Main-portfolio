import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "../constants";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khaled-elfaham/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/webj-khaled", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/khaledmnms/", Icon: Instagram },
];

const Contact = () => {
  return (
    <footer id="contact" className="section-pad">
      <div className="section-shell">
        <div className="surface-panel p-6 sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="section-title">Tell me what needs to work.</h2>
              <p className="section-copy mt-7">
                I am open to full-stack roles, freelance product work, AI-enabled workflows, and collaborations where technical depth and creative execution both matter.
              </p>
            </div>

            <div className="grid gap-4">
              <a href={`mailto:${CONTACT.email}`} className="action-button justify-between sm:text-lg">
                <span className="inline-flex items-center gap-3">
                  <Mail size={20} aria-hidden="true" />
                  {CONTACT.email}
                </span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`} className="action-button secondary justify-between">
                <span className="inline-flex items-center gap-3">
                  <Phone size={19} aria-hidden="true" />
                  {CONTACT.phoneNo}
                </span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <p className="flex items-center gap-3 border border-[var(--color-line)] px-4 py-3 text-muted">
                <MapPin size={19} aria-hidden="true" />
                {CONTACT.address}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-5 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-soft">
              Khaled Adel / Creative full-stack developer
            </p>
            <div className="flex flex-wrap gap-2">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-[var(--color-line)] px-3 py-2 text-sm font-bold text-muted transition hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                >
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
