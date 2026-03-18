"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Character References
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What People Say
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Unbiased testimonials from people who definitely were not
            coerced, bribed, or threatened into saying nice things about Ashraf.
          </p>
        </motion.div>

        <TestimonialCard />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center gold-border rounded-xl p-6 bg-primary-light/30"
        >
          <p className="text-accent font-heading text-lg font-bold mb-2">
            Want to Add Your Testimonial?
          </p>
          <p className="text-white/60 text-sm">
            If you know Ashraf personally and would like to contribute a
            testimonial (roast), please contact the website administrators.
            We accept both praise and constructive character assassination.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
