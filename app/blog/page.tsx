"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Import/Export",
  "Customs & Compliance",
  "Freight Forwarding",
  "Supply Chain",
  "Industry Insights",
];

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Importing Goods from China to Bangladesh",
    excerpt:
      "Navigate the complexities of China-Bangladesh trade with our comprehensive guide covering documentation, customs procedures, and best practices for seamless imports.",
    content: `Importing goods from China to Bangladesh has become increasingly important for businesses looking to source quality products at competitive prices. With the right knowledge and logistics partner, this process can be smooth and efficient.

**Understanding Trade Regulations**
Both China and Bangladesh have specific regulations governing international trade. Understanding these requirements is crucial for avoiding delays and penalties. Key documents include commercial invoices, packing lists, certificates of origin, and import permits.

**Choosing the Right Shipping Method**
Selecting between air freight and sea freight depends on your cargo type, urgency, and budget. Air freight is faster but more expensive, ideal for high-value or time-sensitive goods. Sea freight offers cost-effective solutions for bulk shipments.

**Customs Clearance Process**
The customs clearance process in Bangladesh requires proper documentation and compliance with local regulations. Working with an experienced customs broker can significantly reduce clearance time and ensure compliance.

**Cost Optimization Strategies**
Understanding all costs involved—including freight charges, customs duties, taxes, and handling fees—helps in accurate budgeting. Consider consolidating shipments and optimizing packaging to reduce costs.`,
    image: "/blog-1.jpg",
    category: "Import/Export",
    author: "Ahmed Rahman",
    authorImage: "/user.png",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Import", "China", "Bangladesh", "Trade"],
    featured: true,
  },
  {
    id: 2,
    title: "Navigating Customs Clearance: A Step-by-Step Guide",
    excerpt:
      "Master the customs clearance process with our detailed guide covering documentation requirements, common pitfalls, and strategies for faster clearance.",
    content: `Customs clearance is one of the most critical steps in international shipping. Delays here can cost time and money, making it essential to understand the process thoroughly.

**Essential Documentation**
Proper documentation is the foundation of successful customs clearance. Required documents typically include commercial invoices, packing lists, bills of lading, certificates of origin, and any special permits or licenses.

**Understanding Duty and Tax Calculations**
Customs duties and taxes vary based on product type, value, and origin country. Understanding how these are calculated helps in accurate cost estimation and compliance.

**Common Clearance Challenges**
Delays often occur due to incomplete documentation, incorrect classification, or missing permits. Being proactive and working with experienced customs specialists can prevent these issues.

**Best Practices for Faster Clearance**
Preparing all documents in advance, ensuring accurate product descriptions, and maintaining good relationships with customs authorities can significantly speed up the clearance process.`,
    image: "/blog-2.jpg",
    category: "Customs & Compliance",
    author: "Fatima Khan",
    authorImage: "/user.png",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["Customs", "Compliance", "Documentation"],
    featured: false,
  },
  {
    id: 3,
    title: "Exporting to Europe: Complete Logistics Strategy Guide",
    excerpt:
      "Discover proven strategies for exporting goods from Bangladesh to European markets, covering regulations, shipping options, and market entry requirements.",
    content: `Exporting to Europe offers significant opportunities for Bangladeshi businesses, but requires careful planning and understanding of European Union regulations and logistics requirements.

**Understanding EU Import Regulations**
The European Union has strict regulations governing imports, including product standards, labeling requirements, and safety certifications. Compliance is essential for market access.

**Shipping Routes and Options**
Multiple shipping routes connect Bangladesh to Europe, with Rotterdam, Hamburg, and Antwerp being major entry points. Choosing the right route depends on destination, cargo type, and cost considerations.

**Documentation and Certifications**
European imports require specific documentation including EUR.1 certificates, phytosanitary certificates for certain goods, and CE marking for regulated products. Proper documentation ensures smooth entry.

**Market Entry Strategies**
Successful market entry requires understanding local preferences, distribution channels, and competitive landscape. Partnering with experienced logistics providers can facilitate market penetration.`,
    image: "/blog-3.jpg",
    category: "Import/Export",
    author: "Sophie van der Berg",
    authorImage: "/user.png",
    date: "2024-01-05",
    readTime: "14 min read",
    tags: ["Export", "Europe", "EU Regulations", "Shipping"],
    featured: true,
  },
  {
    id: 4,
    title: "Air Freight vs Sea Freight: Making the Right Choice",
    excerpt:
      "Compare air and sea freight options to determine the best shipping method for your cargo based on cost, speed, and specific requirements.",
    content: `Choosing between air freight and sea freight is a critical decision that impacts cost, delivery time, and overall supply chain efficiency. Understanding the trade-offs helps make informed decisions.

**When to Choose Air Freight**
Air freight is ideal for time-sensitive shipments, high-value goods, perishable items, and smaller volumes. While more expensive, it offers speed and security advantages.

**When Sea Freight Makes Sense**
Sea freight is cost-effective for large volumes, non-urgent shipments, and heavy or bulky cargo. Modern container shipping offers reliable service with competitive rates.

**Cost Comparison Analysis**
Understanding total landed costs—including freight charges, insurance, handling, and storage—provides accurate comparison. Sea freight typically offers 60-80% cost savings for bulk shipments.

**Hybrid Solutions**
Many businesses use a combination of both methods, using air freight for urgent orders and sea freight for regular replenishment, optimizing both cost and service levels.`,
    image: "/blog-1.jpg",
    category: "Freight Forwarding",
    author: "Hassan Ali",
    authorImage: "/user.png",
    date: "2023-12-28",
    readTime: "8 min read",
    tags: ["Air Freight", "Sea Freight", "Shipping", "Logistics"],
    featured: false,
  },
  {
    id: 5,
    title: "Optimizing Your Supply Chain: Best Practices for 2024",
    excerpt:
      "Learn how to streamline your supply chain operations, reduce costs, and improve efficiency with proven strategies and modern logistics solutions.",
    content: `Supply chain optimization is crucial for maintaining competitive advantage in today's global marketplace. Effective strategies can reduce costs, improve service levels, and enhance resilience.

**Visibility and Tracking**
Real-time visibility into your supply chain enables proactive management and quick response to disruptions. Modern tracking systems provide end-to-end visibility from origin to destination.

**Inventory Management**
Balancing inventory levels to meet demand while minimizing carrying costs requires sophisticated planning. Just-in-time strategies and safety stock optimization are key considerations.

**Supplier Relationships**
Strong relationships with reliable suppliers and logistics partners are fundamental to supply chain success. Regular communication and performance monitoring ensure consistent service.

**Technology Integration**
Leveraging technology for automation, data analytics, and process optimization can significantly improve supply chain efficiency and decision-making capabilities.`,
    image: "/blog-2.jpg",
    category: "Supply Chain",
    author: "Rajesh Kumar",
    authorImage: "/user.png",
    date: "2023-12-20",
    readTime: "11 min read",
    tags: ["Supply Chain", "Optimization", "Efficiency", "Strategy"],
    featured: false,
  },
  {
    id: 6,
    title: "Warehousing Solutions: Maximizing Efficiency and Reducing Costs",
    excerpt:
      "Explore modern warehousing strategies including inventory management, distribution optimization, and cost-effective storage solutions for your business.",
    content: `Effective warehousing is essential for successful logistics operations. Modern warehousing solutions can significantly improve efficiency, reduce costs, and enhance customer service.

**Warehouse Layout and Design**
Optimal warehouse layout maximizes space utilization and operational efficiency. Considerations include storage systems, picking paths, and material handling equipment.

**Inventory Management Systems**
Advanced inventory management systems provide real-time visibility, automated reordering, and accurate stock levels. Integration with logistics systems ensures seamless operations.

**Distribution Strategies**
Efficient distribution networks reduce delivery times and costs. Strategic warehouse locations, cross-docking, and consolidation services optimize distribution efficiency.

**Cost Optimization**
Warehousing costs include space, labor, equipment, and technology. Optimizing these elements through automation, efficient processes, and strategic partnerships can significantly reduce total costs.`,
    image: "/blog-3.jpg",
    category: "Supply Chain",
    author: "Karim Hossain",
    authorImage: "/user.png",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Warehousing", "Inventory", "Distribution", "Storage"],
    featured: true,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen">
        {/* Blog Post Header */}
        <section className="relative py-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="mb-8"
              >
                ← Back to Blog
              </Button>

              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {selectedPost.category}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Image
                      src={selectedPost.authorImage || "/placeholder.svg"}
                      alt={selectedPost.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>

              <Image
                src={selectedPost.image || "/placeholder.svg"}
                alt={selectedPost.title}
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold mt-8 mb-4"
                      >
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="mb-6 leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={selectedPost.authorImage || "/placeholder.svg"}
                      alt={selectedPost.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{selectedPost.author}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen -mt-18">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(37,117,252,0.1),transparent_50%)]" />

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
                DAK-SKY LOGISTICS BLOG
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Logistics Insights &{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Industry Knowledge
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay informed with expert insights on international shipping, freight forwarding, 
              customs clearance, and supply chain management from our logistics professionals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search logistics articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
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
                Featured Logistics Articles
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Essential guides and insights on international shipping, freight forwarding, 
                and supply chain management from our logistics experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden glass border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <div className="relative overflow-hidden  -mt-6">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-2 flex-1 mb-8">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => setSelectedPost(post)}
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
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
              {selectedCategory === "All"
                ? "Latest Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden glass border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden -mt-6">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3 flex-1 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-3">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-6">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated with Logistics Insights
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest logistics trends, shipping updates, 
              and freight forwarding insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
