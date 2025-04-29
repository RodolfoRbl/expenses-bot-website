import { Check } from "./icons/Check";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for individuals just starting to track their expenses",
    features: [
      "Unlimited expense tracking",
      "Daily and weekly reports",
      "Basic categorization",
      "7-day expense history"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Premium",
    price: "$3.99",
    period: "per month",
    description: "Enhanced features for better financial management",
    features: [
      "Everything in Basic",
      "Unlimited expense history",
      "Custom categories",
      "Monthly & yearly insights",
      "Budget planning & alerts",
      "Data export (CSV)"
    ],
    cta: "Get Premium",
    popular: true
  },
  {
    name: "Family",
    price: "$7.99",
    period: "per month",
    description: "Track expenses with family members or roommates",
    features: [
      "Everything in Premium",
      "Up to 5 users",
      "Shared expenses tracking",
      "Group budgets",
      "Split bill calculations",
      "Priority support"
    ],
    cta: "Coming Soon",
    disabled: true,
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent-lighter/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Pricing Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span> Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start using SpendTracker for free and upgrade when you need more features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden ${
                plan.popular 
                  ? "glass-card border-2 border-accent bg-white/80 dark:bg-gray-800/80 shadow-xl z-10 transform md:-translate-y-4" 
                  : "glass-card shadow-lg"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-24 h-24 bg-accent rounded-full opacity-20"></div>
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-sm">
                      Popular
                    </div>
                  </div>
                </>
              )}
              
              <div className="p-6 md:p-8">
                <div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                </div>
                
                <div className="mt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.popular ? 'bg-accent' : 'bg-gray-200'} flex items-center justify-center mt-1`}>
                          <Check className={`h-3 w-3 ${plan.popular ? 'text-white' : 'text-gray-700'}`} />
                        </div>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a
                    href={!plan.disabled ? "https://t.me/SpendTrackerBot" : "#"}
                    className={`w-full text-center py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
                      plan.disabled
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : plan.popular
                        ? "button"
                        : "bg-white hover:bg-gray-50 border border-accent text-accent hover:text-accent-dark transition-colors"
                    }`}
                  >
                    {plan.cta}
                    {!plan.disabled && (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Need a custom plan for your business?</h3>
          <p className="text-gray-600 mb-6">
            We offer special pricing and features for businesses of all sizes. Contact us to learn more.
          </p>
          <a 
            href="mailto:contact@spendtracker.app" 
            className="inline-flex items-center text-accent hover:text-accent-dark"
          >
            Contact for Business Plans
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
