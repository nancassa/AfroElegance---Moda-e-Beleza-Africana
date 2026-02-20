
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  // Organize items into columns for a masonry-like grid
  const columns = [
    [GALLERY_ITEMS[0], GALLERY_ITEMS[1]],
    [GALLERY_ITEMS[2], GALLERY_ITEMS[3]],
    [GALLERY_ITEMS[4], GALLERY_ITEMS[5]],
    [GALLERY_ITEMS[6], GALLERY_ITEMS[7]],
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:px-10 py-16">
      <div className="flex justify-between items-end mb-10 pb-6 border-b border-border-brown">
        <h2 className="text-3xl font-bold">Galeria de Inspiração</h2>
        <a href="#" className="text-primary hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
          Ver tudo 
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map((item) => (
              <div 
                key={item.id} 
                className={`relative overflow-hidden rounded-xl bg-surface-dark group cursor-zoom-in shadow-lg ${
                  item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
