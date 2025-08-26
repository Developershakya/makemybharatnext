import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator"
import { Phone, Mail } from "lucide-react";
export default function term(){
    return(   <div
        className="min-h-screen my-scroll"
        style={{ backgroundImage: "url('/img/bg/map.png')" }}
      >
        <section className="flex items-center justify-center h-54 bg-gradient-to-r from-orange-400 to-pink-500 text-white">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Badge>MakeMyBharatYatra</Badge>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl uppercase tracking-tight mt-1">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </section>

        {/* <Card >
          <CardContent> */}
        <div className="max-w-7xl mx-auto  p-6 md:p-8  ">
          <section className="  ">
            <p className="text-orange-500 font-black text-lg text-center">
              Make My Bharat Yatra
            </p>
            <Card>
              {/* Introduction */}
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-white leading-relaxed">
                  Welcome to Make My Bharat Yatra. By using our website,{" "}
                  <strong>
                    <a
                      href="https://www.makemybharatyatra.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:underline"
                    >
                      www.makemybharatyatra.com
                    </a>
                  </strong>
                  , and our services, including holiday packages, flight
                  bookings, cabs, and train bookings, you agree to comply with
                  the following terms and conditions. Please read them carefully
                  before making any bookings.
                </p>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 1 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                1. General Terms
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ">
                  <li>
                    These Terms and Conditions apply to all services provided by
                    Make My Bharat Yatra (here in after referred to as the
                    Company, `we, `us`, `or`, `our`).
                  </li>

                  <li>
                    By accessing our website or booking through any of our
                    platforms, you agree to be bound by these terms.
                  </li>
                  <li>
                    The Company reserves the right to modify or update these
                    terms at any time without prior notice. Continued use of the
                    website or services after any such changes constitutes your
                    acceptance of the new terms.
                  </li>
                  <li>
                    All communication related to bookings, cancellations,
                    inquiries, and support will be handled through our official
                    contact channels: Helpline +91 1204223100 and email
                    info@makemybharatyatra.com.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 2 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                2. Bookings and Payments
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    All bookings are subject to availability. We reserve the
                    right to refuse any booking at our discretion.
                  </li>
                  <li>
                    The prices of packages, flights, cabs, and train bookings
                    are subject to change without prior notice due to factors
                    beyond our control, such as fluctuations in fuel prices or
                    changes in government taxes.
                  </li>
                  <li>
                    Full payment must be made at the time of booking unless
                    otherwise specified. Failure to make timely payments may
                    result in the cancellation of your booking.
                  </li>
                  <li>
                    Payment options available include credit cards, debit cards,
                    net banking, UPI, and other payment methods listed on our
                    website.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 3 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                3. Cancellations and Refunds
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Any cancellations or modifications to your booking must be
                    communicated to us through our helpline or email.
                  </li>
                  <li>
                    Cancellation charges may apply depending on the type of
                    booking (flights, hotels, trains, cabs, etc) and the time of
                    cancellation. The specific cancellation terms will be
                    communicated to you at the time of booking.
                  </li>
                  <li>
                    Refunds will be processed within a reasonable time frame
                    after receiving your cancellation request. The amount
                    refunded may be subject to cancellation charges and
                    deductions as per the respective airline, hotel, or service
                    provider’s policies.
                  </li>
                  <li>
                    No refunds will be provided for no-shows or failure to avail
                    of services after booking.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 4 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                4. Holiday Packages
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Holiday packages may include a combination of travel,
                    accommodation, and other services. The detailed itinerary
                    and inclusions will be provided at the time of booking.
                  </li>
                  <li>
                    We are not responsible for delays, cancellations, or
                    interruptions caused by events beyond our control, such as
                    natural disasters, strikes, or political unrest.
                  </li>
                  <li>
                    Any changes or special requests in your package should be
                    communicated at least 15 days in advance and are subject to
                    availability. Additional charges may apply for
                    modifications.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 5 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                5. Flight, Train, and Cab Bookings
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Flight and train bookings are subject to the specific terms
                    and conditions of the respective airlines and Indian
                    Railways.
                  </li>
                  <li>
                    We are not responsible for flight or train delays,
                    cancellations, or rescheduling. The relevant airline or
                    railway authority’s rules and regulations will apply in such
                    cases.
                  </li>
                  <li>
                    Cab bookings will be confirmed at the time of booking, and
                    any changes or cancellations should be communicated as early
                    as possible. No-shows or last-minute cancellations may
                    result in full booking charges.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 6 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                6. Travel Documentation
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    It is your responsibility to ensure that you have all
                    necessary travel documentation, including passports, visas,
                    permits, and identification, before your trip.
                  </li>
                  <li>
                    We are not responsible for any issues arising from
                    incomplete or incorrect documentation.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 7 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                7. Limitation of Liability
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    We act only as an intermediary between you and various
                    service providers (such as airlines, hotels, cab companies,
                    etc.). We are not responsible for any acts, errors,
                    omissions, or negligence on the part of these service
                    providers.
                  </li>
                  <li>
                    We will not be liable for any direct, indirect, incidental,
                    or consequential damages arising from your use of our
                    services.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 8 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                8. User Responsibilities
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    You agree to provide accurate and complete information when
                    making a booking and to promptly notify us of any changes.
                  </li>
                  <li>
                    You agree not to misuse our website or services for
                    fraudulent purposes or in any manner that violates
                    applicable laws.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 9 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                9. Privacy Policy
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Your use of the website and services is subject to our
                    Privacy Policy, which outlines how we collect, use, and
                    protect your personal data. Please refer to the Privacy
                    Policy section on our website for more details.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Section 10 */}
          <section className="space-y-4 m-2 bg-white">
            <Card>
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-4">
                10. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3 text-slate-900 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of India. Any disputes arising out
                    of or in connection with these terms shall be subject to the
                    exclusive jurisdiction of the courts in India.
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* <Separator /> */}

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-slate-50 text-center mb-4">
              For any inquiries or assistance, please contact us at:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="tel:+911204223100"
                className="flex items-center gap-2 text-slate-900 hover:text-slate-800 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">Helpline: +91 1204223100</span>
              </a>

              <a
                href="mailto:info@makemybharatyatra.com"
                className="flex items-center gap-2 text-slate-900 hover:text-slate-800 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">
                  Email: info@makemybharatyatra.com
                </span>
              </a>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-sm text-slate-900 pt-6 border-t">
            <p className=" text-slate-900 font-black">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        {/* </CardContent>
        </Card> */}
      </div>);
}