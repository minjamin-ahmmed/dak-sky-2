"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import image1 from "../../public/art-1.jpg"
import image2 from "../../public/art-2.jpg"
import image3 from "../../public/art-3.jpg"
import image4 from "../../public/art-4.jpg"
import image5 from "../../public/art-5.jpg"
import image6 from "../../public/art-6.jpg"
import image7 from "../../public/art-7.jpg"
import {
  ArrowRight,
  Package,
  CheckCircle,
  Globe,
  Search,
  Shield,
  TrendingUp,
  HelpCircle,
  MapPin,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Canvas Paintings",
    description:
      "Premium hand-painted and printed canvas artworks in various styles including abstract, landscape, and contemporary designs. Available in multiple sizes and custom framing options.",
    image: image1,
    origin: "China",
    price: "$15.00 - $150.00",
    priceUnit: "per piece",
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: 2,
    name: "Sculptures & Statues",
    description:
      "Handcrafted sculptures and statues made from various materials including resin, metal, and stone. Perfect for home decor, gardens, and commercial spaces.",
    image: image2,
    origin: "China",
    price: "$25.00 - $500.00",
    priceUnit: "per piece",
    rating: 4.6,
    reviews: 892,
  },
  {
    id: 3,
    name: "Digital Art Prints",
    description:
      "High-quality digital art prints on premium paper and canvas. Wide selection of modern, abstract, and contemporary art designs suitable for framing and display.",
    image: image3,
    origin: "China",
    price: "$5.00 - $50.00",
    priceUnit: "per print",
    rating: 4.7,
    reviews: 2156,
  },
  {
    id: 4,
    name: "Handmade Pottery & Ceramics",
    description:
      "Artisan-crafted pottery and ceramic pieces including vases, bowls, decorative items, and custom ceramic artworks. Traditional and modern designs available.",
    image: image4,
    origin: "China",
    price: "$10.00 - $200.00",
    priceUnit: "per piece",
    rating: 4.5,
    reviews: 634,
  },
  {
    id: 5,
    name: "Traditional Chinese Art",
    description:
      "Authentic traditional Chinese artwork including calligraphy, ink paintings, silk paintings, and traditional scroll art. Sourced from skilled artisans and studios.",
    image: image5,
    origin: "China",
    price: "$30.00 - $800.00",
    priceUnit: "per piece",
    rating: 4.9,
    reviews: 1843,
  },
  {
    id: 6,
    name: "Art Supplies & Materials",
    description:
      "Professional-grade art supplies including brushes, paints, canvases, easels, and art tools. Bulk sourcing available for art stores and studios.",
    image: image6,
    origin: "China",
    price: "$2.00 - $100.00",
    priceUnit: "per unit",
    rating: 4.4,
    reviews: 567,
  },
  {
    id: 7,
    name: "Framed Artwork Collection",
    description:
      "Curated collection of ready-to-hang framed artworks including modern prints, vintage reproductions, and contemporary pieces. Various frame styles and sizes available.",
    image: image7,
    origin: "China",
    price: "$20.00 - $300.00",
    priceUnit: "per framed piece",
    rating: 4.6,
    reviews: 1234,
  },
];

const benefits = [
  {
    icon: Search,
    title: "Supplier Vetting",
    description:
      "We thoroughly vet all suppliers to ensure quality, reliability, and compliance with international standards.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive quality control processes including inspections, testing, and certification verification.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description:
      "Access to factory-direct pricing and bulk discounts, ensuring the best rates for your sourcing needs.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Extensive network of verified suppliers across China, ensuring access to the best products and prices.",
  },
];

const faqs = [
  {
    question: "How does the product sourcing process work?",
    answer:
      "We start by understanding your product requirements, then identify and vet suitable suppliers in China. We handle negotiations, quality inspections, and coordinate shipping to your destination.",
  },
  {
    question: "What types of products can you source?",
    answer:
      "We can source a wide variety of products from China including electronics, textiles, home decor, hardware, packaging materials, and more. Contact us to discuss your specific needs.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We conduct thorough supplier vetting, perform quality inspections, and can arrange third-party testing and certification. We also maintain long-term relationships with trusted suppliers.",
  },
  {
    question: "What are the typical lead times?",
    answer:
      "Lead times vary depending on the product and order quantity. Standard products typically take 2-4 weeks, while custom products may take 4-8 weeks. We'll provide accurate timelines during the quotation process.",
  },
  {
    question: "Do you handle minimum order quantities?",
    answer:
      "Yes, we work with suppliers that offer flexible MOQs. We can help negotiate minimum order quantities that work for your business needs, whether you're ordering small or large quantities.",
  },
  {
    question: "Can you help with custom product development?",
    answer:
      "Absolutely! We can connect you with manufacturers who specialize in custom product development, from design to production. We'll guide you through the entire process.",
  },
];

export default function SourcingPage() {
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
                Product Sourcing
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Source Products from{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                China
              </span>{" "}
              with Confidence
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with verified suppliers, ensure quality products, and
              streamline your sourcing process. We handle everything from
              supplier identification to quality control and shipping.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
              Why Choose Our Sourcing Services
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              We simplify the complex process of sourcing products from China,
              ensuring quality, reliability, and competitive pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sourcing Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Product Sourcing
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Explore our curated selection of products available for sourcing
              from China. Each product is backed by verified suppliers and
              quality assurance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden -mt-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-8 left-4">
                      <Badge variant="secondary">Sourcing</Badge>
                    </div>
                    <div className="absolute top-8 right-4">
                      <Badge
                        variant="outline"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.origin}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">
                          {product.price.split(" - ")[0]}
                        </span>
                        {product.price.includes(" - ") && (
                          <>
                            <span className="text-muted-foreground">-</span>
                            <span className="text-lg font-semibold text-muted-foreground">
                              {product.price.split(" - ")[1]}
                            </span>
                          </>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {product.priceUnit}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                      {product.description}
                    </p>
                    
                    <Button className="w-full mt-auto mb-6" asChild>
                      <Link href="/contact">
                        Request Quote
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
              Ready to Source Your Products?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Let's discuss your product sourcing needs. Our team will help you
              find the right suppliers, ensure quality, and streamline your
              sourcing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Started with Sourcing
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

