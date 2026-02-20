
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:px-10 pb-12">
      <div 
        className="relative min-h-[550px] flex flex-col items-center justify-center p-8 rounded-2xl overflow-hidden text-center bg-cover bg-center group"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVT7IH55PmfNRl26XWcaDKgrGdRS0ntGAIQzjm6u00fOoOtaFhH8e00TpDKM1rnCXPu8weWcpvRgpPUc1_z-zoPHXz691NIV9QfMNRpLZu1HSUuRP8SDfv600flMpQl0z0Dzv1Dgiasqpm7HJzdWFedzhN5lPyO0k00ZbddvWuFDrNkb_LIG3mxi1DJpODrboo88K_Qd5rvDLFuav2nS5G5ofVRsIvW2l900MNOU2ulRs9aHUjHGAWtKo_cxjcKJhtVoE4gz_jsyZ7")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
        
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
            Nova Coleção 2024
          </span>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Essência e Elegância:<br />
            <span className="text-white">A Beleza Africana</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Descubra estilos autênticos, cuidados capilares especializados e a moda contemporânea que celebra nossas raízes e exalta nossa identidade.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-primary/30 transition-all transform hover:-translate-y-1">
              Ver Coleção
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/20 transition-all">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
