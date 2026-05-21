import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import AtomAnimation from "./AtomAnimation";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Visuals", href: "#visuals" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khaled-elfaham/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/webj-khaled", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/khaledmnms/", Icon: Instagram },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[oklch(12%_0.035_244_/_0.82)] backdrop-blur-xl">
      <nav className="section-shell flex min-h-[76px] items-center justify-between gap-4">
        <a href="#" className="flex min-h-11 items-center gap-3 no-underline" aria-label="Khaled Adel home">
          <AtomAnimation />
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-[oklch(17%_0.045_244_/_0.72)] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-muted transition hover:bg-[var(--color-panel-high)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid min-h-11 min-w-11 place-items-center border border-transparent text-muted transition hover:border-[var(--color-line)] hover:text-[var(--color-green)]"
                aria-label={label}
                title={label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a href="mailto:elfahamkhaled65@gmail.com" className="action-button">
            <Mail size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
