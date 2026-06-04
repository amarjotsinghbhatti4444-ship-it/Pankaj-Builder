"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-slate-900 shadow-lg py-2"
          : "bg-slate-900/90 py-4 backdrop-blur-sm md:bg-transparent md:py-6"
      )}
    >
      {/* Top Bar for Desktop */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-sm text-gray-300">
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                Sector 127, Mohali, Punjab
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                info@pankajsinghbuilder.com
              </span>
            </div>
            <div className="flex items-center gap-2 font-medium text-white">
              <Phone className="h-4 w-4 text-amber-500" />
              Call us: +91 99159 48508
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold tracking-wider text-white uppercase font-serif">
                Pankaj Singh <span className="text-amber-500">Builder</span>
              </span>
              <span className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-[0.2em] group-hover:text-amber-400 transition-colors">
                Construction Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs lg:text-sm font-medium uppercase tracking-wider transition-colors hover:text-amber-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-500 after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 pb-1 whitespace-nowrap",
                  pathname === link.href ? "text-amber-500 after:scale-x-100" : "text-gray-100"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" variant="default" className="ml-2 lg:ml-4 whitespace-nowrap">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-semibold uppercase tracking-wider transition-colors",
                pathname === link.href ? "text-amber-500" : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-800">
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
              <Phone className="h-4 w-4 text-amber-500" />
              +91 99159 48508
            </div>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
