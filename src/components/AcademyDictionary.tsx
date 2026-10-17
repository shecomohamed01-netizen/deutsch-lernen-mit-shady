import React, { useState } from 'react';
import { Search, Volume2, Filter, BookOpen } from 'lucide-react';
import { VocabItem, Level, Article } from '../types';
import { playGermanAudio } from '../utils/speech';

interface AcademyDictionaryProps {
  vocabulary: VocabItem[];
  speechRate: number;
}

export const AcademyDictionary: React.FC<AcademyDictionaryProps> = ({
  vocabulary,
  speechRate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<string>('all');

  const filteredVocab = vocabulary.filter((item) => {
    const matchesSearch =
      searchTerm === '' ||
      item.ger.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.plu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arb.includes(searchTerm) ||
      item.category.includes(searchTerm);

    const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
    const matchesArticle =
      selectedArticle === 'all' || item.art.toLowerCase() === selectedArticle.toLowerCase();

    return matchesSearch && matchesLevel && matchesArticle;
  });

  const handleAudio = (text: string) => {
    playGermanAudio(text, speechRate);
  };

  const getArticleBadge = (art: Article) => {
    switch (art.toLowerCase()) {
      case 'der':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'die':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'das':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <section id="dictionary" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Wörterbuch der Akademie</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            قاموس دويتش مايستر الشامل (DeutschMeister)
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            ابحث في المفردات الأكاديمية المصنفة حسب الأدوات، المستويات، والنطق الصوتي المباشر.
          </p>
        </div>

        {/* Total count badge */}
        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl self-start md:self-auto font-mono">
          إجمالي المفردات: <span className="font-bold text-amber-400">{filteredVocab.length}</span> كلمة
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن كلمة بالألمانية أو العربية (مثال: Apfel، طاولة، مستشفى)..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl pr-10 pl-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            aria-label="تصفية حسب المستوى"
            className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
          >
            <option value="all">كل المستويات</option>
            <option value="A1">مستوى A1</option>
            <option value="A2">مستوى A2</option>
            <option value="B1">مستوى B1</option>
            <option value="B2">مستوى B2</option>
          </select>

          {/* Article Filter */}
          <select
            value={selectedArticle}
            onChange={(e) => setSelectedArticle(e.target.value)}
            aria-label="تصفية حسب أداة التعريف"
            className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
          >
            <option value="all">كل الأدوات</option>
            <option value="der">Der (مذكر)</option>
            <option value="die">Die (مؤنث)</option>
            <option value="das">Das (محايد)</option>
          </select>
        </div>
      </div>

      {/* Dictionary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVocab.map((item) => (
          <div
            key={item.id}
            className="card-theme p-6 rounded-2xl flex flex-col justify-between group hover:scale-[1.01] transition-all"
          >
            <div>
              <div dir="ltr" className="flex items-center justify-between mb-3.5">
                <span
                  className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border font-mono tracking-wider ${getArticleBadge(
                    item.art
                  )}`}
                >
                  {item.art || '-'}
                </span>

                <span className="text-[10px] font-bold text-amber-300 bg-[#070b14] px-2.5 py-0.5 rounded border border-slate-800 font-mono">
                  {item.level}
                </span>
              </div>

              {/* German and Arabic Word Header */}
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <div dir="ltr" className="text-left">
                  <h4 className="text-xl font-black font-mono text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {item.ger}
                  </h4>
                </div>
                <div dir="rtl" className="text-right">
                  <span className="text-sm font-bold text-amber-400">
                    {item.arb}
                  </span>
                </div>
              </div>

              {item.plu && item.plu !== '-' && (
                <div dir="ltr" className="text-left mb-2.5">
                  <p className="text-xs text-slate-400 font-mono">
                    Pl: {item.plu}
                  </p>
                </div>
              )}

              {/* Inset Example Box */}
              <div className="bg-[#070c17]/90 border border-slate-800/80 rounded-xl p-3.5 space-y-1.5 mt-3 shadow-inner">
                <p dir="ltr" className="text-xs text-slate-200 font-mono text-left leading-relaxed">
                  "{item.example}"
                </p>
                {item.exampleAr && (
                  <p dir="rtl" className="text-[11px] text-slate-400 font-sans text-right leading-relaxed">
                    {item.exampleAr}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-3.5 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
              <span dir="rtl">{item.category}</span>
              <button
                onClick={() => handleAudio(`${item.art} ${item.ger}`)}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-amber-400 transition"
                title="استمع للنطق"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredVocab.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 rounded-3xl border border-slate-800 text-slate-400 text-sm">
          لم يتم العثور على مفردات تطابق البحث. جرّب كلمات أو تصنيفات أخرى.
        </div>
      )}
    </section>
  );
};
