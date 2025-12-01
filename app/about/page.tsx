"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Award,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description:
      "We deliver on our promises with consistent, dependable service. Your shipments arrive on time, every time, with complete transparency throughout the journey.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build long-term relationships with our clients, understanding their unique logistics needs and providing tailored solutions that grow their business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage modern logistics technology and best practices to optimize routes, reduce costs, and streamline your supply chain operations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Quality service is at the core of everything we do. From customs clearance to final delivery, we ensure your cargo is handled with the utmost care.",
  },
];

const timeline = [
  {
    year: "2012",
    title: "Company Founded",
    description:
      "Dak-sky was established with a vision to bridge logistics gaps between China, Bangladesh, and Europe, starting with air freight services.",
  },
  {
    year: "2014",
    title: "Sea Freight Expansion",
    description:
      "Expanded operations to include comprehensive sea freight services, establishing partnerships with major shipping lines and ports.",
  },
  {
    year: "2017",
    title: "Warehouse Facilities",
    description:
      "Opened state-of-the-art warehousing facilities in Bangladesh to support our growing import and distribution services.",
  },
  {
    year: "2019",
    title: "European Network",
    description:
      "Established strong partnerships across Europe, enabling seamless export services from Bangladesh to major European markets.",
  },
  {
    year: "2022",
    title: "5,000+ Shipments",
    description:
      "Milestone achievement of completing over 5,000 successful shipments with 99% on-time delivery rate and zero major incidents.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Launched advanced tracking systems and digital platforms to provide real-time visibility and streamlined logistics management.",
  },
];

const achievements = [
    {
    end: 5000,
    suffix: "+",
    label: "Shipments Completed",
    icon: "/cargo-ship.svg",
  },
  { end: 250, suffix: "+", label: "Satisfied Clients", icon: "/review.svg" },
  { end: 12, suffix: "+", label: "Years Experience", icon: "/expertise.svg" },
  { end: 24, suffix: "/7", label: "Customer Support", icon: "/review.svg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,117,252,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium"
              >
                About Dak-sky
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connecting{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Global Markets
              </span>{" "}
              Through Logistics Excellence
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Since 2012, Dak-sky has been a trusted logistics partner, specializing in freight forwarding 
              services connecting China, Bangladesh, and Europe. We combine extensive industry experience 
              with innovative solutions to streamline your international shipping operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#13253F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon and Label in Flex */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="">
                    <Image
                      src={achievement.icon}
                      alt={achievement.label}
                      width={48}
                      height={48}
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    {/* Counter */}
                    <div className="text-3xl lg:text-4xl font-bold text-white text-left">
                      <CountUp
                        end={achievement.end}
                        suffix={achievement.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                        duration={2}
                        separator=","
                      />
                    </div>
                    <div className="text-white/80 font-medium text-sm lg:text-base text-left">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Dak-sky was founded with a clear mission: to simplify international trade by providing 
                  reliable, efficient logistics solutions. What started as a small freight forwarding 
                  operation has evolved into a comprehensive logistics partner trusted by businesses 
                  across China, Bangladesh, and Europe.
                </p>
                <p>
                  Our journey began when we recognized the complexities businesses face when importing 
                  from China or exporting to Europe. We saw the need for a logistics partner that 
                  combines deep regional expertise with transparent communication and reliable execution.
                </p>
                <p>
                  Today, we're proud to serve manufacturers, importers, exporters, and distributors 
                  across various industries. Whether you're importing textiles from China, exporting 
                  garments to Europe, or managing complex supply chains, we provide the logistics 
                  expertise and personalized service your business needs to succeed in global markets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 border-border/50">
                <Image
                  src="/image-1.jpeg"
                  alt="Our team working together"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#131B45] via-[#1F2C62] to-[#F5F8FF]">
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
              These core values guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur border-white/20 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-white/10 text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/30">
                        <value.icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-xl text-white font-semibold ml-4">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry recognition, here's how we've
              grown over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-12 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <Card className="glass border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm font-semibold text-primary">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss how we can streamline your logistics operations and expand 
              your international trade capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
