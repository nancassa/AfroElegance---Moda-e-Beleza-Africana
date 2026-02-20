
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:px-10 py-20">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBANhL-nATjxmWBm76EaUHoxsGJbpeejyrjjJqCUNjnLFL-MlrggVoigE5mjkJFjgpS0rrCXxq4_RqmftrnJzj1bh9lilD-2QnQwl-FB0sXAvbryd9AGWkym7_wfV104ortHSwx_n16nIQcxUh301wNGguyIi7kWDqppvMmCtCe95L_-9U0M4OQF84XBtEZwfdT5Fbdi5pKUQVnvjZFG8ZJfCU3q7fJcCFfdi59SnHjmrFa46mLfRcYE6KEe-PPSxePbPm4eY5PB6TE")' }}
        />
        
        {/* Content */}
        <div className="relative bg-gradient-to-r from-primary/95 to-surface-dark/95 p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Participe da Nossa Comunidade
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Inscreva-se para receber novidades exclusivas, dicas de estilo e ganhe 
              <span className="font-bold text-white bg-black/30 px-3 py-1 mx-2 rounded-lg">10% OFF</span> 
              na sua primeira compra.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-xl px-5 py-4 focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all outline-none backdrop-blur-md"
              />
              <button 
                type="submit"
                className="bg-white text-primary font-extrabold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? 'Inscrito!' : 'Inscrever'}
              </button>
            </form>
            <p className="text-xs text-white/50 mt-4 text-center sm:text-left">
              Respeitamos sua privacidade. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
