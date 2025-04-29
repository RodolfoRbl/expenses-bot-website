import Image from "next/image";

const features = [
  {
    title: "Simple Input",
    description: "Just type what you spent and the amount. No complex forms or multiple steps.",
    icon: "💬",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Instant Reports",
    description: "Get daily, weekly, and monthly spending reports with just one command.",
    icon: "📊",
    gradient: "from-indigo-500 to-blue-400"
  },
  {
    title: "Smart Categories",
    description: "Automatically categorizes your expenses to see where your money goes.",
    icon: "🏷️",
    gradient: "from-blue-600 to-indigo-400"
  },
  {
    title: "Budget Alerts",
    description: "Set spending limits and receive notifications when you're close to exceeding them.",
    icon: "🔔",
    gradient: "from-cyan-500 to-blue-500"
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-80"></div>
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
            SpendTracker gives you powerful expense tracking tools without the complexity of traditional finance apps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 flex flex-col items-start">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-5 text-xl shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
                How It Works
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Track Expenses in Seconds</h3>
              
              <div className="space-y-6">
                {[
                  { step: "1", text: "Start a chat with @SpendTrackerBot in Telegram" },
                  { step: "2", text: "Simply send messages like \"coffee $4.50\" or \"groceries $34.99\"" },
                  { step: "3", text: "Use commands like /report or /budget to manage your finances" },
                  { step: "4", text: "Receive insights about your spending habits and save money!" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-medium shadow-sm">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a
                  href="https://t.me/SpendTrackerBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Try It Now
                </a>
              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2">
              <div className="glass-card bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg transform rotate-1 max-w-md mx-auto">
                <div className="bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4">
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold">ST</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">SpendTracker Bot</div>
                      <div className="text-xs text-gray-500">Online</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg rounded-tr-none shadow-sm">
                      <strong className="text-gray-800 dark:text-gray-100">You:</strong> 
                      <div className="text-gray-700 dark:text-gray-300 mt-1">coffee $4.50</div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg rounded-tl-none shadow-sm">
                      <strong className="text-gray-800 dark:text-gray-100">SpendTracker:</strong>
                      <div className="text-gray-700 dark:text-gray-300 mt-1">
                        Added $4.50 for coffee to today's expenses.
                        <div className="text-sm text-gray-500 mt-1">Category: Food & Drink ☕</div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg rounded-tr-none shadow-sm">
                      <strong className="text-gray-800 dark:text-gray-100">You:</strong>
                      <div className="text-gray-700 dark:text-gray-300 mt-1">/report daily</div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg rounded-tl-none shadow-sm">
                      <strong className="text-gray-800 dark:text-gray-100">SpendTracker:</strong>
                      <div className="text-gray-700 dark:text-gray-300 mt-2">
                        <div className="font-medium">Today's spending: $24.50</div>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center">
                            <span className="w-24">Food & Drink:</span>
                            <div className="flex-grow bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                              <div className="bg-accent h-2 rounded-full" style={{width: '67%'}}></div>
                            </div>
                            <span>$16.50</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-24">Transport:</span>
                            <div className="flex-grow bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                              <div className="bg-accent-light h-2 rounded-full" style={{width: '33%'}}></div>
                            </div>
                            <span>$8.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
