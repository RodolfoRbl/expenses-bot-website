import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background elements/decorations */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-accent/5 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full bg-accent-lighter/10 filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
        <div className="absolute top-0 left-[20%] w-2 h-2 bg-accent rounded-full"></div>
        <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-accent-light rounded-full"></div>
        <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-accent-lighter rounded-full"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left md:pr-10 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Simple finance tracking for everyone
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Track Expenses
              <span className="gradient-text block mt-2">Right in Telegram</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              SpendTracker makes managing your daily expenses as simple as sending a message. No apps to install, no complex setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://t.me/SpendTrackerBot"
                target="_blank"
                rel="noopener noreferrer"
                className="button text-lg px-8 py-3 glow-blue"
              >
                Get Started Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <Link
                href="#features"
                className="button-secondary text-lg px-8 py-3 flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500 flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              No registration required • Works right in Telegram
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[450px] md:h-[500px]">
              {/* Modern phone mockup with glass effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] h-[560px] md:h-[620px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-3 shadow-xl rotate-2 z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                <div className="w-full h-full bg-gradient-to-tr from-accent-dark to-accent rounded-[32px] overflow-hidden">
                  {/* Telegram-style interface */}
                  <div className="h-full flex flex-col">
                    {/* App header */}
                    <div className="bg-accent p-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        ST
                      </div>
                      <div className="ml-3">
                        <div className="text-white font-medium">SpendTracker Bot</div>
                        <div className="text-blue-100 text-xs">Online</div>
                      </div>
                    </div>
                    
                    {/* Chat content */}
                    <div className="flex-grow bg-[#F0F2F5] p-4 overflow-hidden">
                      {/* Chat bubbles */}
                      <div className="flex flex-col space-y-4">
                        {/* User message */}
                        <div className="self-end max-w-[80%]">
                          <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm">
                            coffee $4.50
                          </div>
                        </div>
                        
                        {/* Bot response */}
                        <div className="self-start max-w-[80%]">
                          <div className="bg-accent/10 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm">
                            <div className="font-medium">Added to expenses:</div>
                            <div className="mt-1 flex justify-between">
                              <span>Coffee</span>
                              <span className="font-medium">$4.50</span>
                            </div>
                            <div className="mt-2 text-xs text-gray-500">Category: Food & Drink</div>
                          </div>
                        </div>
                        
                        {/* User message */}
                        <div className="self-end max-w-[80%]">
                          <div className="bg-white rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm">
                            /report today
                          </div>
                        </div>
                        
                        {/* Bot response with chart */}
                        <div className="self-start max-w-[80%] w-full">
                          <div className="bg-accent/10 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                            <div className="font-medium">Today's Spending</div>
                            <div className="text-xl font-bold mt-1">$47.25</div>
                            
                            {/* Mini chart */}
                            <div className="mt-3 space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Food</span>
                                  <span className="font-medium">$22.50</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-accent h-2 rounded-full" style={{width: '48%'}}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Transport</span>
                                  <span className="font-medium">$15.75</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-accent-lighter h-2 rounded-full" style={{width: '33%'}}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Other</span>
                                  <span className="font-medium">$9.00</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-blue-300 h-2 rounded-full" style={{width: '19%'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Input field */}
                    <div className="bg-white p-3 flex items-center">
                      <div className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                        Type a message...
                      </div>
                      <div className="ml-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-[15%] right-[15%] md:right-[25%] w-32 h-32 bg-white rounded-2xl p-4 shadow-lg rotate-6 z-0">
                <div className="text-xs text-gray-500 mb-1">Total Saved</div>
                <div className="text-lg font-bold text-gray-900">$842.50</div>
                <div className="mt-2 text-xs flex items-center text-green-600">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L12 10.586V7z" clipRule="evenodd"></path>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 001 1V5z" clipRule="evenodd"></path>
                  </svg>
                  24% this month
                </div>
              </div>
              
              <div className="absolute bottom-[15%] left-[15%] md:left-[25%] w-36 h-24 glass-card p-3 -rotate-6 z-0">
                <div className="text-xs text-gray-500 mb-2">Latest Expense</div>
                <div className="flex justify-between">
                  <span>Coffee</span>
                  <span className="font-medium">$4.50</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Today, 9:45 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
