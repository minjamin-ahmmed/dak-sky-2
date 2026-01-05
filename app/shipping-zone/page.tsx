"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  Plane,
  Ship,
  Package,
  CheckCircle,
  XCircle,
  MapPin,
  Shield,
  Clock,
  DollarSign,
  Headphones,
  Eye,
  Truck,
  Warehouse,
  FileCheck,
  Search,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import europeFlag from "../../public/europe.png"
import usaFlag from "../../public/usa.jpg"
import saudiArabiaFlag from "../../public/saudi-arab.png"
import uaeFlag from "../../public/uae.jpg"
import qatarFlag from "../../public/qatar.jpg"
import kuwaitFlag from "../../public/kuwait.jpg"
import brazilFlag from "../../public/brazil.png"
import argentinaFlag from "../../public/argentina.png"
import mexicoFlag from "../../public/mexico.png"

const bangladeshExported = [
    "Electronics & Technology (E&T)",
      "Footwear (F&W)",
        "Leather Goods (L&G)",
          "Pharmaceuticals",
          "Textiles (non-jute) (T&N)",
  "Home Decor Items (H&D)",

  "Ready-Made Garments (RMG)",
  
];

const bangladeshImported = [
  "Jute Yarn",
  "Jute Fabric",
  "Jute Handicraft",
  "Clothing Items",
  "Ceramics & Pottery",
  "Frozen Fish & Seafood",
  "Agricultural Products",
  "Ceramics & Pottery",
  "Plastic Products",
];

const chinaServices = [
  "FCL (Full Container Load)",
  "LCL (Less than Container Load)",
  "Door-to-Door Delivery",
];

const chinaDestinations = [
  "Europe",
  "USA",
  "Saudi Arabia",
  "UAE (Dubai)",
  "Qatar",
  "Kuwait",
  "Brazil",
  "Argentina",
  "Mexico"
];

const destinationFlags: Record<string, any> = {
  "Europe": europeFlag,
  "USA": usaFlag,
  "Saudi Arabia": saudiArabiaFlag,
  "UAE (Dubai)": uaeFlag,
  "Qatar": qatarFlag,
  "Kuwait": kuwaitFlag,
  "Brazil": brazilFlag,
  "Argentina": argentinaFlag,
  "Mexico": mexicoFlag,
};

const chinaServiceTypes = [
  "Air Freight",
  "Sea Freight",
  "Port-to-Port",
  "Door-to-Door",
  "Customs Clearance",
  "Warehousing",
  "Product Sourcing",
];

const shippingModes = [
  { name: "Air Freight", icon: Plane },
  { name: "Sea Freight", icon: Ship },
  { name: "FCL", icon: Package },
  { name: "LCL", icon: Package },
  { name: "Door-to-Door", icon: Truck },
  { name: "Custom Brokerage", icon: FileCheck },
  { name: "Warehousing", icon: Warehouse },
];

const restrictedItems = [
  "Jute Products (Yarn, Fabric, Handicraft)",
  "Hazardous Materials & Chemicals",
  "Perishable Food Items (without proper approval)",
  "Currency & Precious Metals",
  "Jewelry & Precious Stones",
  "Weapons & Ammunition",
  "Illegal Substances",
  "Counterfeit Goods",
  "Endangered Species Products",
  "Radioactive Materials",
];

const regions = [
  {
    name: "Asia",
    available: true,
    note: "Full service coverage across major Asian markets",
  },
  {
    name: "Europe",
    available: true,
    note: "Comprehensive shipping to all EU countries",
  },
  {
    name: "North America",
    available: true,
    note: "Direct routes to USA and Canada",
  },
  {
    name: "Middle East",
    available: true,
    note: "Strong network in UAE, Saudi Arabia, Qatar, Kuwait",
  },
  {
    name: "Africa",
    available: true,
    note: "Selective coverage with major port access",
  },
  {
    name: "Australia",
    available: true,
    note: "Regular shipping schedules available",
  },
];

const whyChooseUs = [
  {
    title: "Transparency",
    description: "Clear pricing and no hidden fees",
    icon: Eye,
  },
  {
    title: "Fast Delivery",
    description: "Optimized routes for timely shipments",
    icon: Clock,
  },
  {
    title: "Global Coverage",
    description: "Extensive network across 6 continents",
    icon: Globe,
  },
  {
    title: "Real-time Updates",
    description: "Track your shipment every step of the way",
    icon: Search,
  },
  {
    title: "Competitive Pricing",
    description: "Best rates without compromising quality",
    icon: DollarSign,
  },
  {
    title: "Customer Support",
    description: "24/7 dedicated support team",
    icon: Headphones,
  },
];

export default function ShippingZonePage() {
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
                Shipping Information
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shipping{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Zone
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore our global export & import capabilities from Bangladesh and
              China.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground/80 text-pretty mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Navigate international shipping regulations, understand restricted
              items, and discover our comprehensive shipping zones across the
              globe. Get all the information you need to make informed shipping
              decisions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bangladesh Export Zones Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Bangladesh Export Zones
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Understanding export regulations and restrictions from Bangladesh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exported Items */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Package className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">
                      Allow Import Categories
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {bangladeshExported.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    These are the major export categories from Bangladesh. We
                    provide comprehensive shipping services for all these
                    products to global destinations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Allowed Items */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">
                      Allowed Export Categories
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {bangladeshImported.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    These categories are generally approved for export. Some may
                    require specific documentation or certifications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* China Export Zones Section */}
      <section className="py-10 bg-gradient-to-b from-[#0A1435] via-[#1B2C5D] to-[#F4F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white drop-shadow-lg mb-4">
              China Export Zones
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive shipping services from China to global destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-xl shadow-black/30">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-white/15 text-white">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-4">
                    Available Service Types
                  </h3>
                </div>
                <ul className="space-y-3">
                  {chinaServices.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center text-white/80 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-white mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-xl shadow-black/30">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-white/15 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-4">
                    Supported Destinations
                  </h3>
                </div>
                <ul className="space-y-3">
                  {chinaDestinations.map((destination, index) => (
                    <li
                      key={index}
                      className="flex items-center text-white/80 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-white mr-3 flex-shrink-0" />

                        <Image
                        src={destinationFlags[destination]}
                        alt={`${destination} flag`}
                        width={24}
                        height={16}
                        className="mr-2 flex-shrink-0 rounded object-cover"
                      />
                    
                      {destination}

                      
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Service Types List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-xl shadow-black/30">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-white/15 text-white">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-4">
                    Service Capabilities
                  </h3>
                </div>
                <ul className="space-y-3">
                  {chinaServiceTypes.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center text-white/80 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-white mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Modes & Capabilities Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Shipping Modes & Capabilities
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive shipping solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {shippingModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <mode.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-semibold">{mode.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restricted Items Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                <AlertTriangle className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Globally Restricted Items
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Items that are restricted or prohibited for international shipping
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {restrictedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start text-muted-foreground"
                    >
                      <XCircle className="h-5 w-5 text-destructive mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Important:</strong> If
                    you're unsure about whether your item can be shipped, please
                    contact our team for clarification. Shipping restricted
                    items may result in delays, fines, or confiscation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Region-Wise Shipping Eligibility Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Region-Wise Shipping Eligibility
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Global coverage across major shipping regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Globe className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold ml-3">
                          {region.name}
                        </h3>
                      </div>
                      {region.available && (
                        <Badge variant="secondary" className="text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {region.note}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gradient-to-b from-[#0A1435] via-[#1B2C5D] to-[#F4F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance text-white drop-shadow-lg mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for international shipping
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-xl shadow-black/30">
                  <div className="w-16 h-16 rounded-full bg-white/15 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/40">
                    <feature.icon className="h-8 w-8" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
              Ready to Ship?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Check your shipping eligibility or get a free quote for your next
              shipment. Our team is ready to help you navigate international
              shipping with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Check Shipping Eligibility
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Get a Free Shipping Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

