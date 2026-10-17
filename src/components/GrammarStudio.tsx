import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Check, 
  HelpCircle, 
  Volume2, 
  Sparkles, 
  Layers, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { GrammarRule, VerbConjugation, Level } from '../types';
import { VERB_CONJUGATIONS } from '../data/curriculum';
import { playGermanAudio } from '../utils/speech';

interface GrammarStudioProps {
  rules: GrammarRule[];
  currentLevel: Level;
  speechRate: number;
}

export const GrammarStudio: React.FC<GrammarStudioProps> = ({
  rules,
  currentLevel,
  speechRate
}) => {
  const [activeTab, setActiveTab] = useState<'rules' | 'inspector' | 'cases' | 'verbs'>('inspector');
  const [selectedEnding, setSelectedEnding] = useState<string>('-ung');
  const [customEnding, setCustomEnding] = useState<string>('');
  const [selectedVerb, setSelectedVerb] = useState<VerbConjugation>(VERB_CONJUGATIONS[0]);

  // Suffix rules database
  const suffixRules: Record<string, { gender: 'der' | 'die' | 'das'; title: string; certainty: string; examples: { ger: string; arb: string }[]; ruleDesc: string }> = {
    '-ung': {
      gender: 'die',
      title: 'مؤنث حتمي (Die)',
      certainty: '100% قاعدة مطلقة',
      examples: [
        { ger: 'Die Zeitung', arb: 'الجريدة' },
        { ger: 'Die Wohnung', arb: 'الشقة' },
        { ger: 'Die Rechnung', arb: 'الفاتورة' }
      ],
      ruleDesc: 'كل كلمة تشتق من فعل بإضافة -ung هي مؤنثة دائماً بدون استثناء.'
    },
    '-heit': {
      gender: 'die',
      title: 'مؤنث حتمي (Die)',
      certainty: '100% قاعدة مطلقة',
      examples: [
        { ger: 'Die Freiheit', arb: 'الحرية' },
        { ger: 'Die Gesundheit', arb: 'الصحة' },
        { ger: 'Die Sicherheit', arb: 'الأمان' }
      ],
      ruleDesc: 'نهاية تعبر عن المفاهيم المجردة والصفات المحولة لأسماء.'
    },
    '-keit': {
      gender: 'die',
      title: 'مؤنث حتمي (Die)',
      certainty: '100% قاعدة مطلقة',
      examples: [
        { ger: 'Die Möglichkeit', arb: 'الإمكانية' },
        { ger: 'Die Pünktlichkeit', arb: 'الدقة في المواعيد' },
        { ger: 'Die Einsamkeit', arb: 'الوحدة' }
      ],
      ruleDesc: 'نهاية لأسماء تدل على سمات نوعية أو إمكانية.'
    },
    '-tion': {
      gender: 'die',
      title: 'مؤنث حتمي (Die)',
      certainty: '100% للكلمات الدخيلة',
      examples: [
        { ger: 'Die Information', arb: 'المعلومة' },
        { ger: 'Die Station', arb: 'المحطة' },
        { ger: 'Die Situation', arb: 'الموقف' }
      ],
      ruleDesc: 'الأسماء ذات الأصل اللاتيني المنتهية بـ -tion تكون مؤنثة دائماً.'
    },
    '-chen': {
      gender: 'das',
      title: 'محايد حتمي (Das)',
      certainty: '100% صيغة تصغير',
      examples: [
        { ger: 'Das Mädchen', arb: 'الفتاة' },
        { ger: 'Das Brötchen', arb: 'خبز الصمّون الصغير' },
        { ger: 'Das Häuschen', arb: 'المنزل الصغير' }
      ],
      ruleDesc: 'صيغة التصغير الألمانية Verkleinerungsform، تجعل أي اسم محايداً مهما كان أصله.'
    },
    '-ment': {
      gender: 'das',
      title: 'محايد (Das)',
      certainty: '98% لمعظم الكلمات',
      examples: [
        { ger: 'Das Dokument', arb: 'الوثيقة / المستند' },
        { ger: 'Das Instrument', arb: 'الآلة / الأداة' },
        { ger: 'Das Experiment', arb: 'التجربة العلمية' }
      ],
      ruleDesc: 'أسماء محايدة مشتقة من أصول لاتينية وفرنسية.'
    },
    '-or': {
      gender: 'der',
      title: 'مذكر (Der)',
      certainty: '99% للأسماء الدخيلة والمهن',
      examples: [
        { ger: 'Der Motor', arb: 'المحرك' },
        { ger: 'Der Professor', arb: 'البروفيسور' },
        { ger: 'Der Reaktor', arb: 'المفاعل' }
      ],
      ruleDesc: 'أسماء مذكر للأشخاص والآلات ذات الأصل اللاتيني.'
    },
    '-ismus': {
      gender: 'der',
      title: 'مذكر حتمي (Der)',
      certainty: '100% للمذاهب والمصطلحات',
      examples: [
        { ger: 'Der Optimismus', arb: 'التفاؤل' },
        { ger: 'Der Tourismus', arb: 'السياحة' },
        { ger: 'Der Realismus', arb: 'الواقعية' }
      ],
      ruleDesc: 'المذاهب الفكرية والسياسية والنظريات تكون مذكرة دائماً.'
    },
    '-ling': {
      gender: 'der',
      title: 'مذكر (Der)',
      certainty: '100% قاعدة ثابتة',
      examples: [
        { ger: 'Der Frühling', arb: 'فصل الربيع' },
        { ger: 'Der Lehrling', arb: 'المتدرب المهني' },
        { ger: 'Der Schmetterling', arb: 'الفراشة' }
      ],
      ruleDesc: 'الأسماء المنتهية بـ -ling تدل غالباً على فئات أو أوقات وهي مذكرة دائماً.'
    }
  };

  const currentInspectorRule = suffixRules[selectedEnding] || suffixRules['-ung'];

  const handleAudio = (text: string) => {
    playGermanAudio(text, speechRate);
  };

  return (
    <section id="grammar" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto w-full">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Grammatik-Studio</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            استوديو القواعد التفاعلي للألمانية
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            كاشف نهايات أدوات التعريف، جدول تصريف الحالات الإعرابية، ومحرك تصريف الأفعال.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto">
          <button
            onClick={() => setActiveTab('inspector')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'inspector'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>كاشف نهايات الأدوات</span>
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'cases'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>جدول الإعراب (Kasus)</span>
          </button>
          <button
            onClick={() => setActiveTab('verbs')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'verbs'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>تصريف الأفعال</span>
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'rules'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>شرح دروس المستوى</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Suffix Inspector */}
      {activeTab === 'inspector' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-black text-white flex items-center gap-2">
                  <span>أسرار نهايات الأسماء لتحديد الأداة (Der / Die / Das)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  اختر إحدى النهايات السحرية لتكتشف الأداة المطابقة وقاعدتها الذهبية فوراً:
                </p>
              </div>

              {/* Quick Endings Grid */}
              <div className="flex flex-wrap items-center gap-2">
                {Object.keys(suffixRules).map((ending) => (
                  <button
                    key={ending}
                    onClick={() => setSelectedEnding(ending)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition ${
                      selectedEnding === ending
                        ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                        : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {ending}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Inspector Result Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm sm:text-base font-black px-4 py-1.5 rounded-xl border uppercase tracking-wider ${
                      currentInspectorRule.gender === 'die'
                        ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                        : currentInspectorRule.gender === 'der'
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    }`}
                  >
                    الأداة: {currentInspectorRule.gender.toUpperCase()}
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-base">
                      النهاية: <span className="font-mono text-amber-400 font-black">{selectedEnding}</span>
                    </h5>
                    <span className="text-xs text-slate-400">{currentInspectorRule.title}</span>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 self-start sm:self-auto">
                  {currentInspectorRule.certainty}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {currentInspectorRule.ruleDesc}
              </p>

              {/* Examples */}
              <div>
                <h6 className="text-xs font-bold text-slate-400 mb-3 font-sans">أمثلة تطبيقية مع النطق:</h6>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentInspectorRule.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleAudio(ex.ger)}
                      className="p-3.5 rounded-xl bg-[#090e1c] border border-slate-800 hover:border-amber-400/50 cursor-pointer transition flex items-center justify-between group shadow-sm"
                    >
                      <div className="space-y-0.5">
                        <div dir="ltr" className="font-mono font-bold text-white text-sm group-hover:text-amber-300 transition-colors text-left">
                          {ex.ger}
                        </div>
                        <div dir="rtl" className="text-xs text-slate-400 font-sans text-right">
                          {ex.arb}
                        </div>
                      </div>
                      <Volume2 className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 mr-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Cases Matrix (جدول الإعراب) */}
      {activeTab === 'cases' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h4 className="text-lg font-black text-white">
                جدول تحولات أدوات التعريف والتنكير عبر الحالات الإعرابية الأربع
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                لاحظ كيف يتغير المذكر وحده في الأكوزاتيف، وكيف تتحول كل الأدوات في الداتيف
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-bold">الحالة الإعرابية (Kasus)</th>
                  <th className="py-3 px-4 font-bold text-blue-400">المذكر (Maskulin)</th>
                  <th className="py-3 px-4 font-bold text-rose-400">المؤنث (Feminin)</th>
                  <th className="py-3 px-4 font-bold text-emerald-400">المحايد (Neutrum)</th>
                  <th className="py-3 px-4 font-bold text-amber-400">الجمع (Plural)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-4 font-sans font-bold text-white">
                    الرفع (Nominativ) - الفاعل
                  </td>
                  <td className="py-4 px-4 text-blue-300 font-bold">der / ein</td>
                  <td className="py-4 px-4 text-rose-300 font-bold">die / eine</td>
                  <td className="py-4 px-4 text-emerald-300 font-bold">das / ein</td>
                  <td className="py-4 px-4 text-amber-300 font-bold">die / keine</td>
                </tr>

                <tr className="hover:bg-slate-800/40 transition bg-amber-400/5">
                  <td className="py-4 px-4 font-sans font-bold text-white">
                    النصب (Akkusativ) - المفعول به المباشر
                  </td>
                  <td className="py-4 px-4 text-rose-400 font-black underline decoration-rose-500/60">
                    den / einen <span className="text-[10px] text-rose-400 font-sans block">(تغيير وحيد!)</span>
                  </td>
                  <td className="py-4 px-4 text-rose-300 font-bold">die / eine</td>
                  <td className="py-4 px-4 text-emerald-300 font-bold">das / ein</td>
                  <td className="py-4 px-4 text-amber-300 font-bold">die / keine</td>
                </tr>

                <tr className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-4 font-sans font-bold text-white">
                    الجر (Dativ) - المجرور / غير المباشر
                  </td>
                  <td className="py-4 px-4 text-blue-300 font-bold">dem / einem</td>
                  <td className="py-4 px-4 text-rose-300 font-bold">der / einer</td>
                  <td className="py-4 px-4 text-emerald-300 font-bold">dem / einem</td>
                  <td className="py-4 px-4 text-amber-300 font-bold">den ...-n</td>
                </tr>

                <tr className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-4 font-sans font-bold text-white">
                    الإضافة (Genitiv) - المضاف إليه
                  </td>
                  <td className="py-4 px-4 text-blue-300 font-bold">des ...-(e)s</td>
                  <td className="py-4 px-4 text-rose-300 font-bold">der / einer</td>
                  <td className="py-4 px-4 text-emerald-300 font-bold">des ...-(e)s</td>
                  <td className="py-4 px-4 text-amber-300 font-bold">der / keiner</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Verbs Conjugator */}
      {activeTab === 'verbs' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h4 className="text-lg font-black text-white">
                تصريف الأفعال الأساسية والشاذة في الحاضر والماضي
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                اختر الفعل لعرض تصريفه مع كافة الضمائر الشخصية ومثاله الصوتي
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {VERB_CONJUGATIONS.map((v) => (
                <button
                  key={v.verb}
                  onClick={() => setSelectedVerb(v)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition ${
                    selectedVerb.verb === v.verb
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                      : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {v.verb}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Conjugation Table */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <span className="font-bold text-sm text-white">
                  زمن الحاضر (Präsens)
                </span>
                <span className="font-mono text-xs text-amber-400 font-bold">
                  {selectedVerb.verb} ({selectedVerb.meaning})
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">ich (أنا)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.ich}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">du (أنتَ/تِ)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.du}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">er/sie/es (هو/هي)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.er_sie_es}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">wir (نحن)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.wir}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">ihr (أنتم)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.ihr}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 flex justify-between items-center">
                  <span className="text-slate-400 font-sans">sie / Sie (هم/حضرتك)</span>
                  <span className="text-amber-300 font-bold">{selectedVerb.praesens.sie_Sie}</span>
                </div>
              </div>
            </div>

            {/* Perfekt & Example */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-white">الماضي المركب (Das Perfekt)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-400 font-bold">
                    Partizip II
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-center mb-4">
                  <span className="text-slate-400 text-xs block mb-1">صيغة الماضي:</span>
                  <span className="text-lg font-black text-rose-400">{selectedVerb.perfekt}</span>
                </div>
              </div>

              <div 
                onClick={() => handleAudio(selectedVerb.beispiel)}
                className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 hover:border-amber-400/50 cursor-pointer transition flex items-center justify-between group shadow-sm"
              >
                <div className="space-y-1">
                  <span className="text-[11px] text-slate-400 block font-sans">مثال عملي (انقر للاستماع):</span>
                  <p dir="ltr" className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-amber-300 transition-colors mt-0.5 text-left leading-relaxed">
                    {selectedVerb.beispiel}
                  </p>
                  <p dir="rtl" className="text-xs text-slate-400 mt-1 font-sans text-right leading-relaxed">
                    {selectedVerb.beispielAr}
                  </p>
                </div>
                <Volume2 className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 mr-2" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Detailed Level Rules */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="card-theme rounded-3xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20 inline-block mb-1 font-mono">
                    Niveau {rule.level}
                  </span>
                  <h4 className="text-xl font-black text-white">{rule.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{rule.subtitle}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {rule.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {rule.details.map((detail, dIdx) => (
                  <div key={dIdx} className="p-5 rounded-2xl bg-[#090e1c] border border-slate-800/90 space-y-2.5 shadow-sm">
                    <h5 className="font-bold text-white text-sm">{detail.heading}</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">{detail.description}</p>
                    <div className="space-y-2 pt-2">
                      {detail.examples.map((ex, eIdx) => (
                        <div
                          key={eIdx}
                          onClick={() => handleAudio(ex.ger)}
                          className="p-3 rounded-xl bg-[#060a14] border border-slate-800/90 hover:border-amber-400/50 cursor-pointer flex items-center justify-between text-xs group transition"
                        >
                          <div className="space-y-0.5">
                            <span dir="ltr" className="font-mono font-bold text-white group-hover:text-amber-300 transition-colors block text-left">
                              {ex.ger}
                            </span>
                            <span dir="rtl" className="text-slate-400 font-sans block text-[11px] mt-0.5 text-right">
                              {ex.arb}
                            </span>
                          </div>
                          <Volume2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 mr-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {rule.tips && rule.tips.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300">
                  <span className="font-bold block mb-1">نصيحة الأستاذ شادي:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {rule.tips.map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
