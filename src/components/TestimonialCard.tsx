"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kishalay Saha Roktim",
    title: "Childhood Trauma Survivor & Best Friend",
    quote:
      "I have known Ashraf since our cadet college days. He is the kind of man who will calculate the structural integrity of your relationship before committing. 10/10 would recommend as a husband — mostly because I want to see him suffer the way married people do.",
    rating: 5,
  },
  {
    name: "Syfullah Fahim",
    title: "Fellow Survivor & Reluctant Wingman",
    quote:
      "Ashraf is the most disciplined man I know. He wakes up at 6 AM voluntarily, even on weekends. If that doesn't scream 'husband material,' I don't know what does. His future wife will never have to worry about him sleeping in. She might worry about other things though.",
    rating: 4,
  },
  {
    name: "His BUET Professors",
    title: "Academic References (Probably)",
    quote:
      "Mr. Hamid demonstrated exceptional ability to withstand pressure — both structural and emotional. His thesis on load-bearing capacity is, we assume, a metaphor for his readiness for marriage. We give our reluctant blessing.",
    rating: 4,
  },
  {
    name: "Ashraf's Mom",
    title: "Chief Marriage Officer (CMO)",
    quote:
      "He is the best boy. Very good boy. Eats everything. Calls every day. When is he getting married? Please help. I am running out of excuses at family gatherings. His aunties are asking questions I cannot answer anymore.",
    rating: 5,
  },
];

export default function TestimonialCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="gold-border rounded-xl p-6 bg-primary-light/50"
        >
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < testimonial.rating ? "text-accent" : "text-white/20"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-white/80 text-sm leading-relaxed italic mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="border-t border-accent/20 pt-3">
            <p className="text-accent font-semibold text-sm">{testimonial.name}</p>
            <p className="text-white/50 text-xs">{testimonial.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
