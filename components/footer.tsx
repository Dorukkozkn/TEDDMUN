import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">TED Denizli School MUN</h3>
            <p className="text-primary-foreground/80 text-pretty mb-4">
              We support young people on their journey of diplomacy, leadership and global awareness.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#activities" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a href="#join" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">TED Denizli School, Denizli</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">mun@teddenizli.k12.tr</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+90 (258) 123 45 67</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            This website was developed by Doruk Özkan on the DevShelf platform © 2025 TED Denizli School MUN Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
