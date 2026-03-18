"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ashraf-1.jpg"
            alt="Ashraf at Lake Garda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent text-sm uppercase tracking-[0.4em] mb-6"
          >
            Spouse Hunter &bull; Currently on Singleton Alley
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-4">
            Bangladesh&apos;s Most Eligible{" "}
            <span className="gold-shimmer">Bachelor</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            He can calculate the load-bearing capacity of a bridge, but not the
            weight of loneliness. BUET graduate. Erasmus Mundus scholar.
            Still single.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/apply"
              className="bg-cta text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-cta-hover transition-all hover:scale-105 shadow-lg shadow-cta/20"
            >
              Apply to Be His Bride
            </Link>
            <Link
              href="/about"
              className="border border-accent text-accent font-bold px-8 py-3 rounded-full text-lg hover:bg-accent/10 transition-all hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <CountdownTimer />
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* Quick highlights */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="ornament-divider">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              Why Choose Ashraf?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: "🎓",
                title: "Triple Educated",
                desc: "Cadet College → BUET → Erasmus Mundus. This man collects degrees like Thanos collects infinity stones.",
              },
              {
                icon: "🌍",
                title: "International Profile",
                desc: "Currently in Italy on a prestigious scholarship. Your parents will finally have something to brag about at gatherings.",
              },
              {
                icon: "📝",
                title: "IELTS 8.0",
                desc: "Free IELTS tutoring included with marriage. That's a $500 value, absolutely free. Act now.",
              },
              {
                icon: "🏍️",
                title: "Certified Biker",
                desc: "Rides a motorcycle. Will pick you up on a bike for your first date. Helmet included, butterflies not guaranteed.",
              },
              {
                icon: "🍗",
                title: "Free Food Enthusiast",
                desc: "His love language is free food. Dahuk pakhi is his ultimate weakness. Marry him and never eat alone.",
              },
              {
                icon: "🏡",
                title: "Noakhali Origins",
                desc: "From Noakhali — the land of brave hearts and strong opinions. He will protect you and out-argue you.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="gold-border rounded-xl p-6 bg-primary-light/50 text-center hover:bg-primary-light/80 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-heading font-bold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="inline-block bg-accent text-primary font-bold px-8 py-3 rounded-full hover:bg-accent-light transition-all hover:scale-105"
            >
              Don&apos;t Miss This Opportunity →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
