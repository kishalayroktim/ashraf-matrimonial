"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-light border-t border-accent/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg text-accent mb-3">
              Ashraf Matrimonial Services&trade;
            </h3>
            <p className="text-white/60 text-sm">
              Connecting Bangladesh&apos;s most eligible civil engineer with his
              soulmate since 2026. Results may vary. Height non-negotiable.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-accent mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-white/60 text-sm hover:text-accent transition-colors">
                About the Groom
              </Link>
              <Link href="/apply" className="block text-white/60 text-sm hover:text-accent transition-colors">
                Bride Application
              </Link>
              <Link href="/contact" className="block text-white/60 text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-accent mb-3">Disclaimer</h4>
            <p className="text-white/60 text-sm">
              This website is a work of satire created by friends who clearly
              have too much free time. No civil engineers were harmed in the
              making of this website. The 5&apos;4.2&quot; is accurate though.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-accent/10 text-center text-white/40 text-xs">
          &copy; 2026 Ashraf Matrimonial Services&trade;. All rights reserved.
          Made with questionable intentions by his &quot;friends.&quot;
        </div>
      </div>
    </footer>
  );
}
