import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, Handshake, Calendar, DollarSign, Shield, AlertTriangle, Heart, Phone, Users, CheckCircle, XCircle, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Clinic 1 Medical",
  description: "Terms and conditions for medical services at Clinic 1 Medical in Edmonton, Alberta. Learn about your rights and responsibilities as a patient.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollText className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100">
              Understanding our agreement for providing healthcare services to you and your family
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Effective Date: September 21, 2025 | Last Updated: September 2025
            </p>
          </div>
        </div>
      </section>

      {/* Simple Summary Section */}
      <section className="py-8 bg-green-50 border-b-2 border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">Simple Summary</h2>
                <p className="text-gray-700">
                  These terms explain how our medical clinic works. Think of it like a friendly agreement between you and us.
                  We promise to take good care of you, and you promise to work with us as a partner in your health.
                  We&apos;ll explain everything in simple words that anyone can understand - no confusing legal language!
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

            {/* Welcome and Introduction */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Handshake className="h-6 w-6" />
                  <span>Welcome to Clinic 1 Medical</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Thank you for choosing Clinic 1 Medical for your healthcare needs. We&apos;re located at Royal Centre,
                  16644-71 St NW, Edmonton, Alberta T5Z 0N5. Our doctors, Dr. Deji Ogundiya and Dr. Collington Akpede,
                  along with our entire team, are committed to providing you with excellent medical care.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>What These Terms Mean:</strong> When you come to our clinic or use our services, you&apos;re agreeing
                    to these terms. Don&apos;t worry - they&apos;re designed to protect both you and us, and ensure everyone gets the
                    best possible care.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Services */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Heart className="h-6 w-6" />
                  <span>Our Medical Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">What We Provide</h3>
                  <p className="text-gray-700 mb-4">
                    Clinic 1 Medical is a family medicine practice. This means we provide:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Regular Healthcare</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Check-ups and physical exams</li>
                        <li>• Treatment for common illnesses</li>
                        <li>• Managing ongoing health conditions</li>
                        <li>• Preventive care and health screening</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Special Services</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Vaccinations and immunizations</li>
                        <li>• Minor procedures</li>
                        <li>• Mental health support</li>
                        <li>• Referrals to specialists when needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                    What We Don&apos;t Provide
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We&apos;re not an emergency room. If you have a life-threatening emergency, call 911 or go to the nearest
                    hospital emergency department immediately. For urgent but non-emergency issues after hours, call Health Link at 811.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Good to Know:</strong> We follow all guidelines from Alberta Health Services and the College of
                    Physicians & Surgeons of Alberta to ensure you receive safe, high-quality care.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Appointments and Scheduling */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Calendar className="h-6 w-6" />
                  <span>Appointments and Scheduling</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Making Appointments</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-3">You can book appointments by:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Phone className="h-4 w-4 text-blue-600 mr-2" />
                          Calling us at 780-761-2430 during office hours
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Texting us at 587-926-7747
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 text-purple-600 mr-2" />
                          Visiting our clinic in person
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Our Office Hours</h3>
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</li>
                        <li><strong>Saturday & Sunday:</strong> Closed</li>
                        <li><strong>Holidays:</strong> Closed</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Important Appointment Rules</h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Please Arrive on Time",
                          description: "Try to arrive 10 minutes early for paperwork. If you&apos;re more than 15 minutes late, we might need to reschedule.",
                          icon: "⏰"
                        },
                        {
                          title: "24-Hour Cancellation Notice",
                          description: "If you can&apos;t make your appointment, please let us know at least 24 hours ahead so someone else can use that time.",
                          icon: "📞"
                        },
                        {
                          title: "No-Show Policy",
                          description: "If you miss appointments without telling us, we may need to charge a fee or limit future bookings.",
                          icon: "📅"
                        },
                        {
                          title: "One Issue Per Visit",
                          description: "Regular appointments are usually for one main health concern. If you have multiple issues, please let us know when booking so we can schedule enough time.",
                          icon: "📋"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patient Responsibilities */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Users className="h-6 w-6" />
                  <span>Your Responsibilities as a Patient</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700">
                  Good healthcare is a team effort! Here&apos;s how you can help us help you:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      category: "Be Honest and Complete",
                      items: [
                        "Tell us about all your symptoms, even if they seem embarrassing",
                        "Share your complete medical history",
                        "Tell us about all medications and supplements you take",
                        "Let us know about allergies or bad reactions to medicines"
                      ],
                      color: "green"
                    },
                    {
                      category: "Follow Medical Advice",
                      items: [
                        "Take medications as prescribed",
                        "Follow treatment plans we agree on together",
                        "Complete recommended tests and follow-ups",
                        "Ask questions if you don&apos;t understand something"
                      ],
                      color: "blue"
                    },
                    {
                      category: "Be Respectful",
                      items: [
                        "Treat our staff and other patients with kindness",
                        "Respect our clinic&apos;s property and equipment",
                        "Keep your voice down in waiting areas",
                        "Turn off or silence your phone during appointments"
                      ],
                      color: "purple"
                    },
                    {
                      category: "Keep Information Updated",
                      items: [
                        "Tell us if your address or phone number changes",
                        "Update your Alberta Health Care card when renewed",
                        "Inform us about changes in insurance coverage",
                        "Let us know about new health conditions or medications"
                      ],
                      color: "orange"
                    }
                  ].map((section, index) => (
                    <div key={index} className={`bg-${section.color}-50 p-4 rounded-lg border border-${section.color}-200`}>
                      <h4 className="font-semibold text-gray-900 mb-3">{section.category}</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {section.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    Unacceptable Behavior
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We have zero tolerance for violence, threats, harassment, or abuse toward our staff or other patients.
                    Such behavior may result in immediate dismissal from our practice and could be reported to authorities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Commitments to You */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Shield className="h-6 w-6" />
                  <span>Our Commitments to You</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700">
                  When you choose Clinic 1 Medical, here&apos;s what we promise:
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Quality Medical Care",
                      description: "We&apos;ll provide professional, evidence-based medical care following current best practices and guidelines.",
                      icon: "🏥"
                    },
                    {
                      title: "Respect and Dignity",
                      description: "We&apos;ll treat you with respect, maintain your dignity, and never discriminate based on race, religion, gender, age, or any other factor.",
                      icon: "🤝"
                    },
                    {
                      title: "Privacy and Confidentiality",
                      description: "We&apos;ll keep your health information private and only share it according to our privacy policy and the law.",
                      icon: "🔒"
                    },
                    {
                      title: "Clear Communication",
                      description: "We&apos;ll explain your health conditions and treatment options in words you can understand, and answer your questions.",
                      icon: "💬"
                    },
                    {
                      title: "Timely Service",
                      description: "We&apos;ll do our best to see you on time and minimize waiting. If delays occur, we&apos;ll keep you informed.",
                      icon: "⏱️"
                    },
                    {
                      title: "Safe Environment",
                      description: "We&apos;ll maintain a clean, safe clinic environment and follow all health and safety protocols.",
                      icon: "✨"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4 p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
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

            {/* Fees and Payment */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <DollarSign className="h-6 w-6" />
                  <span>Fees and Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Services Covered by Alberta Health Care</h3>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-gray-700 mb-3">
                        Most medical services are covered by your Alberta Health Care Insurance Plan (AHCIP), including:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Doctor visits and consultations</li>
                        <li>• Most medical examinations</li>
                        <li>• Treatment for illnesses and injuries</li>
                        <li>• Many diagnostic tests ordered by your doctor</li>
                      </ul>
                      <p className="text-sm text-green-800 mt-3">
                        <strong>Important:</strong> You must have a valid Alberta Health Care card for coverage.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Services That May Have Fees</h3>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-gray-700 mb-3">
                        Some services are not covered by Alberta Health Care and require payment:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Medical notes for work/school</li>
                        <li>• Forms for insurance/employment</li>
                        <li>• Driver&apos;s medical exams</li>
                        <li>• Copies of medical records</li>
                        <li>• Missed appointments (no-shows)</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-3 italic">
                        * We&apos;ll always tell you the cost before providing these services.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Payment Methods</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-3">We accept the following payment methods for uninsured services:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center p-2 bg-white rounded border border-blue-200">
                          <span className="text-2xl">💵</span>
                          <p className="text-xs mt-1">Cash</p>
                        </div>
                        <div className="text-center p-2 bg-white rounded border border-blue-200">
                          <span className="text-2xl">💳</span>
                          <p className="text-xs mt-1">Debit Card</p>
                        </div>
                        <div className="text-center p-2 bg-white rounded border border-blue-200">
                          <span className="text-2xl">💳</span>
                          <p className="text-xs mt-1">Credit Card</p>
                        </div>
                        <div className="text-center p-2 bg-white rounded border border-blue-200">
                          <span className="text-2xl">📧</span>
                          <p className="text-xs mt-1">e-Transfer</p>
                        </div>
                      </div>
                      <p className="text-sm text-blue-800 mt-3">
                        <strong>Note:</strong> Payment is expected at the time of service unless other arrangements are made.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Records */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <ScrollText className="h-6 w-6" />
                  <span>Medical Records and Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Your Medical Records</h3>
                    <p className="text-gray-700 mb-3">
                      Your medical records contain important information about your health. Here&apos;s what you need to know:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>You have the right to see your medical records</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>You can request copies (fees may apply)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Records are kept secure and confidential</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>We keep records for at least 10 years as required by law</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Transferring Records</h4>
                    <p className="text-gray-700 text-sm">
                      If you move or change doctors, we can transfer your records. You&apos;ll need to sign a consent form,
                      and there may be a fee for copying and sending records. We&apos;ll keep a copy for our files as required by law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prescription and Medication */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Heart className="h-6 w-6" />
                  <span>Prescriptions and Medications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    When we prescribe medications, here are the important rules:
                  </p>

                  <div className="grid gap-3">
                    {[
                      {
                        title: "Prescription Refills",
                        description: "Please request refills during appointments or with 48 hours notice. Don&apos;t wait until you&apos;re completely out of medication.",
                        color: "blue"
                      },
                      {
                        title: "Controlled Substances",
                        description: "Some medications (like pain medicines) have special rules. We follow strict guidelines and may require regular appointments.",
                        color: "orange"
                      },
                      {
                        title: "Lost Prescriptions",
                        description: "If you lose a prescription, especially for controlled substances, you must report it. Replacement fees may apply.",
                        color: "red"
                      },
                      {
                        title: "Generic Medications",
                        description: "We may prescribe generic versions to save you money. They work the same as brand names. Tell us if you need a specific brand.",
                        color: "green"
                      },
                      {
                        title: "Medication Reviews",
                        description: "We regularly review your medications to ensure they&apos;re still right for you. Bring all your medications to appointments.",
                        color: "purple"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`bg-${item.color}-50 p-3 rounded-lg border-l-4 border-${item.color}-500`}>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ending the Doctor-Patient Relationship */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Users className="h-6 w-6" />
                  <span>Ending the Doctor-Patient Relationship</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700">
                  Sometimes, the relationship between a patient and clinic needs to end. This is rare, but it&apos;s important
                  to understand when and how this might happen:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">You Can Leave Anytime</h4>
                    <p className="text-gray-700 text-sm">
                      You&apos;re always free to choose a different doctor or clinic. Just let us know so we can transfer your records
                      if needed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When We Might End Services</h4>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-gray-700 text-sm mb-2">We may need to end our services if:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• You&apos;re violent, threatening, or abusive to staff or patients</li>
                        <li>• You repeatedly miss appointments without notice</li>
                        <li>• You forge prescriptions or sell medications</li>
                        <li>• You move outside our service area</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How It Works</h4>
                    <p className="text-gray-700 text-sm">
                      If we must end services, we&apos;ll give you written notice (usually 30 days) and help you find another doctor.
                      We&apos;ll continue emergency care during this time if needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complaints and Concerns */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Complaints and Concerns</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700">
                  We want you to be happy with your care. If something isn&apos;t right, please tell us so we can fix it:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Step 1: Talk to Us First</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Most problems can be solved by talking. You can:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Speak with your doctor directly</li>
                      <li>• Talk to our clinic manager</li>
                      <li>• Call us at 780-761-2430</li>
                      <li>• Write a letter to our clinic address</li>
                    </ul>
                  </div>


                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Our Promise:</strong> We take all complaints seriously and will never treat you differently
                      for raising concerns. Your feedback helps us improve!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consent and Agreement */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Handshake className="h-6 w-6" />
                  <span>Your Consent and Agreement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    By receiving services at Clinic 1 Medical, you&apos;re agreeing that:
                  </p>

                  <div className="space-y-3">
                    {[
                      "You&apos;ve read and understood these terms (or had them explained to you)",
                      "You agree to work with us as a partner in your healthcare",
                      "You&apos;ll provide accurate information about your health",
                      "You understand that medicine isn&apos;t perfect and results can&apos;t be guaranteed",
                      "You&apos;ll follow the rules and policies of our clinic",
                      "You agree to pay for services not covered by Alberta Health Care"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <p className="text-gray-700 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Consent Situations</h4>
                    <p className="text-gray-700 text-sm">
                      Some procedures or treatments need special written consent. We&apos;ll always explain these to you and
                      answer your questions before asking you to sign anything.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Shield className="h-6 w-6" />
                  <span>Legal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                    <p className="text-gray-700 text-sm">
                      These terms are governed by the laws of Alberta, Canada. Any disputes will be handled in Alberta courts.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                    <p className="text-gray-700 text-sm">
                      While we provide professional medical care following best practices, medicine involves uncertainties.
                      We cannot guarantee specific outcomes. Our liability is limited to what&apos;s allowed under Alberta law
                      and our professional insurance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Warranties</h4>
                    <p className="text-gray-700 text-sm">
                      Medical treatment is provided &ldquo;as is&rdquo; based on current medical knowledge. We don&apos;t guarantee that
                      treatment will cure or improve any condition, though we&apos;ll always do our best.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Standards</h4>
                    <p className="text-gray-700 text-sm">
                      Our doctors are licensed by the College of Physicians & Surgeons of Alberta and follow all
                      professional standards and ethical guidelines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Phone className="h-6 w-6" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  If you have any questions about these terms or need clarification, please contact us:
                </p>

                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Clinic 1 Medical</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>Phone: 780-761-2430</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>Text: 587-926-7747</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ScrollText className="h-5 w-5 text-blue-600" />
                      <span>Fax: 780-473-3330</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p>Royal Centre</p>
                        <p>16644-71 St NW</p>
                        <p>Edmonton, AB T5Z 0N5</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Closed Weekends and Statutory Holidays
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800 text-center">
                    <strong>Thank you for choosing Clinic 1 Medical.</strong> We look forward to being your healthcare partner
                    and helping you and your family stay healthy!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-blue-800">Changes to These Terms</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  We may update these terms from time to time to reflect changes in our services, laws, or clinic policies.
                  When we make changes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>We&apos;ll post the updated terms on our website</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>We&apos;ll update the &ldquo;Last Updated&rdquo; date at the top</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>For major changes, we&apos;ll post notices in our clinic</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Continued use of our services means you accept the new terms</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Your Rights:</strong> If you don&apos;t agree with changes to our terms, you can choose to find
                    another healthcare provider. We&apos;ll help transfer your records as needed.
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