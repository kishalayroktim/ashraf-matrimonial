"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import StatsCard from "@/components/StatsCard";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden gold-border ring-4 ring-accent/20">
            <Image
              src="/images/ashraf-5.jpg"
              alt="Ashraf Hamid"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            The Groom&apos;s Dossier
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            About Ashraf Hamid
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the candidate, prepared with the same
            level of detail he puts into his structural analysis reports.
            Spoiler: he&apos;s structurally sound.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="gold-border rounded-xl p-8 bg-primary-light/50 mb-16"
        >
          <h2 className="text-2xl font-heading font-bold text-accent mb-4">
            Executive Summary
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ashraf Hamid is a 26-year-old civil engineer of impeccable character,
            questionable height, and undeniable ambition. Having survived six
            years of military-grade discipline at Faujdarhat Cadet College,
            followed by six years of academic rigor at BUET, he has emerged as
            a battle-tested individual ready for the ultimate challenge: marriage.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Currently stationed in Germany under the prestigious Erasmus Mundus
            Scholarship, Ashraf continues to build bridges — both metaphorically
            and literally. He is humble, family-oriented, respectful, and
            according to his mother, &quot;the best boy in the whole world.&quot;
          </p>
          <p className="text-white/60 text-sm italic">
            Note: The above description was NOT written by Ashraf himself.
            It was written by friends who owe him money and are trying to
            repay the debt through this website.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-16">
          <div className="ornament-divider">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              Vital Statistics
            </span>
          </div>
          <div className="mt-8">
            <StatsCard />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="ornament-divider">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              The Journey So Far
            </span>
          </div>
          <div className="mt-8">
            <Timeline />
          </div>
        </div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl p-8 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-2 border-accent mb-16"
        >
          <div className="absolute top-2 right-4 bg-cta text-white text-xs font-bold px-3 py-1 rounded-full rotate-12">
            LIMITED OFFER
          </div>
          <h2 className="text-2xl font-heading font-bold text-accent mb-3">
            🎁 Special Wedding Bonus Package
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Marry Ashraf and receive <strong className="text-accent">FREE IELTS tutoring</strong> for
            life! That&apos;s right — a Band 8.0 scorer will personally coach you
            through Reading, Writing, Listening, and Speaking. This offer is
            valued at over $500 but comes completely FREE with your marriage
            contract.
          </p>
          <p className="text-white/50 text-xs italic">
            * Terms and conditions apply. Offer valid only for legally married
            spouse. No refunds on the marriage. The 5&apos;4.2&quot; height is final
            and non-negotiable.
          </p>
        </motion.div>

        {/* Qualities */}
        <div className="mb-16">
          <div className="ornament-divider">
            <span className="text-accent text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              Key Qualities
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { trait: "Humble", desc: "Won't mention his IELTS score unless asked. Okay, maybe unprompted too." },
              { trait: "Family-Oriented", desc: "Calls his mom daily. Your mom will love this about him." },
              { trait: "Respectful", desc: "Opens doors, pulls out chairs, the whole gentleman package." },
              { trait: "Disciplined", desc: "6 years of cadet training. Your future kids will be on schedule." },
              { trait: "Ambitious", desc: "Erasmus Mundus scholar with plans to settle abroad." },
              { trait: "Good at Sports", desc: "Athletic enough to chase after your heart (and toddlers)." },
            ].map((item, i) => (
              <motion.div
                key={item.trait}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="gold-border rounded-lg p-4 bg-primary-light/30"
              >
                <h3 className="text-accent font-heading font-bold mb-1">{item.trait}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/apply"
            className="inline-block bg-cta text-white font-bold px-10 py-3 rounded-full text-lg hover:bg-cta-hover transition-all hover:scale-105 shadow-lg shadow-cta/20"
          >
            Convinced? Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
