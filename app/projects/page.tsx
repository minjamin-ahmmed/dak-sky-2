"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Import",
  "Export",
  "Air Freight",
  "Sea Freight",
  "Sourcing",
];

const caseStudies = [
  {
    id: 1,
    title: "Large-Scale Textile Import from China",
    description:
      "Managed complete logistics for importing 500 containers of textile materials from Guangzhou, China to Dhaka, Bangladesh within strict deadlines.",
    longDescription:
      "Successfully coordinated a massive textile import operation involving sea freight shipping, customs clearance, and final delivery to multiple distribution centers across Bangladesh. Implemented a comprehensive tracking system that provided real-time visibility throughout the supply chain, ensuring zero delays despite challenging port conditions.",
    image: "/modern-ecommerce-dashboard.png",
    category: "Import",
    tags: ["Sea Freight", "Textiles", "FCL Shipping", "Customs Clearance"],
    client: "Bangladesh Textile Group",
    duration: "3 months",
    team: "12 logistics specialists",
    year: "2024",
    results: [
      "500 containers delivered on time",
      "100% customs clearance success rate",
      "15% cost savings through route optimization",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Express Electronics Export to Europe",
    description:
      "Coordinated urgent air freight shipment of electronics from Bangladesh to multiple European destinations, achieving 48-hour delivery with full documentation.",
    longDescription:
      "Handled time-critical electronics export using air freight services to Germany, France, and the UK. Managed complex export documentation, secured necessary permits, and coordinated with multiple airlines to ensure fastest possible transit times. Delivered perfect order fulfillment with complete traceability.",
    image: "/saas-analytics-dashboard-with-charts.jpg",
    category: "Export",
    tags: ["Air Freight", "Electronics", "Express Delivery", "Europe"],
    client: "TechExports Bangladesh",
    duration: "2 weeks",
    team: "6 logistics coordinators",
    year: "2024",
    results: [
      "48-hour delivery to European markets",
      "Zero customs delays",
      "99.8% on-time delivery rate",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Agricultural Products Supply Chain",
    description:
      "End-to-end supply chain management for agricultural products from Chinese farms to Bangladesh, including sourcing, quality control, and door-to-door delivery.",
    longDescription:
      "Established a complete supply chain solution for agricultural imports from China. Services included supplier identification, quality inspection at origin, sea freight coordination, customs clearance, and final distribution. Implemented cold chain logistics to maintain product quality throughout the journey.",
    image: "/mobile-banking-app.png",
    category: "Sourcing",
    tags: ["Product Sourcing", "Cold Chain", "Supply Chain", "Agriculture"],
    client: "AgriTrade Bangladesh",
    duration: "Ongoing",
    team: "10 supply chain experts",
    year: "2023",
    results: [
      "30% cost reduction through direct sourcing",
      "Zero product spoilage incidents",
      "Monthly shipment volume increased 200%",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Garment Export to European Retailers",
    description:
      "Managed regular shipments of ready-made garments from Bangladesh to major European retailers with strict quality and timing requirements.",
    longDescription:
      "Coordinated monthly shipments of ready-made garments to multiple European retail chains. Handled consolidation, sea freight booking, port handling, and final mile delivery. Established a streamlined process that reduced transit times by 20% while maintaining 100% compliance with European import regulations.",
    image: "/placeholder.svg?height=400&width=600&text=Garment+Export",
    category: "Export",
    tags: ["Sea Freight", "Garments", "Consolidation", "Retail"],
    client: "European Fashion Retailers",
    duration: "Ongoing",
    team: "8 logistics specialists",
    year: "2023",
    results: [
      "50+ containers shipped monthly",
      "20% reduction in transit times",
      "100% compliance with EU regulations",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Machinery Import & Installation Support",
    description:
      "Coordinated complex machinery import from China including oversized cargo handling, customs clearance, and on-site delivery coordination.",
    longDescription:
      "Managed the import of heavy industrial machinery from Shanghai to Dhaka, requiring specialized handling equipment and careful route planning. Coordinated with port authorities for oversized cargo clearance, arranged secure transportation, and provided on-site delivery support including installation coordination.",
    image: "/placeholder.svg?height=400&width=600&text=Machinery+Import",
    category: "Import",
    tags: ["Heavy Cargo", "Machinery", "Specialized Transport", "Installation"],
    client: "Industrial Manufacturing Co.",
    duration: "2 months",
    team: "14 specialists",
    year: "2023",
    results: [
      "Zero damage during transport",
      "Completed 2 weeks ahead of schedule",
      "Full documentation and compliance",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Pharmaceutical Cold Chain Logistics",
    description:
      "Established reliable cold chain logistics network for temperature-sensitive pharmaceuticals from China to Bangladesh with strict compliance requirements.",
    longDescription:
      "Developed a specialized cold chain solution for pharmaceutical imports requiring precise temperature control throughout transit. Implemented real-time temperature monitoring, secured necessary pharmaceutical import licenses, and established protocols meeting international standards. Ensured product integrity from factory to final destination.",
    image: "/placeholder.svg?height=400&width=600&text=Pharma+Logistics",
    category: "Import",
    tags: ["Cold Chain", "Pharmaceuticals", "Compliance", "Temperature Control"],
    client: "MedPharm Bangladesh",
    duration: "Ongoing",
    team: "12 specialized handlers",
    year: "2022",
    results: [
      "100% temperature compliance maintained",
      "Zero product rejection cases",
      "Full regulatory compliance achieved",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof caseStudies)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(206,91,45,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(206,91,45,0.1),transparent_50%)]" />

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
                Success Stories
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Logistics{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Success Stories
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover real examples of how we've helped businesses overcome logistics 
              challenges and streamline their international shipping operations with 
              reliable, efficient freight forwarding services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass glass-dark border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8"
                        asChild
                      >
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8"
                        asChild
                      >
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal/Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </Button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedProject.client}
                  </p>
                </div>
                <Badge variant="secondary">{selectedProject.category}</Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Duration</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.duration}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team Size</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.team}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Year</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.year}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Key Results</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-center">
                      <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Request Similar Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss how we can help optimize your international shipping 
              operations and deliver reliable logistics solutions for your business.
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
