"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Applications", href: "#applications" },
  ]

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/ted-mun-logo-dark.png"
      : "/images/ted-mun-logo.png"

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-destructive/40">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="TED MUN Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-base font-black tracking-tight text-foreground md:text-lg">
                TED Denizli
                <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-sm text-transparent">
                  Model United Nations
                </span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-lg backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:bg-white/[0.06] hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <ThemeToggle />

            <a href="#applications">
              <Button className="group h-11 rounded-full bg-destructive px-5 font-semibold text-white shadow-lg shadow-destructive/25 transition-all duration-300 hover:bg-destructive/90">
                Apply
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden border-b border-white/10 bg-background/90 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-2 sm:px-6">
          <div className="space-y-2 rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-xl backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:bg-destructive/10 hover:text-destructive"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a href="#applications" onClick={() => setIsOpen(false)}>
              <Button className="mt-2 h-12 w-full rounded-2xl bg-destructive font-semibold text-white shadow-lg shadow-destructive/25 hover:bg-destructive/90">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
