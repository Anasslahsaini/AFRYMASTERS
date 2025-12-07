import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Verified Buyer",
    content: "Y'all, this book is a lifesaver. I was about to throw my air fryer out the window because everything came out dry. This book fixed it instantly. The wings recipe? Game changer.",
    rating: 5,
    image: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/lh6eHwoKB_mid.jpg"
  },
  {
    id: 2,
    name: "Mike D.",
    role: "Home Cook",
    content: "Best $10 I've spent in a long time. The recipes are super simple, no weird ingredients I can't find at Walmart. My kids actually eat the veggies now. Highly recommend.",
    rating: 5,
    image: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-49-35.jpg"
  },
  {
    id: 3,
    name: "Jessica P.",
    role: "Busy Mom",
    content: "Total no-brainer. I use this thing every single night. The cheat sheets alone are worth the money. If you have an air fryer, you need this.",
    rating: 5,
    image: "https://raw.githubusercontent.com/Anasslahsaini/frmasters/refs/heads/main/photo_2025-12-07_21-52-49.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-orange-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">WHAT FOLKS ARE SAYING</h2>
          <p className="text-gray-600 text-lg">Real reviews from real American kitchens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg border border-orange-100 flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl overflow-hidden group">
              
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                    src={review.image} 
                    alt="Cooked meal" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
                        ))}
                    </div>
                    <h4 className="font-bold text-lg shadow-black drop-shadow-md">
                        {review.id === 1 ? "Game Changer" : review.id === 2 ? "Best $10 Spent" : "Total No-Brainer"}
                    </h4>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                <Quote size={32} className="text-brand-orange/20 absolute top-6 right-6" />
                <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed text-sm md:text-base">"{review.content}"</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                        <p className="text-xs text-brand-orange font-medium uppercase tracking-wide">{review.role}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;