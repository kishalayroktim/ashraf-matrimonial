"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  caption: string;
}

const placeholderPhotos: Photo[] = [
  { src: "/images/ashraf-1.jpg", caption: "Lake Garda, Italy — the mountains are tall, he is not" },
  { src: "/images/ashraf-2.jpg", caption: "Standing by the sea, waiting for his soulmate to wash ashore" },
  { src: "/images/ashraf-3.jpg", caption: "Even the pony is taller. But Ashraf has better IELTS scores." },
  { src: "/images/ashraf-4.jpg", caption: "Florence, Italy — blending in with the Renaissance art (short kings were popular then)" },
  { src: "/images/ashraf-5.jpg", caption: "Budapest winter — hands in pockets because no one's hand to hold" },
  { src: "/images/ashraf-6.jpg", caption: "Hungarian Parliament at night — the gold matches his matrimonial ambitions" },
  { src: "/images/ashraf-7.jpg", caption: "The biker boy of Noakhali — two wheels, zero girlfriends" },
  { src: "/images/ashraf-8.jpg", caption: "Back at FCC — where they taught him discipline but not how to find a wife" },
  { src: "/images/ashraf-9.jpg", caption: "\"We Shall Never Surrender\" — also his approach to finding a bride" },
  { src: "/images/ashraf-10.jpg", caption: "Road to Marriage: currently stuck on Singleton Alley. Spouse Hunter hoodie equipped." },
];

export default function PhotoGrid() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {placeholderPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(photo)}
            className="relative aspect-[3/4] rounded-xl overflow-hidden gold-border cursor-pointer group"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={selected.src}
                  alt={selected.caption}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="text-center text-white/80 mt-4 text-lg font-heading">
                {selected.caption}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 bg-accent text-primary w-8 h-8 rounded-full font-bold text-lg flex items-center justify-center hover:bg-accent-light transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
