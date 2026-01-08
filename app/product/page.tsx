"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart } from "lucide-react";
import handicraftImg1 from "../../public/handicraft-1.jpeg";
import handicraftImg2 from "../../public/handicraft-2.jpeg";
import handicraftImg3 from "../../public/handicraft-3.jpeg";
import handicraftImg4 from "../../public/handicraft-4.jpeg";
import handicraftImg5 from "../../public/handicraft-5.jpeg";
import handicraftImg6 from "../../public/handicraft-6.jpeg";
import handicraftImg7 from "../../public/handicraft-7.jpeg";
import handicraftImg8 from "../../public/handicraft-8.jpeg";
import handicraftImg9 from "../../public/handicraft-9.jpeg";
import handicraftImg10 from "../../public/handicraft-10.jpeg";
import handicraftImg11 from "../../public/handicraft-11.jpeg";
import handicraftImg12 from "../../public/handicraft-12.jpeg";
import handicraftImg13 from "../../public/handicraft-13.jpeg";
import handicraftImg14 from "../../public/handicraft-14.jpeg";
import handicraftImg15 from "../../public/handicraft-15.jpeg";
import handicraftImg16 from "../../public/handicraft-16.jpeg";
import handicraftImg17 from "../../public/handicraft-17.jpeg";
import handicraftImg18 from "../../public/handicraft-18.jpeg";
import handicraftImg19 from "../../public/handicraft-19.jpeg";
import handicraftImg20 from "../../public/handicraft-20.jpeg";
import handicraftImg21 from "../../public/handicraft-21.jpeg";
import handicraftImg22 from "../../public/handicraft-22.jpeg";
import handicraftImg23 from "../../public/handicraft-23.jpeg";

// Product Type Definition
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: any;
  rating: number;
  reviewCount: number;
  stockStatus: "in_stock" | "low_stock" | "out_of_stock";
  location: string;
  tags: string[];
  featured?: boolean;
}

// Product Dataset
const products: Product[] = [
  {
    id: "1",
    title: "Handwoven Bamboo Basket Set",
    description: "Elegant handwoven bamboo baskets perfect for home organization and decoration. Made with traditional craftsmanship.",
    price: 45.99,
    category: "Home Decor",
    image: handicraftImg1,
    rating: 4.8,
    reviewCount: 124,
    stockStatus: "in_stock",
    location: "Dhaka, Bangladesh",
    tags: ["handmade", "eco-friendly", "bamboo"],
    featured: true,
  },
  {
    id: "2",
    title: "Ceramic Pottery Collection",
    description: "Beautiful handcrafted ceramic pots featuring intricate patterns and vibrant colors. Ideal for indoor plants and decoration.",
    price: 32.50,
    category: "Home Decor",
    image: handicraftImg2,
    rating: 4.6,
    reviewCount: 89,
    stockStatus: "in_stock",
    location: "Rajshahi, Bangladesh",
    tags: ["ceramic", "handmade", "decorative"],
  },
  {
    id: "3",
    title: "Traditional Jute Bag",
    description: "Durable and eco-friendly jute bag with traditional designs. Perfect for shopping and daily use.",
    price: 18.99,
    category: "Accessories",
    image: handicraftImg3,
    rating: 4.7,
    reviewCount: 203,
    stockStatus: "in_stock",
    location: "Chittagong, Bangladesh",
    tags: ["jute", "eco-friendly", "reusable"],
    featured: true,
  },
  {
    id: "4",
    title: "Wooden Carved Wall Art",
    description: "Exquisite wooden wall art featuring traditional motifs. Hand-carved by skilled artisans.",
    price: 125.00,
    category: "Art & Sculpture",
    image: handicraftImg4,
    rating: 4.9,
    reviewCount: 67,
    stockStatus: "in_stock",
    location: "Sylhet, Bangladesh",
    tags: ["wooden", "hand-carved", "art"],
  },
  {
    id: "5",
    title: "Embroidered Textile Cushion",
    description: "Luxurious cushion covers with intricate embroidery work. Adds elegance to any living space.",
    price: 28.75,
    category: "Home Decor",
    image: handicraftImg5,
    rating: 4.5,
    reviewCount: 156,
    stockStatus: "low_stock",
    location: "Dhaka, Bangladesh",
    tags: ["textile", "embroidered", "cushion"],
  },
  {
    id: "6",
    title: "Brass Decorative Bowl",
    description: "Handcrafted brass bowl with traditional engravings. Perfect for serving or as a decorative piece.",
    price: 55.00,
    category: "Home Decor",
    image: handicraftImg6,
    rating: 4.7,
    reviewCount: 92,
    stockStatus: "in_stock",
    location: "Comilla, Bangladesh",
    tags: ["brass", "handcrafted", "decorative"],
  },
  {
    id: "7",
    title: "Handmade Leather Wallet",
    description: "Premium quality leather wallet with traditional stitching. Durable and stylish design.",
    price: 42.99,
    category: "Accessories",
    image: handicraftImg7,
    rating: 4.6,
    reviewCount: 178,
    stockStatus: "in_stock",
    location: "Dhaka, Bangladesh",
    tags: ["leather", "handmade", "wallet"],
  },
  {
    id: "8",
    title: "Terracotta Plant Pot Set",
    description: "Set of three terracotta plant pots in different sizes. Natural and breathable material for healthy plants.",
    price: 24.99,
    category: "Home Decor",
    image: handicraftImg8,
    rating: 4.8,
    reviewCount: 234,
    stockStatus: "in_stock",
    location: "Bogra, Bangladesh",
    tags: ["terracotta", "plant", "set"],
    featured: true,
  },
  {
    id: "9",
    title: "Silk Scarf Collection",
    description: "Luxurious silk scarves with traditional patterns. Soft, lightweight, and perfect for any occasion.",
    price: 38.50,
    category: "Accessories",
    image: handicraftImg9,
    rating: 4.9,
    reviewCount: 145,
    stockStatus: "in_stock",
    location: "Rajshahi, Bangladesh",
    tags: ["silk", "scarf", "traditional"],
  },
  {
    id: "10",
    title: "Handwoven Cotton Rug",
    description: "Beautiful handwoven cotton rug with geometric patterns. Adds warmth and style to any room.",
    price: 89.99,
    category: "Home Decor",
    image: handicraftImg10,
    rating: 4.7,
    reviewCount: 112,
    stockStatus: "in_stock",
    location: "Tangail, Bangladesh",
    tags: ["cotton", "handwoven", "rug"],
  },
  {
    id: "11",
    title: "Bamboo Wind Chime",
    description: "Soothing bamboo wind chime with natural tones. Creates peaceful ambiance in your garden or balcony.",
    price: 22.99,
    category: "Home Decor",
    image: handicraftImg11,
    rating: 4.6,
    reviewCount: 198,
    stockStatus: "in_stock",
    location: "Chittagong, Bangladesh",
    tags: ["bamboo", "wind chime", "garden"],
  },
  {
    id: "12",
    title: "Handcrafted Jewelry Box",
    description: "Elegant wooden jewelry box with intricate carvings. Perfect for organizing and storing precious items.",
    price: 65.00,
    category: "Accessories",
    image: handicraftImg12,
    rating: 4.8,
    reviewCount: 87,
    stockStatus: "in_stock",
    location: "Sylhet, Bangladesh",
    tags: ["wooden", "jewelry box", "handcrafted"],
  },
  {
    id: "13",
    title: "Traditional Pottery Vase",
    description: "Stunning pottery vase with traditional glazing techniques. A statement piece for any home.",
    price: 48.75,
    category: "Home Decor",
    image: handicraftImg13,
    rating: 4.5,
    reviewCount: 134,
    stockStatus: "low_stock",
    location: "Rajshahi, Bangladesh",
    tags: ["pottery", "vase", "traditional"],
  },
  {
    id: "14",
    title: "Handwoven Straw Hat",
    description: "Stylish straw hat perfect for sunny days. Handwoven with natural materials for comfort and durability.",
    price: 19.99,
    category: "Accessories",
    image: handicraftImg14,
    rating: 4.7,
    reviewCount: 267,
    stockStatus: "in_stock",
    location: "Comilla, Bangladesh",
    tags: ["straw", "hat", "handwoven"],
  },
  {
    id: "15",
    title: "Decorative Metal Lantern",
    description: "Beautiful metal lantern with intricate cut-out patterns. Creates mesmerizing light patterns when lit.",
    price: 35.50,
    category: "Home Decor",
    image: handicraftImg15,
    rating: 4.6,
    reviewCount: 156,
    stockStatus: "in_stock",
    location: "Dhaka, Bangladesh",
    tags: ["metal", "lantern", "decorative"],
  },
  {
    id: "16",
    title: "Handmade Paper Notebook",
    description: "Eco-friendly handmade paper notebook with traditional binding. Perfect for journaling and notes.",
    price: 12.99,
    category: "Stationery",
    image: handicraftImg16,
    rating: 4.8,
    reviewCount: 312,
    stockStatus: "in_stock",
    location: "Dhaka, Bangladesh",
    tags: ["paper", "notebook", "eco-friendly"],
  },
  {
    id: "17",
    title: "Woven Bamboo Mat",
    description: "Durable bamboo mat perfect for yoga, meditation, or as a decorative floor covering.",
    price: 29.99,
    category: "Home Decor",
    image: handicraftImg17,
    rating: 4.7,
    reviewCount: 189,
    stockStatus: "in_stock",
    location: "Chittagong, Bangladesh",
    tags: ["bamboo", "mat", "woven"],
  },
  {
    id: "18",
    title: "Handcrafted Wooden Spoon Set",
    description: "Set of five handcrafted wooden spoons. Natural, non-toxic, and perfect for cooking and serving.",
    price: 16.50,
    category: "Kitchenware",
    image: handicraftImg18,
    rating: 4.9,
    reviewCount: 445,
    stockStatus: "in_stock",
    location: "Sylhet, Bangladesh",
    tags: ["wooden", "spoon", "kitchen"],
    featured: true,
  },
  {
    id: "19",
    title: "Embroidered Table Runner",
    description: "Elegant table runner with intricate embroidery. Adds sophistication to your dining table.",
    price: 34.99,
    category: "Home Decor",
    image: handicraftImg19,
    rating: 4.6,
    reviewCount: 123,
    stockStatus: "in_stock",
    location: "Rajshahi, Bangladesh",
    tags: ["embroidered", "table runner", "textile"],
  },
  {
    id: "20",
    title: "Handmade Soap Collection",
    description: "Natural handmade soaps with organic ingredients. Available in various fragrances and colors.",
    price: 14.99,
    category: "Personal Care",
    image: handicraftImg20,
    rating: 4.8,
    reviewCount: 523,
    stockStatus: "in_stock",
    location: "Dhaka, Bangladesh",
    tags: ["soap", "handmade", "natural"],
  },
  {
    id: "21",
    title: "Traditional Cane Chair",
    description: "Comfortable cane chair with traditional weaving. Lightweight and perfect for indoor or outdoor use.",
    price: 95.00,
    category: "Furniture",
    image: handicraftImg21,
    rating: 4.7,
    reviewCount: 78,
    stockStatus: "in_stock",
    location: "Comilla, Bangladesh",
    tags: ["cane", "chair", "furniture"],
  },
  {
    id: "22",
    title: "Handwoven Cotton Tote Bag",
    description: "Spacious cotton tote bag with reinforced handles. Eco-friendly and perfect for daily shopping.",
    price: 21.99,
    category: "Accessories",
    image: handicraftImg22,
    rating: 4.7,
    reviewCount: 298,
    stockStatus: "in_stock",
    location: "Tangail, Bangladesh",
    tags: ["cotton", "tote bag", "reusable"],
  },
  {
    id: "23",
    title: "Decorative Clay Pot Set",
    description: "Set of decorative clay pots with traditional designs. Perfect for plants or as standalone decor.",
    price: 27.50,
    category: "Home Decor",
    image: handicraftImg23,
    rating: 4.6,
    reviewCount: 167,
    stockStatus: "in_stock",
    location: "Bogra, Bangladesh",
    tags: ["clay", "pot", "decorative"],
  },
];

// Get unique categories
const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

// Product Card Component (Airbnb-style)
function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const stockBadgeColor = {
    in_stock: "bg-green-500",
    low_stock: "bg-yellow-500",
    out_of_stock: "bg-red-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-sm"
            aria-label="Add to favorites"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
              }`}
            />
          </button>

          {/* Stock Status Badge */}
          {product.stockStatus === "low_stock" && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-yellow-500 text-white">Low Stock</Badge>
            </div>
          )}
          {product.stockStatus === "out_of_stock" && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-red-500 text-white">Out of Stock</Badge>
            </div>
          )}

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4 space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{product.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price and Category */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <span className="text-lg font-semibold">${product.price}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs px-2 py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
                Our Products
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Best Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover a wide range of handcrafted products designed to meet your needs. Each item is carefully selected and crafted with traditional techniques.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Browse Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Product Collection
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of handcrafted products, each carefully made with traditional techniques and attention to detail.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}