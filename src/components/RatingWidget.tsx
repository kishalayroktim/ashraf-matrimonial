"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "husband",
    label: "Husband Material",
    descriptions: ["Run Away", "Questionable", "Has Potential", "Solid Choice", "Wife Him NOW"],
  },
  {
    id: "cooking",
    label: "Cooking Skills",
    descriptions: ["Burns Water", "Instant Noodle Pro", "Edible Output", "Actually Good", "Master Chef"],
  },
  {
    id: "height",
    label: "Height Adequacy",
    descriptions: ["Needs Stilts", "Vertically Challenged", "Compact King", "Perfect Pocket Size", "Height is Just a Number"],
  },
  {
    id: "fashion",
    label: "Fashion Sense",
    descriptions: ["Engineer Chic", "Tries His Best", "Occasionally Stylish", "Above Average", "Runway Ready"],
  },
  {
    id: "provider",
    label: "Future Provider Score",
    descriptions: ["Concerning", "Working On It", "Stable-ish", "Well On Track", "Goldman Sachs Who?"],
  },
];

function getStoredRatings(): Record<string, number[]> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem("ashraf-ratings");
  return stored ? JSON.parse(stored) : {};
}

function storeRating(id: string, rating: number) {
  const all = getStoredRatings();
  if (!all[id]) all[id] = [];
  all[id].push(rating);
  localStorage.setItem("ashraf-ratings", JSON.stringify(all));
}

function getAverage(id: string): number {
  const all = getStoredRatings();
  if (!all[id] || all[id].length === 0) return 0;
  return all[id].reduce((a: number, b: number) => a + b, 0) / all[id].length;
}

export default function RatingWidget() {
  const [userRatings, setUserRatings] = useState<Record<string, number>>({});
  const [averages, setAverages] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const avgs: Record<string, number> = {};
    categories.forEach((cat) => {
      avgs[cat.id] = getAverage(cat.id);
    });
    setAverages(avgs);
  }, []);

  const handleRate = (catId: string, rating: number) => {
    if (submitted[catId]) return;
    setUserRatings((prev) => ({ ...prev, [catId]: rating }));
  };

  const submitRating = (catId: string) => {
    const rating = userRatings[catId];
    if (!rating) return;
    storeRating(catId, rating);
    setSubmitted((prev) => ({ ...prev, [catId]: true }));
    setAverages((prev) => ({ ...prev, [catId]: getAverage(catId) }));
  };

  const overallAverage = (() => {
    const validAverages = categories
      .map((cat) => averages[cat.id])
      .filter((avg) => avg > 0);
    if (validAverages.length === 0) return 0;
    return validAverages.reduce((a, b) => a + b, 0) / validAverages.length;
  })();

  const totalRatings = (() => {
    const all = getStoredRatings();
    return Object.values(all).reduce((sum, arr) => sum + arr.length, 0);
  })();

  const getVerdict = (score: number): { label: string; description: string } => {
    if (score === 0) return { label: "Unrated", description: "No one has judged him yet. Be the first to decide his fate." };
    if (score < 1.5) return { label: "Certified Disaster", description: "According to the people, Ashraf should consider a career as a hermit. Marriage seems... ambitious." };
    if (score < 2.5) return { label: "Needs Significant Improvement", description: "The reviews are in. Ashraf has some work to do. Maybe start with learning to cook?" };
    if (score < 3.5) return { label: "Acceptable (Barely)", description: "He's average. Not great, not terrible. Like room temperature water — it exists." };
    if (score < 4.5) return { label: "Actually Decent", description: "Surprisingly, the public approves. Ashraf is doing better than expected. His mom would be proud." };
    return { label: "Matrimonial Gold Standard", description: "The people have spoken: Ashraf is peak husband material. Someone marry this man before the ratings drop." };
  };

  const verdict = getVerdict(overallAverage);

  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="gold-border rounded-xl p-6 bg-primary-light/50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h3 className="text-lg font-heading font-bold text-white">
              {category.label}
            </h3>
            {averages[category.id] > 0 && (
              <span className="text-accent text-sm">
                Avg: {averages[category.id].toFixed(1)} / 5
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRate(category.id, star)}
                disabled={submitted[category.id]}
                className={`text-3xl transition-transform hover:scale-125 ${
                  (userRatings[category.id] || 0) >= star
                    ? "text-accent"
                    : "text-white/20 hover:text-accent/50"
                } ${submitted[category.id] ? "cursor-default" : "cursor-pointer"}`}
              >
                ★
              </button>
            ))}
          </div>

          {userRatings[category.id] && !submitted[category.id] && (
            <div className="flex items-center gap-3 mt-2">
              <p className="text-white/60 text-sm italic">
                {category.descriptions[userRatings[category.id] - 1]}
              </p>
              <button
                onClick={() => submitRating(category.id)}
                className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full hover:bg-accent-light transition-colors"
              >
                Submit
              </button>
            </div>
          )}

          {submitted[category.id] && (
            <p className="text-accent/80 text-sm mt-2">
              ✓ Your verdict has been recorded. Ashraf will be notified.
              (He won&apos;t.)
            </p>
          )}
        </motion.div>
      ))}

      {/* Results Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 gold-border rounded-xl p-8 bg-gradient-to-br from-primary-light/70 to-primary-light/30"
      >
        <div className="text-center mb-6">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-2">
            Public Verdict
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
            Rating Results
          </h2>
          <p className="text-white/40 text-sm">
            {totalRatings} total rating{totalRatings !== 1 ? "s" : ""} submitted
          </p>
        </div>

        {/* Overall Score */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-accent/50 bg-primary mb-3">
            <div>
              <span className="text-3xl font-heading font-bold text-accent">
                {overallAverage > 0 ? overallAverage.toFixed(1) : "—"}
              </span>
              <span className="text-white/40 text-sm block">/5.0</span>
            </div>
          </div>
          <h3 className="text-xl font-heading font-bold text-accent mb-1">
            {verdict.label}
          </h3>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            {verdict.description}
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-4">
          <h4 className="text-sm text-white/50 uppercase tracking-widest mb-2">
            Category Breakdown
          </h4>
          {categories.map((category) => {
            const avg = averages[category.id] || 0;
            const percentage = (avg / 5) * 100;
            const ratingCount = (() => {
              const all = getStoredRatings();
              return all[category.id]?.length || 0;
            })();
            const descIndex = Math.max(0, Math.min(4, Math.round(avg) - 1));
            return (
              <div key={category.id}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/80 text-sm font-medium">
                    {category.label}
                  </span>
                  <span className="text-accent text-sm font-bold">
                    {avg > 0 ? avg.toFixed(1) : "—"}
                    <span className="text-white/30 font-normal ml-1">
                      ({ratingCount})
                    </span>
                  </span>
                </div>
                <div className="w-full bg-primary rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        percentage >= 80
                          ? "linear-gradient(90deg, #d4af37, #f0d060)"
                          : percentage >= 60
                          ? "linear-gradient(90deg, #d4af37, #d4af37cc)"
                          : percentage >= 40
                          ? "linear-gradient(90deg, #d4af3799, #d4af37aa)"
                          : "linear-gradient(90deg, #d4af3744, #d4af3766)",
                    }}
                  />
                </div>
                {avg > 0 && (
                  <p className="text-white/30 text-xs mt-0.5 italic">
                    {category.descriptions[descIndex]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
