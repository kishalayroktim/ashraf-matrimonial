"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  submitTestimonialToFirebase,
  getTestimonialsFromFirebase,
  UserTestimonial,
} from "@/lib/firebase";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

const fixedTestimonials: Testimonial[] = [
  {
    name: "Kishalay Saha Roktim",
    title: "Childhood Trauma Survivor & Certified Ashraf Expert",
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

function TestimonialCardItem({
  testimonial,
  index,
  isUserSubmitted,
}: {
  testimonial: Testimonial;
  index: number;
  isUserSubmitted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="gold-border rounded-xl p-6 bg-primary-light/50"
    >
      {isUserSubmitted && (
        <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-2 py-0.5 rounded-full mb-3">
          Public Testimonial
        </span>
      )}
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
  );
}

export default function TestimonialCard() {
  const [userTestimonials, setUserTestimonials] = useState<UserTestimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    title: "",
    quote: "",
    rating: 5,
  });

  const fetchTestimonials = useCallback(async () => {
    try {
      const data = await getTestimonialsFromFirebase();
      setUserTestimonials(data);
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.quote) return;
    setFormStatus("sending");

    try {
      await submitTestimonialToFirebase({
        name: form.name,
        title: form.title || "Anonymous Acquaintance",
        quote: form.quote,
        rating: form.rating,
      });
      setFormStatus("success");
      setForm({ name: "", title: "", quote: "", rating: 5 });
      await fetchTestimonials();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div>
      {/* Fixed testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fixedTestimonials.map((testimonial, index) => (
          <TestimonialCardItem
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* User-submitted testimonials */}
      {userTestimonials.length > 0 && (
        <div className="mt-10">
          <div className="ornament-divider mb-8">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              From The Public
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTestimonials.map((testimonial, index) => (
              <TestimonialCardItem
                key={`user-${index}`}
                testimonial={testimonial}
                index={index}
                isUserSubmitted
              />
            ))}
          </div>
        </div>
      )}

      {/* Add Testimonial Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 gold-border rounded-xl p-6 bg-primary-light/30"
      >
        {!showForm && formStatus !== "success" && (
          <div className="text-center">
            <p className="text-accent font-heading text-lg font-bold mb-2">
              Know Ashraf? Add Your Testimonial
            </p>
            <p className="text-white/60 text-sm mb-4">
              We accept both praise and constructive character assassination.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-accent text-primary font-bold px-6 py-2 rounded-full hover:bg-accent-light transition-colors"
            >
              Write a Testimonial
            </button>
          </div>
        )}

        {showForm && formStatus !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-heading font-bold text-accent mb-2">
              Your Testimonial
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-1">Your Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Who dares to speak?"
                  className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">Your Title</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder='e.g. "Concerned Neighbor"'
                  className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-1">Your Testimonial *</label>
              <textarea
                value={form.quote}
                onChange={(e) => setForm({ ...form, quote: e.target.value })}
                required
                rows={4}
                placeholder="Say something nice. Or don't. We'll publish it either way."
                className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-1">
                Rate Ashraf as a marriage candidate
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    className={`text-3xl transition-transform hover:scale-125 ${
                      form.rating >= star ? "text-accent" : "text-white/20 hover:text-accent/50"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="bg-cta text-white font-bold px-6 py-2 rounded-full hover:bg-cta-hover transition-colors disabled:opacity-50"
              >
                {formStatus === "sending" ? "Submitting..." : "Submit Testimonial"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-white/20 text-white/60 px-6 py-2 rounded-full hover:border-white/40 transition-colors"
              >
                Cancel
              </button>
            </div>

            {formStatus === "error" && (
              <p className="text-cta text-sm">
                Something went wrong. Even the testimonial system rejects you. Try again.
              </p>
            )}
          </form>
        )}

        {formStatus === "success" && (
          <div className="text-center">
            <div className="text-4xl mb-3">✍️</div>
            <h3 className="text-xl font-heading font-bold text-accent mb-2">
              Testimonial Published!
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Your words have been immortalized. Ashraf cannot escape public opinion.
            </p>
            <button
              onClick={() => {
                setFormStatus("idle");
                setShowForm(false);
              }}
              className="bg-accent text-primary font-bold px-6 py-2 rounded-full hover:bg-accent-light transition-colors"
            >
              Write Another One
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
