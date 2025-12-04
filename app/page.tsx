"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  ArrowRight,
  Plane,
  Ship,
  Truck,
  Warehouse,
  Package,
  CheckCircle,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air freight services for urgent shipments. We ensure your cargo reaches destinations quickly with optimal routing and competitive rates.",
    features: ["Express Delivery", "Real-time Tracking", "Customs Clearance"],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective sea freight solutions for bulk shipments. Our extensive network ensures smooth transportation via major shipping routes.",
    features: [
      "FCL & LCL Options",
      "Port-to-Port Service",
      "Competitive Rates",
    ],
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    description:
      "Complete end-to-end logistics service from pickup to final delivery. We handle everything so you don't have to worry about a thing.",
    features: ["Full Documentation", "Last Mile Delivery", "Real-time Updates"],
  },
  {
    icon: Warehouse,
    title: "Warehousing Solutions",
    description:
      "Secure storage facilities with inventory management services. Ideal for businesses needing temporary or long-term storage solutions.",
    features: [
      "Secure Storage",
      "Inventory Management",
      "Distribution Support",
    ],
  },
];

const caseStudies = [
  {
    title: "Textile Import from China",
    description:
      "Successfully managed a large-scale textile import operation from Guangzhou, China to Dhaka, Bangladesh. Delivered 500 containers on time with zero customs delays.",
    image: "/image-1.jpeg",
    tags: ["Sea Freight", "China Import", "Textiles"],
    category: "Import",
  },
  {
    title: "Electronics Export to Europe",
    description:
      "Coordinated air freight shipment of electronics from Bangladesh to multiple European destinations. Achieved 48-hour delivery time with full customs documentation.",
    image: "/image-2.jpeg",
    tags: ["Air Freight", "Europe Export", "Electronics"],
    category: "Export",
  },
  {
    title: "Agricultural Products",
    description:
      "End-to-end supply chain management for agricultural products from Chinese suppliers. Handled sourcing, quality control, shipping, and warehousing.",
    image: "/image-3.jpeg",
    tags: ["Product Sourcing", "Warehousing", "Supply"],
    category: "Sourcing",
  },
  {
    title: "Machinery Import from China",
    description:
      "Successfully managed a large-scale machinery import operation from Shanghai, China to Dhaka, Bangladesh. Delivered 100 containers on time with zero customs delays.",
    image: "/image-4.jpeg",
    tags: ["Sea Freight", "China Import", "Machinery"],
    category: "Import",
  },
];

const partners = [
  { name: "Global Trade Solutions", logo: "/partner-1.png" },
  { name: "Asia Pacific Logistics", logo: "/partner-2.png" },
  { name: "European Freight Network", logo: "/partner-3.png" },
  { name: "Bangladesh Import Export", logo: "/partner-4.png" },
  { name: "China Trade Partners", logo: "/partner-5.png" },
  { name: "International Shipping Co", logo: "/partner-1.png" },
];

const stats = [
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

export default function HomePage() {
  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner-image.jpg"
            alt="Logistics and freight forwarding background"
            fill
            priority
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-[#13253F]/20 pointer-events-none" />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#13253F]/10 via-transparent to-[#13253F]/10 pointer-events-none" />

        {/* Accent Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,117,252,0.1),transparent_70%)] pointer-events-none" />

        {/* Animated particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium glass backdrop-blur-md bg-[#13253F]/80 text-white border border-border/50"
              >
                <Globe className="h-4 w-4" /> Connecting China, Bangladesh &
                Europe
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent drop-shadow-md">
                Global Logistics
              </span>{" "}
              Partner
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-100 text-pretty mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Reliable freight forwarding services connecting China to
              Bangladesh and Europe. Fast, secure, and efficient logistics
              solutions tailored to your business needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg group bg-gradient-to-tl from-[#6A11CB] to-[#2575FC] text-white shadow-lg rounded-full hover:from-[#7E3FF2] hover:to-[#1E90FF]"
                asChild
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold glass bg-transparent hover:text-primary"
                asChild
              >
                <Link href="/projects">View Case Studies</Link>
              </Button> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-foreground/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-[#001D38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
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
                      src={stat.icon}
                      alt={stat.label}
                      width={48}
                      height={48}
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    {/* Counter */}
                    <div className="text-3xl lg:text-4xl font-bold text-white text-left">
                      <CountUp
                        end={stat.end}
                        suffix={stat.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                        duration={2}
                        separator=","
                      />
                    </div>
                    <div className="text-white/80 font-medium text-sm lg:text-base text-left">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics and freight forwarding services to
              streamline your international shipping operations and expand your
              global reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=""
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 bg-gradient-to-t from-[#131B45] via-[#1F2C62]/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-[#002B74] mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-[#101010] text-pretty max-w-3xl mx-auto leading-relaxed">
              Explore real examples of how we've helped businesses streamline
              their international shipping and overcome logistics challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden -mt-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-8 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="px-6 pb-4">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="default" size="lg" asChild>
              <Link href="/services">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Trusted Logistics Partners
            </h2>
            <p className="text-muted-foreground">
              We're proud to partner with leading businesses across China,
              Bangladesh, and Europe.
            </p>
          </motion.div>

          {/* Marquee Slider */}
          <div className="relative overflow-hidden w-full py-4">
            {/* Gradient fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex animate-marquee gap-8 will-change-transform">
                {/* First set of logos */}
                {partners.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg glass border-border/30 hover:border-primary/30 transition-all duration-300 w-[180px] h-[100px]"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg glass border-border/30 hover:border-primary/30 transition-all duration-300 w-[180px] h-[100px]"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss your logistics needs and find the perfect shipping
              solution for your business. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
