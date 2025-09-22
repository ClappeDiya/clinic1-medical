import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import OptimizedImage from "@/components/OptimizedImage"
import ClinicLogo from "@/components/ClinicLogo"
import {
  Heart,
  Shield,
  Users,
  Calendar,
  Phone,
  MapPin,
  Clock,
  Activity,
  Car,
  Baby,
  UserCheck,
  Pill,
  Award,
  Brain,
  Video
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Comprehensive 
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Family Care</span> 
                in Edmonton
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Clinic 1 Medical, we provide compassionate, patient-centered healthcare services 
                for families in Edmonton. Our experienced physicians are committed to your health and well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg px-6 py-3 text-sm sm:text-base lg:text-lg touch-manipulation min-h-[48px]">
                  <Link href="/contact">
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 text-sm sm:text-base lg:text-lg touch-manipulation min-h-[48px]">
                  <Link href="/doctors">
                    <UserCheck className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Meet Our Doctors</span>
                    <span className="sm:hidden">Our Doctors</span>
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">780-761-2430</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Royal Center, Edmonton</span>
                </div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="lg:col-span-5 w-full order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-md lg:max-w-none">
                <OptimizedImage
                  src="/assets/doctor-with-stethoscope.jpg"
                  alt="Professional male physician of African heritage at Clinic 1 Medical"
                  width={600}
                  height={400}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96"
                  priority={true}
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-700/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div className="bg-yellow-400 p-2 rounded-full flex-shrink-0">
                        <ClinicLogo className="h-6 w-12 sm:h-8 sm:w-16" showText={false} width={80} height={40} />
                      </div>
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-yellow-300">CLINIC 1 MEDICAL</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Hours</p>
                          <p className="text-emerald-100">Mon-Fri: 9AM-5PM</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Edmonton, AB</p>
                          <p className="text-emerald-100">Royal Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clinic 1 Medical?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We are committed to providing exceptional healthcare services with a personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="text-center border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg p-4 sm:p-6">
              <CardHeader className="pb-3">
                <div className="mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Patient-centered approach with personalized treatment plans tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg p-4 sm:p-6">
              <CardHeader className="pb-3">
                <div className="mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Experienced Doctors</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Board-certified family physicians with years of experience in comprehensive care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-teal-200 transition-all duration-300 hover:shadow-lg p-4 sm:p-6">
              <CardHeader className="pb-3">
                <div className="mx-auto bg-gradient-to-br from-teal-100 to-cyan-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Preventive Focus</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Emphasis on preventive care to help you maintain optimal health and wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg p-4 sm:p-6">
              <CardHeader className="pb-3">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Family-Centered</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Complete care for the whole family, from infants to seniors, all under one roof.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive family medicine services to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-emerald-200 hover:border-emerald-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/preventive-care.jpg"
                  alt="Preventive Healthcare Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Activity className="h-4 w-4 sm:h-6 sm:w-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-emerald-700 text-lg sm:text-xl">Preventive Care</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Regular check-ups, screenings, and immunizations to keep you healthy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-teal-200 hover:border-teal-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/chronic-disease-management.jpg"
                  alt="Chronic Disease Management Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <ClinicLogo className="h-6 w-12 sm:h-8 sm:w-16" showText={false} width={80} height={40} />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-teal-700 text-lg sm:text-xl">Chronic Disease Management</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Expert care for diabetes, hypertension, heart disease, and other conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-green-200 hover:border-green-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/pediatric-care.jpg"
                  alt="Pediatric Care Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Baby className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-green-700 text-lg sm:text-xl">Pediatric Care</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Comprehensive healthcare for children from birth through adolescence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-cyan-200 hover:border-cyan-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/womens-health.jpg"
                  alt="Women&apos;s Health Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <UserCheck className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-cyan-700 text-lg sm:text-xl">Women&apos;s Health</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Specialized care for women&apos;s health needs and reproductive health.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-yellow-200 hover:border-yellow-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/acute-care.jpg"
                  alt="Acute Care Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Pill className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-yellow-700 text-lg sm:text-xl">Acute Care</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Treatment for sudden illnesses, injuries, and urgent medical needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-lime-200 hover:border-lime-300">
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/physical-examination.jpg"
                  alt="Physical Examination Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lime-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-lime-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lime-700 text-lg sm:text-xl">Physical Examinations</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Thorough health assessments and employment medical examinations.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Mental Health & Psychiatry Services */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-purple-200 hover:border-purple-300 relative">
              <Badge className="absolute top-4 right-4 z-10 bg-purple-100 text-purple-800">Specialist Available</Badge>
              <div className="relative h-40 sm:h-48">
                <OptimizedImage
                  src="/assets/images/services/mental-health.jpg"
                  alt="Mental Health and Psychiatry Services"
                  width={400}
                  height={200}
                  className="w-full h-full"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/60 to-transparent">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                      <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-purple-700 text-lg sm:text-xl flex items-center gap-2">
                  Mental Health & Psychiatry
                  <Video className="h-4 w-4 text-purple-600" />
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Visiting psychiatrist provides specialized care with both in-person and virtual appointments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg px-6 py-3 text-base sm:text-lg touch-manipulation">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our experienced physicians are dedicated to providing exceptional care for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <div className="relative h-56 sm:h-64 md:h-72 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <UserCheck className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-yellow-300" />
                  </div>
                  <div className="bg-emerald-600/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 mx-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">Dr. Deji Ogundiya</h3>
                    <p className="text-yellow-300 font-semibold text-xs sm:text-sm md:text-base">M.D</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-emerald-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Family Physician</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Dr. Ogundiya brings extensive experience in family medicine with a focus on 
                  preventive care and chronic disease management.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
              <div className="relative h-56 sm:h-64 md:h-72 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <UserCheck className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-yellow-300" />
                  </div>
                  <div className="bg-teal-600/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 mx-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">Dr. Collington Akpede</h3>
                    <p className="text-yellow-300 font-semibold text-xs sm:text-sm md:text-base">M.D</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-teal-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Family Physician</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Dr. Akpede is committed to providing comprehensive healthcare with a 
                  patient-centered approach to medical practice.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 px-6 py-3 text-base sm:text-lg touch-manipulation">
              <Link href="/doctors">
                <span className="hidden sm:inline">Learn More About Our Doctors</span>
                <span className="sm:hidden">Meet Our Doctors</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Professional Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-4 py-1">
              Professional Location
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Conveniently Located in Royal Centre
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our modern clinic is situated in the heart of Edmonton, providing easy access 
              and ample parking for all our patients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Building Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <OptimizedImage
                  src="/assets/clinic1-new-building.jpg"
                  alt="Royal Centre building - Clinic 1 Medical location at 16644-71 St NW Edmonton, featuring modern architecture with ample parking"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80"
                  objectFit="cover"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-700/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <div className="bg-emerald-600/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                        <span className="font-bold text-sm sm:text-base">Royal Centre, Edmonton</span>
                      </div>
                      <p className="text-emerald-100 text-xs sm:text-sm">
                        16644-71 St NW, Edmonton, AB T5Z 0N5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Features */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Prime Location</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Easily accessible location in the Royal Centre plaza with excellent visibility 
                      and convenient access to other services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                    <Car className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Ample Parking</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Free parking available with wheelchair accessible entrances and 
                      ground floor location for easy access.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Convenient Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Open Monday through Friday, 9:00 AM to 5:00 PM, 
                      to fit your busy schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards better health. Contact us today to book your appointment 
            with our experienced family physicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
            <Button asChild size="lg" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-semibold shadow-lg px-6 sm:px-8 py-3 text-base sm:text-lg touch-manipulation">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-6 sm:px-8 py-3 text-base sm:text-lg touch-manipulation">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">Call Us: 780-761-2430</span>
                <span className="sm:hidden">Call: 780-761-2430</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
