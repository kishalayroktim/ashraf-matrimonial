"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Age", value: "26", subtitle: "Years of preparation" },
  { label: "Height", value: "5'4.2\"", subtitle: "Every inch counts" },
  { label: "IELTS", value: "8.0", subtitle: "Can argue in English" },
  { label: "Education", value: "BUET", subtitle: "Civil Engineering" },
  { label: "Hometown", value: "Noakhali", subtitle: "Born & raised" },
  { label: "Location", value: "Italy", subtitle: "Erasmus Mundus" },
  { label: "Fav Food", value: "Dahuk", subtitle: "Especially if free" },
  { label: "Rides", value: "Biker", subtitle: "Two wheels, one heart" },
  { label: "Status", value: "Single", subtitle: "Desperately" },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="gold-border rounded-xl p-5 bg-primary-light/50 text-center hover:bg-primary-light/80 transition-colors cursor-default"
        >
          <div className="text-accent text-xs uppercase tracking-[0.2em] mb-1">
            {stat.label}
          </div>
          <div className="text-2xl md:text-3xl font-heading font-bold text-white">
            {stat.value}
          </div>
          <div className="text-white/50 text-xs mt-1 italic">{stat.subtitle}</div>
        </motion.div>
      ))}
    </div>
  );
}
