import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import { ShopifyProvider, useShopify } from './components/ShopifyProvider';
import { Download, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

const MainContent = () => {
  const { openCheckout } = useShopify();

  return (
    <main className="flex-grow">
      <Hero />
      
      {/* 
        Features includes: 
        1. Is This For You?
        2. Visual Sneak Peek
        3. Bonuses
      */}
      <Features />

      <Testimonials />
      <Faq />
      
      {/* Final CTA - The Offer Close */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden pb-32 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-brand-orange/10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Don't Miss Out.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get the complete 600-recipe cookbook + all 3 bonuses instantly. <br/>
              <span className="text-brand-orange font-bold">The price goes back to $74 soon.</span>
            </p>
            
            <div className="bg-white text-brand-dark p-8 rounded-3xl shadow-2xl max-w-md mx-auto transform transition-transform hover:scale-105 border-4 border-brand-orange">
              <div className="text-center mb-6">
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-1">Total Value: $74</p>
                <div className="flex justify-center items-baseline gap-3">
                    <span className="text-gray-400 line-through text-2xl font-bold">$74</span>
                    <span className="text-6xl font-display font-bold text-brand-orange">$27</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-left text-sm font-medium text-gray-600 px-4">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> 600+ Tested Recipes</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> 30-Day Meal Plan (Bonus)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Shopping Essentials List (Bonus)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> 10 Mistakes Guide (Bonus)</div>
              </div>

              <button 
                onClick={openCheckout}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-2 mb-4 group"
              >
                <span>Get Instant Access — $27</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex justify-center items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={14} className="text-green-500" />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>
        </div>
      </section>
      
      <StickyMobileCta />
    </main>
  );
};

function App() {
  return (
    <ShopifyProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </ShopifyProvider>
  );
}

export default App;
