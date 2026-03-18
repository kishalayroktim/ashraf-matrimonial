"use client";

import { motion } from "framer-motion";
import PhotoGrid from "@/components/PhotoGrid";

export default function GalleryPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Visual Evidence
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            The Gallery
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            A carefully curated collection of photographs proving that Ashraf
            is, in fact, a real person and not an elaborate AI-generated hoax.
          </p>
        </motion.div>

        <PhotoGrid />

        <div className="text-center mt-12">
          <p className="text-white/40 text-sm italic">
            Note: Photos are 100% unedited and unfiltered. The handsomeness is
            real. The 5&apos;4.2&quot; is also real. Camera angles can only do so much.
          </p>
        </div>
      </div>
    </div>
  );
}
