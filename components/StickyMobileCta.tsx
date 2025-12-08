import React, { useState, useEffect } from 'react';
import { useShopify } from './ShopifyProvider';
import { Download } from 'lucide-react';

const StickyMobileCta: React.FC = () => {
  const { openCheckout } = useShopify();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] p-4 md:hidden animate-[slideUp_0.3s_ease-out] pb-safe">
      <div className="flex justify-between items-center gap-4 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Today Only</span>
          <div className="flex items-baseline gap-2">
            <span className="text-brand-orange font-display font-bold text-3xl">$27</span>
            <span className="text-gray-400 line-through text-sm font-medium">$80.99</span>
          </div>
        </div>
        <button 
          onClick={openCheckout}
          className="flex-1 bg-brand-orange hover:bg-orange-600 active:bg-orange-700 text-white py-3 px-4 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 animate-pulse"
        >
          <span>GET ACCESS</span>
          <Download size={18} />
        </button>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 16px);
        }
      `}</style>
    </div>
  );
};


export default StickyMobileCta;

