import React, { useState } from 'react';
import { 
  Search, 
  Volume2, 
  Filter, 
  BookmarkCheck, 
  BookOpen, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  Layers,
  Check
} from 'lucide-react';
import { ESSENTIAL_2000_WORDS, EssentialWord } from '../data/essential2000';
import { playGermanAudio } from '../utils/speech';
import { Level } from '../types';

interface Essential2000SectionProps {
  speechRate: number;
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
}

export const Essential2000Section: React.FC<Essential2000SectionProps> = ({
  speechRate,
  masteredIds,
  onToggleMastered
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Derive unique categories
  const allCategories = ['all', ...Array.from(new Set(ESSENTIAL_2000_WORDS.map(w => w.category)))];

  // Filter words
  const filteredWords = ESSENTIAL_2000_WORDS.filter((word) => {
    const matchesSearch =
      searchTerm === '' ||
      word.ger.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.arb.includes(searchTerm) ||
      word.plu.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;
    const matchesPos = selectedPos === 'all' || word.pos === selectedPos;
    const matchesCat = selectedCategory === 'all' || word.category === selectedCategory;

    return matchesSearch && matchesLevel && matchesPos && matchesCat;
  });

  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWords = filteredWords.slice(startIndex, startIndex + itemsPerPage);

  const handleAudio = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playGermanAudio(text, speechRate);
  };

  const getArticleBadge = (art: string) => {
    switch (art.toLowerCase()) {
      case 'der':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'die':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
      case 'das':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const getPosBadge = (pos: EssentialWord['pos']) => {
    switch (pos) {
      case 'verb': return { text: 'فعل (Verb)', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
      case 'noun': return { text: 'اسم (Nomen)', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' };
      case 'adjective': return { text: 'صفة (Adjektiv)', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'preposition': return { text: 'حرف جر (Präp.)', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      case 'conjunction': return { text: 'رابط (Konj.)', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
      case 'expression': return { text: 'تعبير (Ausdruck)', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' };
      default: return { text: 'كلمة', color: 'bg-slate-800 text-slate-400 border-slate-700' };
    }
  };

  return (
    <section id="essential2000" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Der deutsche Grundwortschatz (Top 2000)</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            موسوعة أهم 2000 كلمة في اللغة الألمانية
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            الكلمات الأكثر شيوعاً واستخداماً في اختبارات غوته ومعهد تيلك (A1 - B2) مع النطق الصوتي والأمثلة.
          </p>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl font-mono self-start md:self-auto">
          المطابق للبحث: <span className="font-bold text-amber-400">{filteredWords.length}</span> كلمة
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 mb-8 space-y-4 shadow-xl">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="ابحث عن أي كلمة بالألمانية أو العربية (مثال: arbeiten, gehen, صديق, ماء)..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-2xl pr-10 pl-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        {/* Filter dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Level Filter */}
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">المستوى الدراسي</label>
            <select
              value={selectedLevel}
              onChange={(e) => {
                setSelectedLevel(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
            >
              <option value="all">كل المستويات (A1 - B2)</option>
              <option value="A1">مستوى A1 (تأسيس المبتدئين)</option>
              <option value="A2">مستوى A2 (التواصل الفعال)</option>
              <option value="B1">مستوى B1 (الأعمال المتقدمة)</option>
              <option value="B2">مستوى B2 (الترجمة والاحتراف)</option>
            </select>
          </div>

          {/* Part of Speech Filter */}
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">نوع الكلمة (Wortart)</label>
            <select
              value={selectedPos}
              onChange={(e) => {
                setSelectedPos(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
            >
              <option value="all">كل الأنواع</option>
              <option value="verb">الأفعال (Verben)</option>
              <option value="noun">الأسماء (Substantive)</option>
              <option value="adjective">الصفات (Adjektive)</option>
              <option value="preposition">حروف الجر (Präpositionen)</option>
              <option value="conjunction">أدوات الربط (Konjunktionen)</option>
              <option value="expression">تعبيرات شائعة (Ausdrücke)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-[11px] text-slate-400 block mb-1">التصنيف الموضوعي</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
            >
              {allCategories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'جميع التصنيفات' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedWords.map((item) => {
          const isMastered = masteredIds.has(item.id);
          const posInfo = getPosBadge(item.pos);

          return (
            <div
              key={item.id}
              className="card-theme p-6 rounded-2xl flex flex-col justify-between group hover:scale-[1.01] transition-all"
            >
              <div>
                <div dir="ltr" className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1.5">
                    {item.art && (
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border font-mono tracking-wider ${getArticleBadge(item.art)}`}>
                        {item.art.toUpperCase()}
                      </span>
                    )}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${posInfo.color}`}>
                      {posInfo.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleMastered(item.id)}
                      title={isMastered ? 'تم الحفظ في قائمتك' : 'اضغط لتحديد الكلمة كمحفوظة'}
                      className={`p-1.5 rounded-lg transition ${
                        isMastered
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[#070b14] text-slate-500 hover:text-slate-300 border border-slate-800'
                      }`}
                    >
                      <BookmarkCheck className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] font-bold text-amber-300 bg-[#070b14] px-2 py-0.5 rounded font-mono border border-slate-800">
                      {item.level}
                    </span>
                  </div>
                </div>

                {/* German Word & Arabic Translation */}
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <div dir="ltr" className="text-left">
                    <h4 className="text-2xl font-black font-mono text-white tracking-wide group-hover:text-amber-300 transition-colors">
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
                  <div dir="ltr" className="text-left mb-3">
                    <p className="text-xs text-slate-400 font-mono">
                      {item.plu.startsWith('die') ? `Pl: ${item.plu}` : `Formen: ${item.plu}`}
                    </p>
                  </div>
                )}

                <div 
                  onClick={() => handleAudio(item.example)}
                  className="p-3.5 rounded-xl bg-[#070c17]/90 border border-slate-800/80 hover:border-amber-400/40 cursor-pointer transition flex items-center justify-between gap-3 mt-3 shadow-inner"
                >
                  <div className="flex-1 space-y-1.5">
                    <p dir="ltr" className="text-xs text-slate-200 font-mono font-medium text-left leading-relaxed">
                      "{item.example}"
                    </p>
                    <p dir="rtl" className="text-[11px] text-slate-400 font-sans text-right leading-relaxed">
                      {item.exampleAr}
                    </p>
                  </div>
                  <Volume2 className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0" />
                </div>
              </div>

              <div className="pt-3.5 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span dir="rtl">{item.category}</span>
                <button
                  onClick={() => handleAudio(`${item.art} ${item.ger}`)}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-amber-400 transition"
                  title="استمع للكلمة"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 rounded-3xl border border-slate-800 text-slate-400 text-sm">
          لم يتم العثور على كلمات مطابقة للبحث. جرّب كلمات أو تصنيفات أخرى.
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold transition flex items-center gap-1.5"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الصفحة السابقة</span>
          </button>

          <span className="text-xs font-mono font-bold text-slate-400">
            صفحة <span className="text-amber-400">{currentPage}</span> من <span className="text-white">{totalPages}</span>
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>الصفحة التالية</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
