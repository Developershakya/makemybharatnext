// 



import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Zap, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// removed TypeScript interface
// just plain array of objects
const companyValues = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Customer First",
    description:
      "We put our customers at the center of everything we do, ensuring their success is our success.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster an inclusive environment where everyone thrives.",
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we deliver, from products to customer service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen"
        style={{ backgroundImage: "url('/img/bg/map.png')" }}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/img/bg/breadcumb-bg.jpg')" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge>MakeMyBharatYatra</Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase mb-4">
                About Our Company
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                Welcome to Make My Bharat Yatra Pvt. Ltd. your go-to destination
                for unforgettable tour and travel experiences. Since our
                inception in 2010, we have been passionate about creating
                personalized travel journeys that leave lasting memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Link href="/contactUs">Get in Touch</Link>
                </Button>
                <Button>
                  <Link href="/career">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* our Expertise */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent>
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Expertise
                </h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <p className="text-lg mb-6">
                    <strong>Tour and Travel Services:</strong> At the heart of
                    our operations, we specialize in providing meticulously
                    crafted domestic and international tour packages. Whether
                    you’re seeking a serene getaway, an adventurous escape, or a
                    cultural exploration, we curate experiences that cater to
                    every traveler’s desires.
                  </p>
                  <p className="text-lg mb-6">
                    <strong>Customized Itineraries:</strong> We believe every
                    journey should be unique. That’s why we design custom
                    itineraries that align with your preferences, ensuring a
                    seamless travel experience from start to finish.
                  </p>
                  <p className="text-lg mb-6">
                    <strong>Local and Global Reach:</strong> From exploring the
                    hidden gems of India to venturing abroad, our extensive
                    network allows us to offer a wide range of tour options.
                  </p>
                  <p className="text-lg mb-6">
                    Make My Bharat Yatra, established in 2010, is a registered
                    entity specializing in Domestic and International Airline
                    Services as well as Travel and Tourism in 2015 NCT
                    (National Capital Territory - Government of India). Our
                    company was registered under the Ministry of Micro, Small
                    and Medium Enterprises in 2018. The company is officially
                    registered under the Ministry of Corporate Affairs, bearing
                    the Corporate Identification Number (CIN){" "}
                    <strong>U79110UP2024PTC208828</strong>, with its
                    registration date recorded as 2024.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent>
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <Card>
                    <div className="text-center">
                      <div className="flex items-center gap-3 mb-6">
                        <Target className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                      </div>
                      <p className="text-lg mb-6">
                        Our mission is to enhance our platform’s usability and
                        expand our travel offerings, focusing on delivering
                        personalized and seamless experiences. We aim to
                        increase customer engagement, establish partnerships
                        with key local destinations, and build brand awareness
                        to become a trusted name in India’s travel industry.
                      </p>
                      <div className="relative">
                        <Image
                          src="/images/mission.jfif"
                          alt="Team collaboration"
                          width={600}
                          height={500}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="text-center">
                      <div className="flex items-center gap-3 mb-6">
                        <Globe className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold">Our Vision</h2>
                      </div>
                      <p className="text-lg mb-6">
                        Our long-term vision for Make My Bharat Yatra is to
                        become India’s leading travel platform, offering
                        seamless, personalized experiences. We aim to promote
                        sustainable tourism, connect travelers globally with
                        India’s rich heritage, and provide innovative,
                        customer-focused services that make exploring Bharat
                        effortless, memorable, and accessible for all.
                      </p>
                      <div className="relative">
                        <Image
                          src="/images/vision1.jpg"
                          alt="Team collaboration"
                          width={600}
                          height={500}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Values */}
        <section className="py-5 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-900 max-w-2xl mx-auto">
                These principles guide every decision we make and every solution
                we create.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-900">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-orange-500 text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-primary-foreground/80">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-primary-foreground/80">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let’s discuss how we can help bring your vision to life. Our team
              is ready to tackle your next challenge and deliver exceptional
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
