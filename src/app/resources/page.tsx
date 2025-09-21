import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText,
  Download,
  Heart,
  Brain,
  Activity,
  Apple,
  ShieldCheck,
  Pill,
  Phone,
  Calendar,
  AlertCircle,
  Info,
  Users,
  CreditCard
} from "lucide-react"
import ClinicLogo from "@/components/ClinicLogo"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              Patient Resources & Information
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Health Resources Center
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access important health information, patient forms, and educational resources 
              to help you make informed decisions about your healthcare. We&apos;re committed to 
              empowering you with the knowledge you need for better health.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Get quick access to the most commonly needed patient resources and information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Patient Forms</h3>
              <p className="text-sm text-gray-600 mb-4">Download and complete forms before your visit</p>
              <Button size="sm" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
              <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Insurance Info</h3>
              <p className="text-sm text-gray-600 mb-4">Insurance plans and billing information</p>
              <Button size="sm" variant="outline">
                <Info className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-purple-200">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Appointments</h3>
              <p className="text-sm text-gray-600 mb-4">Schedule, reschedule, or cancel appointments</p>
              <Button size="sm" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-orange-200">
              <AlertCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Urgent Care</h3>
              <p className="text-sm text-gray-600 mb-4">When to seek immediate medical attention</p>
              <Button size="sm" variant="outline">
                <Info className="mr-2 h-4 w-4" />
                Read Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Health Education Resources
            </h2>
            <p className="text-xl text-gray-600">
              Learn about important health topics and discover ways to improve your wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Heart Health */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Heart className="h-8 w-8 text-red-500" />
                  <CardTitle className="text-xl">Heart Health</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Learn about cardiovascular health, prevention strategies, and lifestyle changes to support heart wellness.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Understanding blood pressure</li>
                  <li>• Cholesterol management</li>
                  <li>• Heart-healthy diet tips</li>
                  <li>• Exercise recommendations</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/heart-health-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Diabetes Management */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-xl">Diabetes Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive information about diabetes management, monitoring, and lifestyle modifications.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Blood sugar monitoring</li>
                  <li>• Medication management</li>
                  <li>• Diabetic diet planning</li>
                  <li>• Complication prevention</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/diabetes-care-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mental Health */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Brain className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-xl">Mental Wellness</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Resources for mental health awareness, stress management, and emotional well-being.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Stress management techniques</li>
                  <li>• Anxiety and depression resources</li>
                  <li>• Sleep hygiene tips</li>
                  <li>• Work-life balance strategies</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/mental-wellness-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Nutrition & Diet */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Apple className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-xl">Nutrition Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Evidence-based nutrition information to help you make healthy dietary choices.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Balanced diet principles</li>
                  <li>• Portion control tips</li>
                  <li>• Healthy meal planning</li>
                  <li>• Special dietary considerations</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/nutrition-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Preventive Care */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <ShieldCheck className="h-8 w-8 text-indigo-500" />
                  <CardTitle className="text-xl">Preventive Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Learn about important screenings, vaccinations, and preventive measures for optimal health.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Recommended health screenings</li>
                  <li>• Vaccination schedules</li>
                  <li>• Cancer prevention strategies</li>
                  <li>• Annual check-up importance</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/preventive-care-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Medication Safety */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Pill className="h-8 w-8 text-orange-500" />
                  <CardTitle className="text-xl">Medication Safety</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Important information about medication management, safety, and proper usage.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Proper medication storage</li>
                  <li>• Understanding prescriptions</li>
                  <li>• Drug interactions</li>
                  <li>• Side effect management</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/assets/pdfs/patient-education/medication-safety-guide.html" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Forms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Patient Forms & Documents
            </h2>
            <p className="text-xl text-gray-600">
              Download and complete these forms before your appointment to save time during your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">New Patient Registration Form</h3>
                  <p className="text-sm text-gray-600">Complete this form if you&apos;re a new patient</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assets/pdfs/patient-forms/new-patient-registration-form.html" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Medical History Form</h3>
                  <p className="text-sm text-gray-600">Detailed medical history and current medications</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assets/pdfs/patient-forms/medical-history-form.html" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Insurance Information Form</h3>
                  <p className="text-sm text-gray-600">Insurance details and billing information</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assets/pdfs/patient-forms/insurance-information-form.html" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg flex items-center justify-center">
                  <ClinicLogo className="h-6 w-6" showText={false} width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Consent for Treatment</h3>
                  <p className="text-sm text-gray-600">Treatment consent and privacy authorization</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assets/pdfs/patient-forms/consent-for-treatment-form.html" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Information</h2>
              <p className="text-xl text-gray-600">Know when to seek immediate medical attention</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-4">Call 911 Immediately If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chest pain or difficulty breathing</li>
                  <li>• Severe allergic reactions</li>
                  <li>• Loss of consciousness</li>
                  <li>• Severe head injury</li>
                  <li>• Stroke symptoms (F.A.S.T.)</li>
                  <li>• Severe bleeding or trauma</li>
                </ul>
              </Card>

              <Card className="p-6 border-orange-200">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Contact Our Clinic For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Persistent fever or illness</li>
                  <li>• Minor injuries requiring attention</li>
                  <li>• Medication concerns</li>
                  <li>• Follow-up care questions</li>
                  <li>• Chronic condition management</li>
                  <li>• Preventive care scheduling</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-semibold text-gray-900">Phone: 780-761-2430</p>
                  <p className="font-semibold text-gray-900">Text: 587-926-7747</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Questions About Your Health?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Don&apos;t hesitate to reach out to our healthcare team. We&apos;re here to help you 
              navigate your health journey and provide the care you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-semibold shadow-lg">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
