
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-surface-dark py-20 mt-12">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold tracking-widest uppercase block">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold">O que dizem nossas clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-background-dark p-8 rounded-2xl border border-border-brown relative hover:border-primary/30 transition-all group">
              <div className="absolute -top-5 left-8 bg-primary rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-[24px]">format_quote</span>
              </div>
              
              <div className="flex gap-1 text-primary mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-symbols-outlined text-[18px] ${i < Math.floor(t.rating) ? 'fill-current' : ''}`}>
                    {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                {t.text}
              </p>

              <div className="flex items-center gap-4 border-t border-border-brown pt-6">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-accent-gold text-xs">{t.location}</p>
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
