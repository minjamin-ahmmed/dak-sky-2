"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ScrollToTop() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        asChild
        size="icon"
        className="rounded-full shadow-lg border-border/50 hover:border-primary/50 bg-[#4777f9] text-white transition-all duration-300 cursor-pointer h-12 w-12"
      >
        <a
          href="https://m.me/976714612185510"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </a>
      </Button>
    </motion.div>
  );
}
