import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Car,
  Send,
  Info,
  AlertCircle,
  CheckCircle
} from "lucide-react"
import ClinicLogo from "@/components/ClinicLogo"
import OptimizedImage from "@/components/OptimizedImage"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              Contact Clinic 1 Medical
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Get in Touch With Our Healthcare Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Ready to schedule an appointment or have questions about your healthcare? 
              We&apos;re here to help. Contact us today to experience compassionate, 
              comprehensive family medicine care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for appointments, questions, and healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Phone Contact */}
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-emerald-200">
              <div className="bg-emerald-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Phone</h3>
              <div className="space-y-2 text-base sm:text-lg">
                <p className="font-semibold text-emerald-600">780-761-2430</p>
                <p className="text-gray-600 text-sm sm:text-base">Main office line for appointments</p>
              </div>
              <Button asChild className="mt-4 sm:mt-6 w-full touch-manipulation">
                <a href="tel:780-761-2430">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </Card>

            {/* Text Message */}
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Text Messages</h3>
              <div className="space-y-2 text-lg">
                <p className="font-semibold text-green-600">587-926-7747</p>
                <p className="text-gray-600">Quick questions and appointment requests</p>
              </div>
              <Button asChild className="mt-6 w-full" variant="outline">
                <a href="sms:587-926-7747">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Text
                </a>
              </Button>
            </Card>

            {/* Fax */}
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-purple-200">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fax</h3>
              <div className="space-y-2 text-lg">
                <p className="font-semibold text-purple-600">780-473-3330</p>
                <p className="text-gray-600">For medical records and referrals</p>
              </div>
              <Button className="mt-6 w-full" variant="outline" disabled>
                <Mail className="mr-2 h-4 w-4" />
                Fax Number
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Location */}
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-xl font-semibold text-gray-900">Royal Center</p>
                  <p className="text-lg text-gray-600">16644-71 St NW</p>
                  <p className="text-lg text-gray-600">Edmonton, AB T5Z ON5</p>
                </div>
                
                {/* Building Image */}
                <div className="my-6">
                  <OptimizedImage
                    src="/assets/royal-centre-building.jpg"
                    alt="Royal Centre building - Clinic 1 Medical location at 16644-71 St NW Edmonton, featuring modern architecture with ample parking"
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 rounded-lg shadow-lg border border-gray-200"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center font-medium">
                    📍 Current photo of Royal Centre - Professional medical building with ground-floor access, ample parking, and Pharmasave pharmacy
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center">
                    <Car className="h-5 w-5 mr-2" />
                    Parking & Transportation
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">• Ample free parking available</p>
                  <p className="text-sm text-gray-600 mb-2">• Wheelchair accessible entrance</p>
                  <p className="text-sm text-gray-600 mb-2">• Public transit accessible</p>
                  <p className="text-sm text-gray-600">• Ground floor location</p>
                </div>

                <Button asChild className="w-full">
                  <a href="https://maps.google.com/?q=16644-71+St+NW,+Edmonton,+AB" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Monday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Tuesday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Wednesday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Thursday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Friday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-semibold text-gray-900">Saturday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-900">Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 text-center">
                    <Info className="h-4 w-4 inline mr-1" />
                    Hours may vary on holidays. Please call ahead to confirm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Have a question or need more information? Send us a message and we&apos;ll get back to you promptly.
              </p>
            </div>

            <Card className="p-6 sm:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject"
                    type="text"
                    required
                    placeholder="What is this regarding?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message"
                    required
                    placeholder="Please provide details about your inquiry..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <Info className="h-4 w-4 inline mr-1" />
                    For urgent medical concerns, please call our office directly at 780-761-2430 or seek immediate medical attention if it&apos;s an emergency.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-400 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
              <ClinicLogo className="h-8 w-8" showText={false} width={32} height={32} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Take the next step in your healthcare journey. Our experienced family physicians 
              are ready to provide you with the comprehensive care you deserve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-emerald-100">Same-day appointments available</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-emerald-100">Extended evening hours</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-emerald-100">Weekend availability</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-semibold shadow-lg">
                <a href="tel:780-761-2430">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 780-761-2430
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <a href="sms:587-926-7747">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text: 587-926-7747
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Emergencies</h2>
            <p className="text-xl text-gray-600 mb-6">
              If you are experiencing a medical emergency, do not use this website or our contact forms.
            </p>
            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Call 911 Immediately</h3>
              <p className="text-gray-700">
                For life-threatening emergencies, severe injuries, chest pain, difficulty breathing, 
                or any situation requiring immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
