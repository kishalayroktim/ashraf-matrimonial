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
    </div>
  );
}
