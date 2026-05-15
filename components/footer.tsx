import { Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Activities", href: "#activities" },
    { label: "Applications", href: "#applications" },
    { label: "Executive Team", href: "#executive" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background px-4 py-14 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />
      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-destructive/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-destructive" />
              <span>TEDDMUN 2026</span>
            </div>

            <h3 className="text-3xl font-black tracking-tight text-foreground">
              TED Denizli School
              <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                Model United Nations
              </span>
            </h3>

            <p className="mt-5 max-w-md text-pretty text-sm leading-7 text-muted-foreground">
              We support young people on their journey of diplomacy,
              leadership, academic development, and global awareness.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-foreground">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-destructive"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-foreground">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    TED Denizli School, Denizli
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:teddmun20@gmail.com"
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-destructive"
                  >
                    teddmun20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 TED Denizli School MUN Club. All rights reserved.
          </p>

          <p>
            Website developed by{" "}
            <span className="font-semibold text-foreground">
              Doruk Özkan
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
