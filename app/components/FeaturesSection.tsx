type IconKey = keyof typeof icons;

const features: { title: string; description: string; icon: IconKey }[] = [
  {
    title: "Simple Messages",
    description: "Just type what you spent and the amount. No complex forms or multiple steps.",
    icon: "chat-bubble",
  },
  {
    title: "Instant Reports",
    description: "Get daily, weekly, and monthly spending reports with just one command.",
    icon: "chart-bar",
  },
  {
    title: "Smart Categories",
    description: "Automatically categorizes your expenses to see where your money goes.",
    icon: "tag",
  },
  {
    title: "Budget Alerts",
    description: "Set spending limits and receive alerts when you're close to exceeding them.",
    icon: "bell",
  },
];

// SVG icons mapping
const icons = {
  "chat-bubble": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  "chart-bar": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "tag": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  "bell": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  )
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simplify Your <span className="gradient-text">Financial Tracking</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fundu gives you powerful expense tracking tools without the complexity of traditional finance apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 flex flex-col items-start relative group 
                        transition-all duration-300 bg-gradient-primary
                        transform hover:translate-y-[-5px]`}
              style={{
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 text-lg 
                          transform transition-transform group-hover:scale-105 bg-white/20 backdrop-blur-sm text-white`}
              >
                {icons[feature.icon]}
              </div>

              <div
                className="absolute top-0 right-0 h-24 w-24 opacity-10 rounded-bl-full bg-white"
              >
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8">
          <div className="flex flex-col items-center gap-10">
            <div className="flex-1 text-center max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
                How It Works
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Track Expenses in Seconds</h3>

              <div className="inline-block text-left">
                {[
                  { step: "1", text: "Start a chat with @fundu_expenses_bot in Telegram" },
                  { step: "2", text: "Simply send messages like \"coffee 4.50\" or \"groceries 34.99\"" },
                  { step: "3", text: "Use commands like /stats, /history or /budget to manage your finances" },
                  { step: "4", text: "Receive insights about your spending habits and save money!" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-medium shadow-sm">
                        {item.step}
                      </div>
                    </div>
                    <div>
                        <p className="text-gray-700 font-medium pt-5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://t.me/fundu_expenses_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Try It Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
