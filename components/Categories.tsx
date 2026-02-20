
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:px-10 py-16">
      <div className="border-l-4 border-primary pl-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossas Categorias</h2>
        <p className="text-gray-400 text-lg">Explore o melhor da moda, acessórios e beleza inspirada na cultura africana.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-xl">
              <img 
                src={cat.imageUrl} 
                alt={cat.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
            <p className="text-accent-gold text-sm mt-1 leading-relaxed">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
