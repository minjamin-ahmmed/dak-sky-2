"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Air Freight",
  "Sea Freight",
  "Door-to-Door Delivery",
  "Warehousing",
  "Product Sourcing",
  "Supply Chain Management",
  "Other",
];

const budgetRanges = [
  "Single Shipment",
  "Regular Monthly Shipments",
  "High Volume (100+ containers/year)",
  "Long-term Partnership",
  "Custom Solution",
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "info@dak-sky.com",
    action: "mailto:info@dak-sky.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our logistics team",
    contact: "+880 123 456 7890",
    action: "tel:+8801234567890",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Message us for quick quotes and shipment inquiries",
    contact: "+880 123 456 7890",
    action: "https://wa.me/8801234567890",
  },
];

const offices = [
  {
    city: "Dhaka, Bangladesh",
    address: "Gulshan 2, Road 45",
    zipcode: "Dhaka 1212",
    phone: "+880 123 456 7890",
    email: "dhaka@dak-sky.com",
    country: "Bangladesh",
  },
  {
    city: "Guangzhou, China",
    address: "Tianhe District, Business Center",
    zipcode: "Guangzhou, Guangdong",
    phone: "+86 20 1234 5678",
    email: "guangzhou@dak-sky.com",
    country: "China",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6">
            We've received your message and will get back to you within 24
            hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative pb-10 pt-20 lg:pb-16 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,117,252,0.1),transparent_50%)]" />

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
                Get In Touch
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Discuss Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Logistics Needs
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to streamline your international shipping? Get in touch with our team 
              for a free consultation and customized logistics solution for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center glass border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <method.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <Button variant="outline" asChild>
                      <a href={method.action}>{method.contact}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-border/50">
                <CardContent className="p-4">
                  <h2 className="text-2xl font-bold mb-6">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="mt-2"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-2"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          {...register("company")}
                          className="mt-2"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className="mt-2"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="w-full">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select
                          onValueChange={(value) => setValue("service", value)}
                        >
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.service.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <Label htmlFor="budget">Shipping Frequency *</Label>
                        <Select
                          onValueChange={(value) => setValue("budget", value)}
                        >
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue placeholder="Select shipping frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.budget.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Shipment Details *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your shipment: origin, destination, cargo type, volume, timeline, and any special requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card
                      key={index}
                      className="glass border-border/50"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">
                          {office.city}
                        </h3>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p>{office.address}</p>
                              <p>{office.zipcode}</p>
                              <p>{office.country}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                            <a
                              href={`tel:${office.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                            <a
                              href={`mailto:${office.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
