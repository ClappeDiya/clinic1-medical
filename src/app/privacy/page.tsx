import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, FileText, Mail, Phone, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy | Clinic 1 Medical",
  description: "Learn how Clinic 1 Medical protects your personal health information and privacy rights in Edmonton, Alberta.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-emerald-100">
              Your privacy is our priority. Learn how we protect your personal health information.
            </p>
            <p className="text-sm text-emerald-200 mt-4">
              Effective Date: September 21, 2025 | Last Updated: September 2025
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-8 bg-yellow-50 border-b-2 border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">Quick Summary for Easy Understanding</h2>
                <p className="text-gray-700">
                  At Clinic 1 Medical, we keep your health information private and safe. We only use your information to help take care of you,
                  and we never share it with anyone unless the law says we have to, or you tell us it's okay. This policy explains everything
                  in simple terms that anyone can understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Introduction Card */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <FileText className="h-6 w-6" />
                  <span>Welcome to Our Privacy Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Clinic 1 Medical, located at Royal Center, 16644-71 St NW, Edmonton, Alberta T5Z ON5, is committed to protecting
                  your privacy. This policy explains in simple terms how we collect, use, and protect your personal information when
                  you visit our clinic or use our services.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Our Promise:</strong> We follow all Canadian privacy laws, including the Personal Information Protection Act (PIPA)
                    of Alberta and the Personal Health Information Act (HIA).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What Information We Collect */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <Eye className="h-6 w-6" />
                  <span>What Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Personal Information We Collect:</h3>

                  <div className="grid gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Basic Information</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Your name, date of birth, and gender</li>
                        <li>• Your address, phone number, and email</li>
                        <li>• Your Alberta Health Care number</li>
                        <li>• Emergency contact information</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Health Information</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Your medical history and current health conditions</li>
                        <li>• Medications you're taking</li>
                        <li>• Test results and x-rays</li>
                        <li>• Notes from your doctor visits</li>
                        <li>• Allergies and immunization records</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Administrative Information</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Insurance information for billing</li>
                        <li>• Appointment dates and times</li>
                        <li>• Payment records</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Remember:</strong> We only collect information that helps us take better care of you. We never collect
                    information we don't need.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <Users className="h-6 w-6" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We use your information only for important reasons related to your healthcare:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: "To Provide Medical Care",
                      description: "Your doctors and nurses use your health information to diagnose illnesses, plan treatments, and keep track of your health over time.",
                      icon: "🏥"
                    },
                    {
                      title: "To Book and Manage Appointments",
                      description: "We use your contact information to schedule appointments, send reminders, and let you know about any changes.",
                      icon: "📅"
                    },
                    {
                      title: "To Send Test Results",
                      description: "When your lab tests or x-rays are ready, we use your contact information to share the results with you safely.",
                      icon: "🔬"
                    },
                    {
                      title: "To Handle Billing",
                      description: "We use your insurance information to bill for services and process payments properly.",
                      icon: "💳"
                    },
                    {
                      title: "To Improve Our Services",
                      description: "We look at overall patterns (without identifying individuals) to make our clinic better for everyone.",
                      icon: "📊"
                    },
                    {
                      title: "To Meet Legal Requirements",
                      description: "Sometimes the law requires us to keep certain records or share information with health authorities.",
                      icon: "⚖️"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Who We Share Information With */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <Lock className="h-6 w-6" />
                  <span>Who We Share Information With</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We are very careful about who we share your information with. We only share when:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">With Your Permission</h4>
                    <p className="text-gray-700 mt-1">
                      We share your information with other doctors, specialists, or family members only when you tell us it's okay.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">For Your Healthcare</h4>
                    <p className="text-gray-700 mt-1">
                      We may share with pharmacies to fill prescriptions, laboratories for tests, or specialists when we refer you.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">When Required by Law</h4>
                    <p className="text-gray-700 mt-1">
                      Sometimes the law says we must share information, like reporting certain diseases to Alberta Health Services
                      or responding to court orders.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">In Emergencies</h4>
                    <p className="text-gray-700 mt-1">
                      If you have a medical emergency and can't speak for yourself, we may share information to save your life.
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* How We Protect Your Information */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <Shield className="h-6 w-6" />
                  <span>How We Protect Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We work hard to keep your information safe and secure:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Physical Security",
                      items: [
                        "Locked filing cabinets for paper records",
                        "Secure areas only staff can enter",
                        "Alarm systems after hours",
                        "Proper disposal of documents (shredding)"
                      ]
                    },
                    {
                      title: "Digital Security",
                      items: [
                        "Password-protected computers",
                        "Encrypted electronic files",
                        "Secure networks with firewalls",
                        "Regular security updates"
                      ]
                    },
                    {
                      title: "Staff Training",
                      items: [
                        "All staff sign confidentiality agreements",
                        "Regular privacy training",
                        "Access only to needed information",
                        "Clear privacy procedures"
                      ]
                    },
                    {
                      title: "Administrative Safeguards",
                      items: [
                        "Regular privacy audits",
                        "Incident response procedures",
                        "Minimum necessary rule",
                        "Partner agreements for protection"
                      ]
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {category.title}
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {category.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <CheckCircle className="h-6 w-6" />
                  <span>Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  You have important rights about your personal health information:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      right: "Right to See Your Records",
                      description: "You can ask to see your medical records anytime. We'll show them to you or give you copies.",
                      how: "Submit a written request at our front desk or call us at 780-761-2430"
                    },
                    {
                      right: "Right to Fix Mistakes",
                      description: "If you find something wrong in your records, you can ask us to correct it.",
                      how: "Tell us what needs to be fixed and provide any supporting documents"
                    },
                    {
                      right: "Right to Know Who Saw Your Information",
                      description: "You can ask for a list of who we've shared your information with.",
                      how: "Request an 'accounting of disclosures' in writing"
                    },
                    {
                      right: "Right to Limit Sharing",
                      description: "You can ask us not to share certain information, though we may need to share some things by law.",
                      how: "Discuss your preferences with your doctor or our privacy officer"
                    },
                    {
                      right: "Right to Choose Communication Methods",
                      description: "You can tell us how you want us to contact you (phone, email, mail).",
                      how: "Update your communication preferences at the front desk"
                    },
                    {
                      right: "Right to File a Complaint",
                      description: "If you think we haven't protected your privacy, you can file a complaint.",
                      how: "Contact our Privacy Officer or the Office of the Information and Privacy Commissioner of Alberta"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">{item.right}</h4>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      <div className="bg-blue-50 px-3 py-2 rounded">
                        <p className="text-sm text-blue-800">
                          <strong>How to use this right:</strong> {item.how}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Situations */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <AlertCircle className="h-6 w-6" />
                  <span>Special Situations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">For Patients Under 18</h4>
                    <p className="text-gray-700">
                      If you're under 18, your parents or guardians usually have access to your health information. However,
                      in Alberta, mature minors (those who understand their treatment) may have privacy rights. Talk to your
                      doctor if you have questions.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Online and Electronic Communications</h4>
                    <p className="text-gray-700">
                      When you email or text us, remember that these aren't always secure. We recommend:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                      <li>• Not sending sensitive health details by regular email</li>
                      <li>• Using our secure patient portal when available</li>
                      <li>• Calling for urgent matters: 780-761-2430</li>
                      <li>• Being careful with health information on social media</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After-Hours and Emergency Situations</h4>
                    <p className="text-gray-700">
                      In emergencies, protecting life and health comes first. We may share information without consent if
                      needed to provide emergency care. For non-emergencies after hours, call Health Link at 811.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Our Privacy Officer */}
            <Card className="border-emerald-200 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-emerald-800">
                  <Mail className="h-6 w-6" />
                  <span>Contact Our Privacy Officer</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  If you have any questions about this privacy policy or how we handle your information, please don't hesitate
                  to contact us. We're here to help!
                </p>

                <div className="bg-white p-6 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Privacy Officer</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <span>Phone: 780-761-2430</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <span>Text: 587-926-7747</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-gray-600">Closed Weekends and Holidays</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p>Clinic 1 Medical</p>
                        <p>Royal Center, 16644-71 St NW</p>
                        <p>Edmonton, AB T5Z ON5</p>
                        <p>Fax: 780-473-3330</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">External Privacy Resources</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    If you have concerns that we haven't addressed, you can also contact:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Office of the Information and Privacy Commissioner of Alberta</strong>
                      <p className="text-gray-600">Phone: 1-888-878-4044</p>
                      <p className="text-gray-600">Website: www.oipc.ab.ca</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to This Policy */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardTitle className="text-emerald-800">Updates to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.
                  When we make changes:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• We'll post the new policy on our website</li>
                  <li>• We'll update the "Last Updated" date at the top</li>
                  <li>• For major changes, we'll post a notice in our clinic</li>
                  <li>• You can always ask for a printed copy of the current policy</li>
                </ul>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Thank you for trusting Clinic 1 Medical with your healthcare.</strong> Your privacy and trust are
                    essential to us, and we're committed to protecting your personal information while providing you with the
                    best possible medical care.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}