"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2012 - 2018",
    title: "Faujdarhat Cadet College",
    description:
      "Survived 6 years of military-style discipline, morning PT, and hostel food. Emerged as a disciplined young man who can make his bed with hospital corners. Class 6 to 12.",
    icon: "🎖️",
  },
  {
    year: "2018 - 2024",
    title: "BSc in Civil Engineering — BUET",
    description:
      "Spent 6 years at Bangladesh's most prestigious engineering university learning how to build bridges. Still can't bridge the gap to finding a wife. Graduated with flying colors.",
    icon: "🏗️",
  },
  {
    year: "2024 - Present",
    title: "Erasmus Mundus Scholar — Germany",
    description:
      "Won a prestigious European scholarship because apparently Bangladesh wasn't far enough from his mother's marriage pressure. Currently building a future in Europe.",
    icon: "🇩🇪",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 transform md:-translate-x-px" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex flex-col md:flex-row items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot on the line */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 ring-4 ring-primary" />

            {/* Content card */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="gold-border rounded-xl p-6 bg-primary-light/50 hover:bg-primary-light/80 transition-colors">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
