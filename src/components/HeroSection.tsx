import React from 'react';
import { GraduationCap, Sparkles, BookOpen, CheckCircle, Award } from 'lucide-react';
import { Level } from '../types';
import { DeutschLernenHeroBanner } from './DeutschLernenHeroBanner';

interface HeroSectionProps {
  currentLevel: Level;
  onSelectLevel: (lvl: Level) => void;
  onNavigate: (sectionId: string) => void;
  speechRate?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLevel,
  onNavigate,
  speechRate = 0.85
}) => {
  return (
    <section id="welcome" className="relative px-4 sm:px-6 pt-8 pb-16 max-w-6xl mx-auto text-center border-b border-slate-800/80 overflow-hidden">
      {/* Visual Centerpiece: Exact "DEUTSCH LERNEN" Artwork & Interactive Federal States Map */}
      <DeutschLernenHeroBanner
        onStartLearning={() => onNavigate('levels')}
        speechRate={speechRate}
      />

      {/* Value Proposition Description */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          طريقك المنهجي الشامل من <span className="text-amber-400">A1 إلى C1</span>
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          تجمع المنصة بين التأسيس الصوتي والنحوي الدقيق، البطاقات ثلاثية الأبعاد، مختبر صياغة الجمل، وقاموس أهم 2000 كلمة ألمانية معتمدة من معاهد Goethe و Telc.
        </p>
      </div>

      {/* Core Academic Strip - 5 Levels A1 to C1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 pt-8 border-t border-slate-800/80 text-right">
        <div className="card-theme p-5 sm:p-6 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2.5 text-amber-400 mb-1">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white">5 مستويات معتمدة</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">من المبتدئ A1 حتى الطلاقة والبحث العلمي الأكاديمي C1</p>
        </div>

        <div className="card-theme p-5 sm:p-6 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2.5 text-amber-400 mb-1">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white">نطق صوتي فوري</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">محرك نطق تفاعلي لكافة الكلمات، الجمل، والأرقام الألمانية</p>
        </div>

        <div className="card-theme p-5 sm:p-6 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2.5 text-amber-400 mb-1">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white">استوديو القواعد والجمل</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">محلل نهايات الأدوات، تراكيب الجمل، والحالات الإعرابية الأربع</p>
        </div>

        <div className="card-theme p-5 sm:p-6 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2.5 text-amber-400 mb-1">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-white">واجبات ذكية وتحفيز فوري</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">تشجيع صوتي ألماني فوري (Gut! / Du machst das gut!)</p>
        </div>
      </div>
    </section>
  );
};
