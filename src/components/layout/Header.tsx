"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Phone, MapPin, Clock, Menu, X } from "lucide-react"
import ClinicLogo from "@/components/ClinicLogo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar with Contact Info */}
      <div className="bg-emerald-800 text-white py-2 px-2 sm:px-0">
        <div className="container mx-auto px-2 sm:px-4 flex flex-wrap justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
            <div className="flex items-center">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-400" />
              <span className="whitespace-nowrap">780-761-2430</span>
            </div>
            <div className="hidden sm:flex items-center">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-400" />
              <span className="hidden md:inline">16644-71 St NW, Edmonton, AB</span>
              <span className="md:hidden">Edmonton, AB</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-400" />
            <span className="whitespace-nowrap">Mon-Fri 9AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <ClinicLogo className="w-40 h-10 sm:w-48 sm:h-12" showText={false} width={180} height={45} />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/doctors" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  Our Doctors
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  Patient Resources
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className="px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg px-3 lg:px-4 py-2 text-sm lg:text-base">
              <Link href="/contact">
                <span className="hidden lg:inline">Book Appointment</span>
                <span className="lg:hidden">Book</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden h-10 w-10 border-emerald-600 hover:bg-emerald-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white/95 backdrop-blur">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/doctors" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Doctors
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/resources" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Resources
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 text-base font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg mx-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-2 pt-4">
                <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 py-3 text-base touch-manipulation">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
