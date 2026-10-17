import React from 'react';
import { BookOpen, MessageSquare, Briefcase, Scale, Check, Award } from 'lucide-react';
import { Level } from '../types';

interface LevelSelectorProps {
  currentLevel: Level;
  onSelectLevel: (lvl: Level) => void;
  vocabCounts: Record<Level, number>;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  currentLevel,
  onSelectLevel,
  vocabCounts
}) => {
  const levels = [
    {
      id: 'A1' as Level,
      title: 'مستوى A1 (تأسيس المبتدئين)',
      desc: 'يشمل الحروف، التحيات، أدوات التعريف الأساسية، والكلمات الأكثر استخداماً في الحياة اليومية والأسرة.',
      icon: BookOpen,
      accent: 'amber',
      tag: 'تأسيس شامل',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30'
    },
    {
      id: 'A2' as Level,
      title: 'مستوى A2 (التواصل الفعال)',
      desc: 'تكوين الجمل المركبة، التحدث عن مواقف التسوق، محطة القطار، السفر، وحروف الجر وزمن الماضي Perfekt.',
      icon: MessageSquare,
      accent: 'blue',
      tag: 'متوسط أول',
      badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    },
    {
      id: 'B1' as Level,
      title: 'مستوى B1 (لغة الأعمال والمحادثة)',
      desc: 'القواعد المتقدمة، صياغة العقود، مقابلات العمل، المبني للمجهول Passiv، وصيغة التمني Konjunktiv II.',
      icon: Briefcase,
      accent: 'emerald',
      tag: 'مهني وعملي',
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
    },
    {
      id: 'B2' as Level,
      title: 'مستوى B2 (الترجمة الاحترافية)',
      desc: 'المصطلحات القانونية، التوثيق الرسمي، صياغة المذكرات، وتراكيب الأفعال الوظيفية للترجمة التحريرية والفورية.',
      icon: Scale,
      accent: 'purple',
      tag: 'ترجمة احترافية',
      badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30'
    },
    {
      id: 'C1' as Level,
      title: 'مستوى C1 (الطلاقة الأكاديمية والبحثية)',
      desc: 'الأسلوب الاسمي Nominalstil، الصفات المشتقة، التعبيرات الاصطلاحية الرفيعة، والمصطلحات العلمية والبحثية Fachsprache.',
      icon: Award,
      accent: 'rose',
      tag: 'طلاقة متقدمة',
      badgeColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30'
    }
  ];

  return (
    <section id="levels" className="px-4 sm:px-6 py-16 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 bg-amber-400 rounded-full" />
          <div>
            <h3 className="text-2xl font-black text-white">المستويات الدراسية المعتمدة (A1 - C1)</h3>
            <p className="text-xs text-slate-400 mt-0.5">اختر مستواك لتحديث البطاقات، القواعد، وقسم الواجبات التفاعلية</p>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl self-start sm:self-auto">
          المستوى المختار حالياً: <span className="font-bold text-amber-400">{currentLevel}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {levels.map((lvl) => {
          const Icon = lvl.icon;
          const isActive = currentLevel === lvl.id;

          return (
            <div
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'card-theme-accent border-2 border-amber-400 shadow-xl shadow-amber-400/15 scale-[1.02]'
                  : 'card-theme border border-slate-800/80 hover:border-amber-400/40 hover:scale-[1.01]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl transition-colors ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-md">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>مفعل حالياً</span>
                    </span>
                  ) : (
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${lvl.badgeColor}`}>
                      {lvl.tag}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {lvl.title}
                </h4>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {lvl.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>المفردات التفاعلية:</span>
                <span className="font-mono font-bold text-white">
                  {vocabCounts[lvl.id] || 0} كلمة
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
