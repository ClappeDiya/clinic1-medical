import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ClinicLogo from "@/components/ClinicLogo"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <ClinicLogo
              className="w-32 h-8"
              showText={false}
              width={144}
              height={36}
            />
            <p className="text-emerald-100">
              Providing comprehensive family healthcare services to the Edmonton community with compassionate, 
              patient-centered care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-emerald-100 hover:text-yellow-300 transition-colors">
                About Us
              </Link>
              <Link href="/doctors" className="text-emerald-100 hover:text-yellow-300 transition-colors">
                Our Doctors
              </Link>
              <Link href="/services" className="text-emerald-100 hover:text-yellow-300 transition-colors">
                Services
              </Link>
              <Link href="/resources" className="text-emerald-100 hover:text-yellow-300 transition-colors">
                Patient Resources
              </Link>
              <Link href="/contact" className="text-emerald-100 hover:text-yellow-300 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-emerald-100">Preventive Care</span>
              <span className="text-emerald-100">Chronic Disease Management</span>
              <span className="text-emerald-100">Physical Examinations</span>
              <span className="text-emerald-100">Immunizations</span>
              <span className="text-emerald-100">Women&apos;s Health</span>
              <span className="text-emerald-100">Pediatric Care</span>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100">Royal Center</p>
                  <p className="text-emerald-100">16644-71 St NW</p>
                  <p className="text-emerald-100">Edmonton, AB T5Z ON5</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-emerald-100">780-761-2430</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-emerald-100">Text: 587-926-7747</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div className="text-emerald-100">
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat-Sun: Closed</p>
                  <p className="text-emerald-200 text-sm mt-1">Closed on all public holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-emerald-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100">
          <p>&copy; 2025 Clinic 1 Medical. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-yellow-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
