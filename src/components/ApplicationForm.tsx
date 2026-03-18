"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

interface FormData {
  name: string;
  age: string;
  education: string;
  location: string;
  contact: string;
  biryani: string;
  heightFeeling: string;
  engineeringJokes: string;
  ieltsTutoring: string;
  whyYou: string;
}

const initialForm: FormData = {
  name: "",
  age: "",
  education: "",
  location: "",
  contact: "",
  biryani: "5",
  heightFeeling: "",
  engineeringJokes: "Medium",
  ieltsTutoring: "Yes",
  whyYou: "",
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS: Replace these with your actual service/template/public key
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          age: form.age,
          education: form.education,
          location: form.location,
          contact: form.contact,
          biryani_rating: form.biryani,
          height_feeling: form.heightFeeling,
          engineering_jokes: form.engineeringJokes,
          ielts_tutoring: form.ieltsTutoring,
          why_you: form.whyYou,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="gold-border rounded-xl p-10 bg-primary-light/50 text-center max-w-2xl mx-auto"
      >
        <div className="text-6xl mb-4">💍</div>
        <h3 className="text-2xl font-heading font-bold text-accent mb-3">
          Application Received!
        </h3>
        <p className="text-white/70 leading-relaxed">
          Your application has been forwarded to our elite review committee
          (his mom and two friends with too much free time). You will be
          contacted if you survive the initial screening process. Please do not
          call us — we will call you. Maybe.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 bg-accent text-primary font-bold px-6 py-2 rounded-full hover:bg-accent-light transition-colors"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Serious Fields */}
      <div className="gold-border rounded-xl p-6 bg-primary-light/50 space-y-4">
        <h3 className="text-lg font-heading font-bold text-accent mb-2">
          Section A: Basic Information
        </h3>

        <div>
          <label className="block text-white/70 text-sm mb-1">Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name (no fake names, we will verify)"
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/70 text-sm mb-1">Age *</label>
            <input
              name="age"
              type="number"
              min="18"
              max="25"
              value={form.age}
              onChange={handleChange}
              required
              placeholder="18-25"
              className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-1">Location *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="Dhaka / Chittagong preferred"
              className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">Education *</label>
          <input
            name="education"
            value={form.education}
            onChange={handleChange}
            required
            placeholder="Minimum Bachelor's degree required (his mom said so)"
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">Contact (Phone/Email) *</label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder="How should we reach you with the good/bad news?"
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Funny Fields */}
      <div className="gold-border rounded-xl p-6 bg-primary-light/50 space-y-4">
        <h3 className="text-lg font-heading font-bold text-accent mb-2">
          Section B: Compatibility Assessment
        </h3>

        <div>
          <label className="block text-white/70 text-sm mb-1">
            Can you cook biryani? Rate your skills (1-10) *
          </label>
          <input
            name="biryani"
            type="range"
            min="1"
            max="10"
            value={form.biryani}
            onChange={handleChange}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>1 — &quot;What is biryani?&quot;</span>
            <span className="text-accent font-bold">{form.biryani}/10</span>
            <span>10 — &quot;Michelin Star&quot;</span>
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">
            How do you feel about a 5&apos;4.2&quot; king? *
          </label>
          <input
            name="heightFeeling"
            value={form.heightFeeling}
            onChange={handleChange}
            required
            placeholder="Choose your words carefully..."
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">
            Tolerance for engineering jokes? *
          </label>
          <select
            name="engineeringJokes"
            value={form.engineeringJokes}
            onChange={handleChange}
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white focus:border-accent focus:outline-none transition-colors"
          >
            <option value="Low">Low — I will file for divorce</option>
            <option value="Medium">Medium — I can tolerate a few per week</option>
            <option value="Dangerously High">Dangerously High — I find them funny</option>
          </select>
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">
            Are you okay with free IELTS tutoring as a wedding gift?
          </label>
          <select
            name="ieltsTutoring"
            value={form.ieltsTutoring}
            onChange={handleChange}
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white focus:border-accent focus:outline-none transition-colors"
          >
            <option value="Yes">Yes — What a generous king</option>
            <option value="Already 9.0">I already scored 9.0, thanks</option>
            <option value="Would prefer jewelry">I would prefer jewelry, actually</option>
          </select>
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-1">
            Why should Ashraf pick YOU? (Sell yourself)
          </label>
          <textarea
            name="whyYou"
            value={form.whyYou}
            onChange={handleChange}
            rows={4}
            placeholder="This is your moment. Think of it as a cover letter, but for marriage..."
            className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-cta text-white font-bold py-3 rounded-full text-lg hover:bg-cta-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Submitting Application..." : "Submit Bride Application"}
      </button>

      {status === "error" && (
        <p className="text-cta text-center text-sm">
          Something went wrong. Even our servers rejected this. Please try again.
        </p>
      )}
    </form>
  );
}
