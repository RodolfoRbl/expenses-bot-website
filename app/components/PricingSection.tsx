import React from 'react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your <span className="text-accent">Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start for free and upgrade when you need more features.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Free</h3>
              <div className="mb-5">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for personal expense tracking</p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Unlimited expense tracking",
                  "Default categories",
                  "Single currency support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/fundu_expenses_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 text-center text-white bg-accent rounded-lg mt-auto hover:brightness-110 transition-colors"
              >
                <div className='text-white'>Get Started</div>
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-primary rounded-2xl overflow-hidden shadow-xl relative group hover:shadow-2xl hover:scale-[1.01] transition-all flex flex-col">
            {/* Highlight badge */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-accent-dark text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>

            <div className="p-8 relative z-10 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">Premium</h3>
              <div className="mb-5">
                <span className="text-white/80 ml-2">From </span>
                <span className="text-4xl font-bold text-white">$2.99</span>
              </div>
              <p className="text-white/80 mb-6">Advanced features for serious money tracking</p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Free plan",
                  "AI expense categorization",
                  "Manage categories",
                  "Multiple currency support",
                  "Budget planning",
                  "Data export (CSV)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/fundu_expenses_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 text-center text-accent-dark bg-white rounded-lg mt-auto hover:bg-blue-50 transition-colors"
              >
                Upgrade to Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
