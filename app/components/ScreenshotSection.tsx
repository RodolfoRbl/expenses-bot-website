"use client";

import { useState } from "react";

const screenshots = [
  {
    title: "Easy expense entry",
    description: "Simply type what you spent and the amount",
    imagePlaceholder: "expense-entry-screenshot"
  },
  {
    title: "Summaries",
    description: "Get clear breakdowns of your spending across different time periods",
    imagePlaceholder: "summaries-screenshot"
  },
  {
    title: "Monthly reports",
    description: "Visualized data helps you understand spending patterns",
    imagePlaceholder: "monthly-report-screenshot"
  },
  {
    title: "Budget management",
    description: "Set and track budgets for different categories",
    imagePlaceholder: "budget-screenshot"
  }
];

export default function ScreenshotSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="screenshots" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Fundu <span className="text-accent">In Action</span>
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            Our simple interface makes expense tracking a breeze, right within your Telegram app.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Large screenshot display */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="bg-[#1C2733] rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-full"></div>
              <div className="mx-auto max-w-[280px] border-8 border-[#1C2733] rounded-3xl overflow-hidden shadow-2xl">
                {/* This would be replaced with actual screenshots */}
                <div className="aspect-[9/19] bg-[#242F3D] relative">
                  {/* Telegram-style interface mockup */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="bg-[#2B5278] p-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                      <div className="ml-3">
                        <div className="text-white text-sm font-medium">Fundu Bot</div>
                        <div className="text-gray-300 text-xs">Active now</div>
                      </div>
                    </div>
                    <div className="flex-grow p-3 space-y-3 overflow-y-auto">
                      {activeIndex === 0 && (
                        <>
                          <div className="bg-[#2B5278] text-white p-2 rounded-lg rounded-bl-none max-w-[80%] ml-auto">
                            4 pizza
                          </div>
                          <div className="bg-[#182533] text-white p-2 rounded-lg rounded-tl-none max-w-[80%]">
                            ✅ Logged: $4.00 in 🍔 Food
                          </div>
                        </>
                      )}
                      {activeIndex === 1 && (
                        <>
                          <div className="bg-[#2B5278] text-white p-2 rounded-lg rounded-bl-none max-w-[80%] ml-auto">
                            /stats
                          </div>
                          <div className="bg-[#182533] text-white p-2 rounded-lg rounded-tl-none max-w-[100%]">
                            <div className="font-medium mb-1">📊 Stats for This Week:</div>
                            <div>➖ Expenses</div>
                            <div>2025-04-28 ■■■■■■■■■■ $4.00</div>
                            <div>Total Expenses: $4.00 (1)</div>
                            <div>Total Income: $0.00 (0)</div>
                            <div>Total Net: -$4.00</div>
                          </div>
                        </>
                      )}
                      {activeIndex === 2 && (
                        <>
                          <div className="bg-[#2B5278] text-white p-2 rounded-lg rounded-bl-none max-w-[80%] ml-auto">
                            /report month
                          </div>
                          <div className="bg-[#182533] text-white p-2 rounded-lg rounded-tl-none max-w-[100%]">
                            <div className="font-medium mb-1">Monthly Report</div>
                            <div>Total: $482.75</div>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center">
                                <div className="w-24">Food (35%)</div>
                                <div className="flex-1 bg-gray-600 rounded-full h-2">
                                  <div className="bg-blue-400 rounded-full h-2 w-[35%]"></div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24">Transport (20%)</div>
                                <div className="flex-1 bg-gray-600 rounded-full h-2">
                                  <div className="bg-green-400 rounded-full h-2 w-[20%]"></div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24">Shopping (30%)</div>
                                <div className="flex-1 bg-gray-600 rounded-full h-2">
                                  <div className="bg-yellow-400 rounded-full h-2 w-[30%]"></div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24">Other (15%)</div>
                                <div className="flex-1 bg-gray-600 rounded-full h-2">
                                  <div className="bg-red-400 rounded-full h-2 w-[15%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {activeIndex === 3 && (
                        <>
                          <div className="bg-[#2B5278] text-white p-2 rounded-lg rounded-bl-none max-w-[80%] ml-auto">
                            /budget set food $300
                          </div>
                          <div className="bg-[#182533] text-white p-2 rounded-lg rounded-tl-none max-w-[80%]">
                            Budget for Food & Drink set to $300 per month.
                          </div>
                          <div className="bg-[#2B5278] text-white p-2 rounded-lg rounded-bl-none max-w-[80%] ml-auto">
                            /budget status
                          </div>
                          <div className="bg-[#182533] text-white p-2 rounded-lg rounded-tl-none max-w-[80%]">
                            <div className="font-medium mb-1">Budget Status</div>
                            <div className="mb-2">10 days remaining this month</div>
                            <div className="flex items-center">
                              <div className="w-16">Food:</div>
                              <div className="flex-1 bg-gray-600 rounded-full h-2 mr-2">
                                <div className="bg-yellow-400 rounded-full h-2 w-[56%]"></div>
                              </div>
                              <div className="text-sm">$168/$300</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="bg-[#242F3D] p-3 flex items-center">
                      <div className="bg-gray-700 rounded-full flex-grow h-10"></div>
                      <div className="w-10 h-10 flex items-center justify-center ml-2 rounded-full bg-[#2B5278] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Thumbnails and description */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="space-y-8">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer p-4 rounded-lg transition-all ${activeIndex === index ? 'bg-blue-500/10 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                  <p className="text-secondary-dark">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
