import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  UserCheck,
  Award,
  GraduationCap,
  Heart,
  Activity,
  Users,
  Baby,
  Pill,
  Shield,
  Calendar,
  Phone,
  Star,
  CheckCircle
} from "lucide-react"

export default function DoctorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              Our Medical Team
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Our Experienced Family Physicians
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of board-certified family physicians brings decades of combined experience 
              in providing comprehensive healthcare for patients of all ages. Get to know the doctors 
              who are committed to your health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* Dr. Deji Ogundiya */}
            <Card className="max-w-6xl mx-auto overflow-hidden border-2 border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Photo Section */}
                <div className="lg:col-span-2 bg-emerald-50 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="bg-emerald-600 w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-6">
                      <UserCheck className="h-24 w-24 text-yellow-300" />
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Family Physician</Badge>
                  </div>
                </div>
                
                {/* Details Section */}
                <div className="lg:col-span-3 p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        Dr. Deji Ogundiya
                      </h2>
                      <p className="text-xl text-emerald-600 font-semibold">
                        M.D
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
                        Education & Qualifications
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Doctor of Medicine (M.D.)</li>
                        <li>• Licensed Family Physician in Alberta</li>
                        <li>• Member of the College of Physicians and Surgeons of Alberta</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-green-600" />
                        Areas of Expertise
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Preventive Care</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Chronic Disease Management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Diabetes Care</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Hypertension Management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Adult & Geriatric Care</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Health Screenings</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-red-500" />
                        Philosophy of Care
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Dr. Ogundiya believes in building strong, lasting relationships with his patients through 
                        compassionate care and evidence-based medicine. He emphasizes preventive care and patient 
                        education to help individuals and families achieve optimal health outcomes. With his extensive 
                        international training and Canadian certification, he brings a comprehensive approach to family medicine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dr. Collington Akpede */}
            <Card className="max-w-6xl mx-auto overflow-hidden border-2 border-teal-100 hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Photo Section */}
                <div className="lg:col-span-2 bg-teal-50 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="bg-teal-600 w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-6">
                      <UserCheck className="h-24 w-24 text-yellow-300" />
                    </div>
                    <Badge className="bg-teal-100 text-teal-800">Family Physician</Badge>
                  </div>
                </div>
                
                {/* Details Section */}
                <div className="lg:col-span-3 p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        Dr. Collington Akpede
                      </h2>
                      <p className="text-xl text-teal-600 font-semibold">
                        M.D
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-teal-600" />
                        Education & Qualifications
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Doctor of Medicine (M.D.)</li>
                        <li>• Licensed Family Physician in Alberta</li>
                        <li>• Member of the College of Physicians and Surgeons of Alberta</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-600" />
                        Areas of Expertise
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Family Medicine</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Women's Health</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Pediatric Care</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Acute Care</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Immunizations</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Physical Examinations</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-red-500" />
                        Philosophy of Care
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Dr. Akpede is dedicated to providing comprehensive, patient-centered healthcare with a focus 
                        on building trust and open communication with his patients. He believes in the importance of 
                        understanding each patient's unique needs and circumstances to deliver personalized medical care. 
                        His approach emphasizes both treatment and prevention to help patients achieve their health goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services We Provide Together */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care From Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Together, our physicians provide a full range of family medicine services 
              to meet the healthcare needs of patients at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventive Care</h3>
              <p className="text-gray-600">
                Annual check-ups, health screenings, and preventive measures to maintain optimal health.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chronic Disease Management</h3>
              <p className="text-gray-600">
                Comprehensive care for diabetes, hypertension, heart disease, and other chronic conditions.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Baby className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pediatric Care</h3>
              <p className="text-gray-600">
                Complete healthcare for infants, children, and adolescents including immunizations.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Women's Health</h3>
              <p className="text-gray-600">
                Specialized care for women's health needs including reproductive health services.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Pill className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acute Care</h3>
              <p className="text-gray-600">
                Prompt treatment for sudden illnesses, minor injuries, and urgent medical concerns.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Exams</h3>
              <p className="text-gray-600">
                Comprehensive physical examinations for employment, insurance, and routine health assessments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Meet Your Doctor?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Schedule an appointment with one of our experienced family physicians. 
              We're here to provide the comprehensive healthcare you and your family deserve.
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
