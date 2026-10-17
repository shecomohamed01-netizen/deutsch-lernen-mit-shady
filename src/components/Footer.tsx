import React from 'react';
import { ArrowUp, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-slate-800 bg-[#090d16] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-600 to-slate-900 flex items-center justify-center font-black text-white text-xs shadow-md">
            DE
          </div>
          <div>
            <h4 className="font-bold text-white text-sm font-mono">
              DEUTSCH LERNEN | دويتش ليرنن
            </h4>
            <p className="text-[11px] text-amber-400 font-mono mt-0.5">
              One nation, one people, one future © 2026
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 font-medium">
          <button onClick={() => onNavigate('welcome')} className="hover:text-amber-400 transition-colors">
            البداية
          </button>
          <button onClick={() => onNavigate('levels')} className="hover:text-amber-400 transition-colors">
            المستويات
          </button>
          <button onClick={() => onNavigate('vocab')} className="hover:text-amber-400 transition-colors">
            البطاقات والمفردات
          </button>
          <button onClick={() => onNavigate('grammar')} className="hover:text-amber-400 transition-colors">
            استوديو القواعد
          </button>
          <button onClick={() => onNavigate('homework')} className="hover:text-amber-400 transition-colors">
            الواجبات اليومية
          </button>
          <button onClick={() => onNavigate('dictionary')} className="hover:text-amber-400 transition-colors">
            القاموس
          </button>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
          title="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
