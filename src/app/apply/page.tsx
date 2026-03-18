"use client";

import { motion } from "framer-motion";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Official Application Portal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Bride Application Form
          </h1>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Thank you for your interest in the position of &quot;Mrs. Hamid.&quot;
            Please fill out the form below with accurate information.
            Incomplete applications will be forwarded to Ashraf&apos;s mother
            for further interrogation.
          </p>

          {/* Requirements box */}
          <div className="gold-border rounded-xl p-6 bg-primary-light/30 text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-accent font-heading font-bold mb-3">
              Minimum Requirements
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Age: 18-25 years
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Height: 5&apos;3&quot; or under (we don&apos;t want to make him feel short<em>er</em>)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Education: Minimum Bachelor&apos;s degree
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Location: Dhaka or Chittagong
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Personality: Simple, caring, family-oriented
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Biryani cooking skills: Strongly preferred
              </li>
            </ul>
          </div>
        </motion.div>

        <ApplicationForm />
      </div>
    </div>
  );
}
