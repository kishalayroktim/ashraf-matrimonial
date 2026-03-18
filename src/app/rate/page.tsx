"use client";

import { motion } from "framer-motion";
import RatingWidget from "@/components/RatingWidget";

export default function RatePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Performance Review
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Rate Ashraf
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Your honest assessment helps us improve our product. Rate Ashraf
            across multiple categories so we know exactly where he needs work.
            All ratings are anonymous and will be shared with him at the worst
            possible moment.
          </p>
        </motion.div>

        <RatingWidget />

        <div className="mt-8 text-center text-white/40 text-xs italic">
          Ratings stored locally in your browser. We respect your privacy,
          even if we don&apos;t respect Ashraf&apos;s feelings.
        </div>
      </div>
    </div>
  );
}
