"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Our dedicated team of matchmaking professionals (two friends and
            a concerned mother) are standing by to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gold-border rounded-xl p-8 bg-primary-light/50 text-center"
          >
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-xl font-heading font-bold text-accent mb-2">
              Hotline
            </h3>
            <a
              href="tel:01533597617"
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              01533-597-617
            </a>
            <p className="text-white/50 text-sm mt-2">
              Call now! Operators are standing by. <br />
              (By &quot;operators&quot; we mean Ashraf, nervously.)
            </p>
          </motion.div>

          {/* Apply redirect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gold-border rounded-xl p-8 bg-primary-light/50 text-center"
          >
            <div className="text-5xl mb-4">💌</div>
            <h3 className="text-xl font-heading font-bold text-accent mb-2">
              Online Application
            </h3>
            <p className="text-white/70 mb-4">
              Prefer the formal route? Submit your bride application through our
              secure online portal.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-cta text-white font-bold px-6 py-2.5 rounded-full hover:bg-cta-hover transition-all hover:scale-105"
            >
              Apply Online →
            </Link>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gold-border rounded-xl p-8 bg-primary-light/50 mb-12"
        >
          <h3 className="text-xl font-heading font-bold text-accent mb-4 text-center">
            Office Hours
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {[
              { day: "Saturday - Thursday", time: "10:00 AM - 10:00 PM (BST)" },
              { day: "Friday", time: "After Jummah - 10:00 PM" },
              { day: "During Exams", time: "Please don't call" },
              { day: "When Mom Calls", time: "All lines busy" },
            ].map((item) => (
              <div
                key={item.day}
                className="flex justify-between items-center py-2 border-b border-accent/10"
              >
                <span className="text-white/70 text-sm">{item.day}</span>
                <span className="text-accent text-sm font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="mb-12">
          <div className="ornament-divider">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              Frequently Asked Questions
            </span>
          </div>
          <div className="space-y-4 mt-8">
            {[
              {
                q: "Is this website real?",
                a: "As real as Ashraf's 5'4.2\" height measurement. Yes, it's real. His friends made it. No, he did not approve it.",
              },
              {
                q: "Does Ashraf know about this website?",
                a: "He does now. His reaction was... instructive. We have chosen to continue regardless.",
              },
              {
                q: "Is the IELTS tutoring offer real?",
                a: "Absolutely. Ashraf scored 8.0 and genuinely loves teaching. This might be the only non-satirical part of this entire website.",
              },
              {
                q: "What if I don't meet all the requirements?",
                a: "Submit anyway. Ashraf isn't in a position to be picky. He's 5'4.2\" and his mom calls daily.",
              },
              {
                q: "Can I rate Ashraf anonymously?",
                a: "Yes! Visit the Rate Him page. We encourage brutal honesty. It builds character.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gold-border rounded-lg p-5 bg-primary-light/30"
              >
                <h4 className="text-accent font-heading font-bold mb-2">
                  Q: {item.q}
                </h4>
                <p className="text-white/70 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center text-white/40 text-sm">
          <p>
            For complaints about this website, please contact{" "}
            <span className="text-accent">Kishalay Saha Roktim</span> and{" "}
            <span className="text-accent">Syfullah Fahim</span>. We accept
            criticism in English, Bengali, and passive-aggressive WhatsApp
            messages.
          </p>
        </div>
      </div>
    </div>
  );
}
