import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Baby,
  Users,
  Pill,
  UserCheck,
  Calendar,
  Phone,
  CheckCircle,
  Thermometer,
  Eye,
  Scissors,
  Syringe,
  FileText,
  HeartPulse,
  Brain,
  Video,
  UserPlus
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              Comprehensive Medical Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Family Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From routine check-ups to specialized care, we provide comprehensive medical services 
              for patients of all ages. Our experienced family physicians are committed to your 
              health and wellness throughout every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Medical Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a comprehensive range of family medicine services to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Preventive Care */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Proactive healthcare to prevent illness and maintain optimal wellness.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Annual physical examinations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Health screenings and assessments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cancer screening programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cardiovascular risk assessment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lifestyle counseling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chronic Disease Management */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <HeartPulse className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Chronic Disease Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Comprehensive care for long-term health conditions.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Diabetes management & monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Hypertension treatment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Heart disease care</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Asthma & COPD management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Arthritis & pain management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pediatric Care */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Baby className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Pediatric Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Comprehensive healthcare for children from birth to adolescence.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Well-child check-ups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Childhood immunizations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Growth & development monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Treatment of childhood illnesses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>School & sports physicals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Women&apos;s Health */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Women&apos;s Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Specialized healthcare services for women&apos;s unique health needs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Annual gynecological exams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Pap smears & cervical screening</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Breast health examinations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Contraception counseling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Menopause management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Acute Care */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Thermometer className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Acute Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Prompt treatment for sudden illnesses and urgent medical needs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cold & flu treatment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Infections & fever management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Minor injuries & wound care</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Allergic reactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Urgent medical consultations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mental Health Services - Psychiatrist */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-teal-100 text-teal-800">Specialist Available</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Mental Health & Psychiatry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Visiting psychiatrist provides specialized mental health care.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Depression & anxiety treatment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Medication management for mental health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>ADHD assessment & treatment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bipolar disorder management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Video className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Virtual & in-person appointments</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Physical Examinations */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Physical Examinations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Comprehensive health assessments for various purposes.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Employment medical exams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Insurance medical assessments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Immigration medical exams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>DOT & commercial driver exams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Pre-operative assessments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 mb-4">
                Specialist Care Available
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Visiting Psychiatrist Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are pleased to offer specialized psychiatric care through our visiting psychiatrist,
                providing both in-person and virtual consultations for comprehensive mental health support.
              </p>
            </div>

            <Card className="p-8 shadow-xl border-2 border-teal-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Brain className="h-6 w-6 text-teal-600 mr-2" />
                    Conditions Treated
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Depression & mood disorders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Anxiety & panic disorders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>ADHD (adult & pediatric)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bipolar disorder</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>PTSD & trauma-related disorders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>OCD & related conditions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <UserPlus className="h-6 w-6 text-teal-600 mr-2" />
                    Consultation Options
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-2" />
                        In-Person Appointments
                      </h4>
                      <p className="text-sm text-gray-600">
                        Face-to-face consultations at our clinic for comprehensive psychiatric assessment and treatment.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Video className="h-5 w-5 text-green-600 mr-2" />
                        Virtual Consultations
                      </h4>
                      <p className="text-sm text-gray-600">
                        Convenient online appointments from the comfort of your home, maintaining the same quality of care.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Referral from your family physician may be required.
                      Please contact our office to schedule your psychiatric consultation.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Medical Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a wide range of additional services to meet your comprehensive healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Syringe className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Immunizations</h3>
              <p className="text-sm text-gray-600">Childhood, adult, and travel vaccines</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Eye className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Vision Screening</h3>
              <p className="text-sm text-gray-600">Basic eye health assessments</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Pill className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Medication Management</h3>
              <p className="text-sm text-gray-600">Prescription review and optimization</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Scissors className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Minor Procedures</h3>
              <p className="text-sm text-gray-600">Sutures, biopsies, and minor surgeries</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How to Schedule Your Appointment
            </h2>
            <p className="text-xl text-gray-600">
              Getting the care you need is simple. Follow these easy steps to schedule your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600">
                Call our office at 780-761-2430 or text us at 587-926-7747 to speak with our friendly staff.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule</h3>
              <p className="text-gray-600">
                Choose a convenient appointment time that works with your schedule. We offer flexible hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="h-10 w-10 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit</h3>
              <p className="text-gray-600">
                Arrive a few minutes early for your appointment and receive the quality care you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Our comprehensive medical services are designed to meet all your family&apos;s healthcare needs. 
              Schedule your appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-semibold shadow-lg">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 780-761-2430
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
