"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative pb-10 pt-20 lg:pb-16 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,117,252,0.1),transparent_50%)]" />

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
                <HelpCircle className="h-4 w-4 mr-2" />
                Frequently Asked Questions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Got Questions?{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                We've Got Answers
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find quick answers to common questions about our logistics services,
              shipping processes, and how we can help streamline your international
              trade operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem
                value="item-1"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  How long does shipping typically take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Shipping times vary based on the mode of transport and destination.
                  Air freight typically takes 3-7 days from China to Bangladesh or Europe,
                  while sea freight takes 15-30 days depending on the route. We provide
                  detailed transit time estimates during quotation and keep you updated
                  with real-time tracking throughout the journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  Do you handle customs clearance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Yes! We are licensed customs brokers in Bangladesh and China, and
                  certified to operate in Europe. Our team handles all customs clearance,
                  documentation, duty calculations, and compliance requirements. We ensure
                  your shipments clear customs smoothly and efficiently, minimizing delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  What shipping routes do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  We specialize in routes connecting China, Bangladesh, and Europe. Our
                  services include China to Bangladesh (import), Bangladesh to Europe
                  (export), China to Europe (direct), and reverse routes. We also handle
                  transshipment and multi-modal transportation for complex logistics needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  Can you help with product sourcing from China?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Absolutely! We offer comprehensive product sourcing services including
                  supplier identification and vetting, quality control inspections,
                  production monitoring, and complete supply chain management. We help you
                  find reliable suppliers, negotiate terms, and ensure quality standards
                  are met before shipping.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  What types of cargo do you handle?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  We handle a wide variety of cargo including textiles, garments, electronics,
                  machinery, raw materials, agricultural products, and consumer goods. We
                  have experience with both general cargo and specialized shipments requiring
                  temperature control, hazardous materials handling, or oversized freight.
                  Contact us to discuss your specific cargo requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  Do you offer warehousing services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Yes, we provide secure warehousing facilities in Bangladesh with
                  comprehensive inventory management services. Our warehouses offer
                  climate-controlled options, 24/7 security monitoring, and flexible
                  storage terms. We can handle temporary storage, distribution, and
                  fulfillment services to support your supply chain operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  How do you track shipments?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  We provide real-time tracking through our digital platform and regular
                  updates via email and SMS. You'll receive tracking numbers for air and
                  sea freight, and can monitor your shipment's status from pickup to final
                  delivery. Our team also provides proactive updates if there are any
                  changes or delays in transit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  What payment terms do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  We offer flexible payment terms to suit your business needs. Options
                  include payment on shipment, credit terms for regular clients, and
                  milestone-based payments for large projects. We accept various payment
                  methods including bank transfers, letters of credit, and other
                  international payment instruments. Contact us to discuss payment
                  arrangements that work for your business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  Do you provide insurance for shipments?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Yes, we can arrange comprehensive cargo insurance to protect your
                  shipments against loss, damage, or theft during transit. Insurance
                  coverage can be tailored to your specific needs and cargo value. We
                  work with reputable insurance providers to ensure your goods are
                  protected throughout the shipping process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="glass border-border/50 rounded-lg px-4 py-1 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  How do I get a shipping quote?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  Getting a quote is easy! Simply contact us through our contact form,
                  email, or phone with details about your shipment including origin,
                  destination, cargo type, weight, and dimensions. We typically provide
                  quotes within 24 hours. For urgent shipments, we can provide expedited
                  quotes. Our quotes include transparent pricing with no hidden fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-b from-[#131B45] via-[#1F2C62] to-[#F5F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6 text-white drop-shadow-lg">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/80 text-pretty mb-8 leading-relaxed">
              Our logistics experts are here to help. Get in touch with us for personalized
              answers and detailed information about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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