import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { useShopify } from './ShopifyProvider';

// Slideshow Data
const sneakPeekImages = [
  { url: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-58-39.jpg", title: "Crispy Fried Chicken" },
  { url: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-39-31.jpg", title: "Brussels Sprouts with Balsamic Oil" },
  { url: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-39-36.jpg", title: "Another Crispy Coconut Shrimp Recipe" },
  { url: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-39-40.jpg", title: "Almond Flour Battered 'n Crisped Onion Rings" }
];

const Features: React.FC = () => {
  const { openCheckout } = useShopify();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sneakPeekImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sneakPeekImages.length) % sneakPeekImages.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white scroll-mt-24" id="whats-inside">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* IS THIS FOR YOU? Section */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-brand-dark mb-10">
                Is This For You?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={20} /></div>
                        <span className="text-lg text-gray-700 font-medium">You want fast crispy meals in <span className="font-bold">under 15 minutes</span>.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={20} /></div>
                        <span className="text-lg text-gray-700 font-medium">You're tired of soggy fries and dry chicken.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={20} /></div>
                        <span className="text-lg text-gray-700 font-medium">You want proven times & temps (no more guessing).</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={20} /></div>
                        <span className="text-lg text-gray-700 font-medium">You want to stop wasting money on takeout.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={20} /></div>
                        <span className="text-lg text-gray-700 font-medium">You want healthy meals that actually taste amazing.</span>
                    </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <img src="https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-44-28.jpg" alt="Happy cooking" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* VISUAL PROOF / SNEAK PEEK */}
        <div className="mb-24 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
                Peek Inside The Cookbook
            </h2>
            <p className="text-gray-600 mb-8">See exactly what you're getting. Clear instructions, nutritional info, and mouth-watering photos.</p>
            
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-gray-100 group">
                <img 
                    src={sneakPeekImages[currentSlide].url} 
                    alt="Recipe Preview" 
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white font-bold backdrop-blur-sm">
                    {sneakPeekImages[currentSlide].title}
                </div>
                
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <ChevronLeft className="text-brand-dark" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <ChevronRight className="text-brand-dark" />
                </button>
            </div>
        </div>

        {/* BONUSES SECTION - MANDATORY */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden" id="bonuses">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="text-center mb-10 relative z-10">
                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Free Gifts Included</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">
                    What You Get Today <br/>
                    <span className="text-gray-400 text-2xl">(Total Value: $74)</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {/* Bonus 1 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-brand-orange w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white">
                        <Gift size={20} />
                    </div>
                    <div className="text-brand-orange font-bold text-sm mb-1 uppercase">Bonus #1</div>
                    <h3 className="font-bold text-xl mb-2">30-Day Meal Plan</h3>
                    <p className="text-gray-300 text-sm mb-4">A complete month of dinners planned for you. Save time and reduce waste.</p>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold">Value $20</span>
                </div>

                {/* Bonus 2 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-brand-orange w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white">
                        <Gift size={20} />
                    </div>
                    <div className="text-brand-orange font-bold text-sm mb-1 uppercase">Bonus #2</div>
                    <h3 className="font-bold text-xl mb-2">Shopping & Essentials List</h3>
                    <p className="text-gray-300 text-sm mb-4">The exact grocery list you need to stock your pantry for air fryer success.</p>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold">Value $15</span>
                </div>

                {/* Bonus 3 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-brand-orange w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white">
                        <Gift size={20} />
                    </div>
                    <div className="text-brand-orange font-bold text-sm mb-1 uppercase">Bonus #3</div>
                    <h3 className="font-bold text-xl mb-2">10 Mistakes to Avoid</h3>
                    <p className="text-gray-300 text-sm mb-4">Stop drying out your food. Learn the secrets to perfect texture every time.</p>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold">Value $10</span>
                </div>
            </div>

            <div className="mt-12 text-center relative z-10">
                <button 
                    onClick={openCheckout}
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                    Get Instant Access — $9.99
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;