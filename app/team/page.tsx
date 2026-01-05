"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  CheckCircle,
  Globe,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Hossain Md Rakib",
    role: "Chairman",
    department: "Leadership",
    bio: "Visionary leader and Chairman with extensive experience in international logistics and freight forwarding. Provides strategic direction and oversees the company's long-term growth and development in global markets.",
    image: "/user.png",
    skills: [
      "Strategic Planning",
      "Business Leadership",
      "Corporate Governance",
      "Industry Expertise",
    ],
    location: "Dhaka, Bangladesh",
    social: {
      linkedin: "#",
      email: "rakib@dak-sky.com",
    },
    achievements: [
      "Industry Leader",
      "Strategic Vision",
      "Business Excellence",
    ],
  },
  {
    id: 2,
    name: "Sazzad Hossain",
    role: "CEO",
    department: "Leadership",
    bio: "Chief Executive Officer with proven expertise in logistics operations and business management. Leads the company's day-to-day operations and drives innovation in freight forwarding services.",
    image: "/user.png",
    skills: [
      "Executive Management",
      "Operations Leadership",
      "Business Strategy",
      "Team Development",
    ],
    location: "Dhaka, Bangladesh",
    social: {
      linkedin: "#",
      email: "sazzad@dak-sky.com",
    },
    achievements: [
      "Operations Excellence",
      "Business Growth",
      "Leadership Excellence",
    ],
  },
  {
    id: 3,
    name: "Ahsan Habib",
    role: "Manager",
    department: "Operations",
    bio: "Experienced manager overseeing critical operations and ensuring smooth execution of logistics services. Manages team coordination and maintains high standards of service delivery.",
    image: "/user.png",
    skills: [
      "Operations Management",
      "Team Coordination",
      "Process Optimization",
      "Quality Assurance",
    ],
    location: "Dhaka, Bangladesh",
    social: {
      linkedin: "#",
      email: "ahsan@dak-sky.com",
    },
    achievements: [
      "Operational Excellence",
      "Team Management",
      "Process Improvement",
    ],
  },
];

const departments = ["All", "Leadership", "Operations", "Customs", "Sales", "Customer Service", "Warehousing"];

const stats = [
  { end: 25, suffix: "+", label: "Team Members" },
  { end: 3, suffix: "", label: "Global Offices" },
  { end: 75, suffix: "+", label: "Years Combined Experience" },
  { end: 98, suffix: "%", label: "On-Time Delivery" },
];

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative pb-10 pt-20 lg:pb-16 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,117,252,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mt-8 mb-4 px-4 py-2 text-sm font-medium"
              >
                MEET THE DAK-SKY TEAM
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Logistics Experts
              </span>{" "}
              Behind Your Success
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our experienced team spans across Bangladesh, China, and Europe, 
              working together to ensure seamless international shipping and 
              reliable freight forwarding solutions for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-[#13253F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2}
                    separator=","
                  />
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {departments.map((department) => (
              <Button
                key={department}
                variant={
                  selectedDepartment === department ? "default" : "outline"
                }
                onClick={() => setSelectedDepartment(department)}
                className="transition-all duration-300"
              >
                {department}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={member.social.linkedin}>
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {('twitter' in member.social) && (member.social as any).twitter && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={(member.social as any).twitter}>
                              <Twitter className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.social.email && (
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8"
                            asChild
                          >
                            <Link href={`mailto:${member.social.email}`}>
                              <Mail className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {member.achievements && member.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Achievements
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {member.achievements
                            .slice(0, 2)
                            .map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-10 bg-gradient-to-b from-[#101A3A] via-[#1D2F5C] to-[#F5F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white drop-shadow-lg mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed">
              At Dak-sky, we're committed to excellence, reliability, and building 
              strong partnerships that drive global trade success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Reliability First",
                description:
                  "We ensure on-time delivery and transparent communication throughout every shipment, building trust with our clients.",
                icon: CheckCircle,
              },
              {
                title: "Global Expertise",
                description:
                  "Our team's deep knowledge of China-Bangladesh-Europe trade routes ensures efficient and cost-effective logistics solutions.",
                icon: Globe,
              },
              {
                title: "Client Partnership",
                description:
                  "We work closely with clients to understand their needs and provide customized logistics solutions that drive their business growth.",
                icon: Handshake,
              },
              {
                title: "Quality Assurance",
                description:
                  "We ensure the highest quality of service and products to our clients.",
                icon: CheckCircle,
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/10 backdrop-blur border-white/20 hover:border-primary/50 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/30">
                    <CardContent className="p-8 text-center text-white">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 text-white mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20">
                        <IconComponent className="h-8 w-8" strokeWidth={1.6} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Join Our Logistics Team
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              We're always looking for experienced logistics professionals who share 
              our commitment to excellence in international freight forwarding and 
              supply chain management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  View Career Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About Dak-sky</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
