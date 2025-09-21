import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import OptimizedImage from "@/components/OptimizedImage"
import ClinicLogo from "@/components/ClinicLogo"
import { 
  Heart, 
  Shield, 
  Users, 
  Award,
  MapPin,
  Clock,
  Phone,
  Car,
  Target,
  Eye,
  Star,
  CheckCircle
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              About Clinic 1 Medical
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Dedicated to Your Health & Wellness
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Clinic 1 Medical, we believe that healthcare should be personal, accessible, and comprehensive. 
              Our team of experienced family physicians is committed to providing exceptional medical care 
              for patients of all ages in the Edmonton community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Clinic 1 Medical was founded with a simple yet powerful vision: to provide comprehensive, 
                  compassionate healthcare that puts patients and families first. Located in the heart of 
                  Edmonton at Royal Center, we have been serving our community with dedication and excellence.
                </p>
                <p>
                  Our practice brings together experienced family physicians who share a commitment to 
                  preventive care, chronic disease management, and building lasting relationships with 
                  our patients. We believe in treating not just symptoms, but the whole person.
                </p>
                <p>
                  From routine check-ups to complex medical conditions, we provide continuity of care 
                  that helps you and your family maintain optimal health throughout all stages of life.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/assets/images/about/medical-team.jpg"
                alt="Medical team collaboration at Clinic 1 Medical"
                width={600}
                height={400}
                className="w-full h-96"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-700/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div className="text-center mb-6">
                    <div className="bg-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                      <ClinicLogo className="h-10 w-10" showText={false} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Excellence in Family Medicine</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <Users className="h-6 w-6 text-yellow-300 mx-auto mb-1" />
                        <p className="font-semibold text-sm">Family-Centered</p>
                        <p className="text-xs text-emerald-100">All Ages Welcome</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <Heart className="h-6 w-6 text-yellow-300 mx-auto mb-1" />
                        <p className="font-semibold text-sm">Compassionate</p>
                        <p className="text-xs text-emerald-100">Patient-Centered</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <Award className="h-6 w-6 text-yellow-300 mx-auto mb-1" />
                        <p className="font-semibold text-sm">Experienced</p>
                        <p className="text-xs text-emerald-100">Board Certified</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <Shield className="h-6 w-6 text-yellow-300 mx-auto mb-1" />
                        <p className="font-semibold text-sm">Preventive</p>
                        <p className="text-xs text-emerald-100">Wellness Focus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <Card className="p-6 sm:p-8 border-2 border-emerald-100 shadow-lg">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                  To provide comprehensive, compassionate, and accessible family healthcare services 
                  that promote wellness, prevent disease, and enhance the quality of life for our 
                  patients and the Edmonton community.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 border-2 border-teal-100 shadow-lg">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                  To be the leading family medicine practice in Edmonton, recognized for excellence 
                  in patient care, innovative healthcare solutions, and our commitment to building 
                  healthier communities through personalized medical care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              These principles guide everything we do in caring for our patients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="bg-emerald-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Compassion</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We treat every patient with empathy, understanding, and genuine care for their wellbeing.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="bg-teal-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We strive for the highest standards in medical care, continuous learning, and service quality.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="bg-yellow-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We maintain honesty, transparency, and ethical practices in all our patient interactions.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We work together with patients, families, and healthcare partners to achieve the best outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Location
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the Royal Centre commercial plaza, we provide easy access 
              with ample parking and ground-floor accessibility for all our patients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <OptimizedImage
                    src="/assets/royal-centre-building.jpg"
                    alt="Royal Centre building - Clinic 1 Medical location at 16644-71 St NW Edmonton, featuring modern architecture with ample parking"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 lg:h-96"
                    objectFit="cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent">
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                        <p className="text-emerald-800 font-semibold text-sm">📍 Royal Centre</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        Easy to Find & Accessible
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Located in the prominent Royal Centre plaza, our clinic is easily recognizable 
                        and accessible to patients from across Edmonton and surrounding areas.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                          <MapPin className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-600 text-sm">
                            16644-71 St NW<br />
                            Edmonton, AB T5Z 0N5
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                          <Car className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Parking</p>
                          <p className="text-gray-600 text-sm">
                            Free parking<br />
                            Ground floor access
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                      <a href="https://maps.google.com/?q=16644-71+St+NW,+Edmonton,+AB" target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Why Choose Clinic 1 Medical?
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 sm:mb-12">
              We&apos;re committed to providing exceptional healthcare that makes a difference in your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Personalized Care</h3>
                <p className="text-blue-100">
                  Every treatment plan is tailored to your unique health needs and lifestyle.
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Convenient Hours</h3>
                <p className="text-blue-100">
                  Extended hours and weekend availability to fit your busy schedule.
                </p>
              </div>

              <div className="text-center">
                <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Prime Location</h3>
                <p className="text-blue-100">
                  Easily accessible location in Royal Center with ample parking available.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <Button asChild size="lg" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-semibold shadow-lg px-6 sm:px-8 py-3 text-base sm:text-lg touch-manipulation">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Schedule Your Visit Today</span>
                  <span className="sm:hidden">Schedule Visit</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Visit Us Today
            </h2>
            
            <Card className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    Royal Center<br />
                    16644-71 St NW<br />
                    Edmonton, AB T5Z ON5
                  </p>
                </div>
                
                <div>
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <p className="text-gray-600">
                    Phone: 780-761-2430<br />
                    Text: 587-926-7747<br />
                    Fax: 780-473-3330
                  </p>
                </div>
                
                <div>
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Mon-Fri: 9:00 AM - 5:00 PM<br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
