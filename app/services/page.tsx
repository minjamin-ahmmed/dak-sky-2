"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Plane,
  Ship,
  Truck,
  Warehouse,
  Package,
  CheckCircle,
  Clock,
  Users,
  Target,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air freight services for urgent shipments. Perfect for time-sensitive cargo requiring quick transit times between China, Bangladesh, and Europe.",
    features: [
      "Express Delivery Options",
      "Real-time Tracking & Updates",
      "Customs Clearance Support",
      "Optimal Routing Solutions",
      "Flexible Scheduling",
      "Competitive Air Freight Rates",
    ],
    technologies: [
      "Major Airlines",
      "Cargo Airlines",
      "Express Carriers",
      "Freight Forwarders Network",
    ],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective sea freight solutions for bulk shipments. Ideal for large volumes with flexible transit times. We handle both FCL and LCL shipments via major shipping routes.",
    features: [
      "FCL & LCL Options",
      "Port-to-Port Service",
      "Consolidation Services",
      "Full Container Load Management",
      "Documentation & Compliance",
      "Competitive Sea Freight Rates",
    ],
    technologies: [
      "Major Shipping Lines",
      "Container Services",
      "Port Partnerships",
      "Customs Documentation",
    ],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    description:
      "Complete end-to-end logistics service from pickup to final delivery. We handle all transportation modes, documentation, and customs to ensure seamless door-to-door service.",
    features: [
      "Complete Documentation Handling",
      "Last Mile Delivery",
      "Real-time Shipment Updates",
      "Single Point of Contact",
      "Customs Clearance Included",
      "White Glove Service",
    ],
    technologies: [
      "Multi-modal Transport",
      "Customs Brokerage",
      "Tracking Systems",
      "Local Delivery Network",
    ],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Warehouse,
    title: "Warehousing Solutions",
    description:
      "Secure, modern storage facilities with comprehensive inventory management. Perfect for temporary storage, distribution hubs, or long-term warehousing needs.",
    features: [
      "Secure Storage Facilities",
      "Inventory Management Systems",
      "Distribution Support",
      "Climate-Controlled Options",
      "24/7 Security Monitoring",
      "Flexible Storage Terms",
    ],
    technologies: [
      "WMS Integration",
      "Barcode Systems",
      "Real-time Inventory Tracking",
      "Distribution Networks",
    ],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Package,
    title: "Product Sourcing & Supply Chain",
    description:
      "End-to-end product sourcing services from China, including supplier identification, quality control, and complete supply chain management to support your business operations.",
    features: [
      "Supplier Identification & Vetting",
      "Quality Control & Inspection",
      "Supply Chain Optimization",
      "Negotiation Support",
      "Production Monitoring",
      "Complete Logistics Integration",
    ],
    technologies: [
      "Supplier Networks",
      "Quality Assurance Systems",
      "Supply Chain Software",
      "Production Management Tools",
    ],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Warehouse,
    title: "Customs Clearance",
    description:
      "We handle all customs clearance and documentation for your shipments. We are licensed to operate in Bangladesh and China. We are also certified to operate in Europe.",
    features: [
      "Customs Clearance",
      "Documentation Handling",
      "Customs Brokerage",
      "HS Code Classification",
      "Duty & Tax Calculation",
      "Import/Export Compliance Advisory",
    ],
    technologies: [
      "Customs Brokers",
      "Customs Documentation",
      "Customs Clearance Systems",
    ],
    startingPrice: "Contact for Quote",
  }
];

const process = [
  {
    step: "01",
    title: "Consultation & Planning",
    description:
      "We begin with a detailed consultation to understand your logistics needs, shipping routes, cargo specifications, and business requirements.",
    icon: Target,
  },
  {
    step: "02",
    title: "Quote & Documentation",
    description:
      "Receive a comprehensive quote with transparent pricing. We handle all necessary documentation, permits, and customs requirements for your shipment.",
    icon: Package,
  },
  {
    step: "03",
    title: "Transportation & Tracking",
    description:
      "Your cargo is transported using optimal routes and methods. Real-time tracking ensures you're always informed about your shipment's status.",
    icon: Globe,
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "Final delivery to your specified location with complete documentation. Ongoing support ensures any post-delivery needs are handled promptly.",
    icon: CheckCircle,
  },
];

const benefits = [
  {
    title: "Expert Team",
    description:
      "Work with experienced logistics professionals who understand international trade, customs regulations, and supply chain optimization.",
    icon: Users,
  },
  {
    title: "On-Time Delivery",
    description:
      "Proven track record of reliable, on-time deliveries. Our efficient operations and network partnerships ensure your cargo arrives as scheduled.",
    icon: Clock,
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive quality control and cargo protection measures ensure your shipments arrive in perfect condition with proper handling throughout.",
    icon: CheckCircle,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative pb-10 pt-20 lg:pb-16 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,117,252,0.1),transparent_50%)]" />

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
                Our Services
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Logistics Services
              </span>{" "}
              for Your Business
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From air and sea freight to warehousing and product sourcing, we offer complete logistics 
              solutions to streamline your international trade operations and expand your global reach.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold ml-4">
                          {service.title}
                        </h3>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.startingPrice}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">
                        Capabilities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-gradient-to-b from-[#0A1435] via-[#1B2C5D] to-[#F4F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white drop-shadow-lg mb-6">
              Our Process
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure your project is delivered
              on time, within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-xl shadow-black/30 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/15 text-white flex items-center justify-center shadow-lg shadow-primary/40">
                      <step.icon className="h-9 w-9" strokeWidth={1.6} />
                    </div>
{/* 
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-base font-bold shadow-md">
                      {step.step}
                    </div> */}

                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              We're committed to delivering exceptional results and building
              long-term partnerships with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Ship with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss your logistics requirements and how we can help streamline 
              your international shipping operations.
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
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
