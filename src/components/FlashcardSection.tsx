import React, { useState } from 'react';
import { 
  Volume2, 
  RotateCw, 
  ArrowRight, 
  ArrowLeft, 
  Shuffle, 
  CheckCircle2, 
  BookmarkCheck, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { VocabItem, Level } from '../types';
import { playGermanAudio } from '../utils/speech';

interface FlashcardSectionProps {
  vocabList: VocabItem[];
  currentLevel: Level;
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
  speechRate: number;
}

export const FlashcardSection: React.FC<FlashcardSectionProps> = ({
  vocabList,
  currentLevel,
  masteredIds,
  onToggleMastered,
  speechRate
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter by category if selected
  const categories = ['all', ...Array.from(new Set(vocabList.map(v => v.category)))];
  const filteredList = selectedCategory === 'all' 
    ? vocabList 
    : vocabList.filter(v => v.category === selectedCategory);

  const activeIndex = Math.min(currentIndex, Math.max(0, filteredList.length - 1));
  const currentItem: VocabItem | undefined = filteredList[activeIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredList.length);
    }, 120);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
    }, 120);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredList.length);
    setCurrentIndex(randomIndex);
  };

  const handleAudio = async (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPlayingAudio(true);
    await playGermanAudio(text, speechRate);
    setIsPlayingAudio(false);
  };

  const getArticleColor = (art: string) => {
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

  if (!currentItem) {
    return (
      <section id="vocab" className="px-4 py-16 text-center text-slate-400">
        <p>لا توجد مفردات في هذا التصنيف حالياً.</p>
      </section>
    );
  }

  const isMastered = masteredIds.has(currentItem.id);

  return (
    <section id="vocab" className="px-4 sm:px-6 py-16 bg-[#0e1424]/60 border-y border-slate-800/80">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
          البطاقات الذكية ثلاثية الأبعاد
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          قسم المفردات والبطاقات التفاعلية ({currentLevel})
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          انقر على البطاقة لقلبها واكتشاف المعنى العربي، واستمع للنطق الصحيح باللكنة الألمانية بضغطة زر واحدة.
        </p>

        {/* Category filters */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'جميع التصنيفات' : cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Flashcard Container */}
      <div className="max-w-md mx-auto">
        <div
          className="perspective-1000 w-full h-[360px] cursor-pointer select-none"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`transform-style-3d relative w-full h-full transition-transform duration-500 rounded-3xl ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* FRONT OF CARD */}
            <div className="backface-hidden absolute inset-0 card-theme border-2 border-slate-700/80 hover:border-amber-400/50 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-black/80">
              <div dir="ltr" className="flex items-center justify-between">
                <span
                  className={`text-xs font-black uppercase px-3.5 py-1 rounded-full border tracking-widest font-mono ${getArticleColor(
                    currentItem.art
                  )}`}
                >
                  {currentItem.art.toUpperCase() || 'WORT'}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleMastered(currentItem.id);
                    }}
                    title={isMastered ? 'تم الحفظ' : 'اضغط للتحديد كمحفوظ'}
                    className={`p-2.5 rounded-xl transition-colors ${
                      isMastered
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-[#070b14] text-slate-500 hover:text-slate-300 border border-slate-800'
                    }`}
                  >
                    <BookmarkCheck className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) =>
                      handleAudio(
                        `${currentItem.art} ${currentItem.ger}`,
                        e
                      )
                    }
                    title="استمع للنطق الألماني"
                    className={`p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition-transform ${
                      isPlayingAudio ? 'scale-110 ring-2 ring-amber-400' : ''
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main German Content - Strictly LTR */}
              <div dir="ltr" className="text-center my-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 font-mono">
                  {currentItem.ger}
                </h2>
                <p className="text-slate-400 text-sm font-mono tracking-wide">
                  Pl: {currentItem.plu}
                </p>

                {/* Example preview - Strictly LTR */}
                <div 
                  onClick={(e) => handleAudio(currentItem.example, e)}
                  className="mt-4 p-3.5 rounded-xl bg-[#060a14]/90 border border-slate-800 hover:border-amber-400/50 transition-colors flex items-center justify-between gap-3 group/ex shadow-inner"
                >
                  <p dir="ltr" className="text-xs text-slate-200 font-mono text-left leading-relaxed flex-1">
                    "{currentItem.example}"
                  </p>
                  <Volume2 className="w-3.5 h-3.5 text-slate-500 group-hover/ex:text-amber-400 shrink-0" />
                </div>
              </div>

              {/* Bottom hint */}
              <div dir="rtl" className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-3 border-t border-slate-800/80 font-sans">
                <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-amber-400" />
                <span>انقر لقلب البطاقة ومعرفة الترجمة العربية</span>
              </div>
            </div>

            {/* BACK OF CARD */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 rounded-3xl p-7 sm:p-9 flex flex-col justify-between text-slate-950 shadow-2xl shadow-amber-950/40">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full bg-slate-950/15">
                  الترجمة والمعنى
                </span>
                <span dir="ltr" className="text-xs font-bold bg-slate-950 text-amber-300 px-3 py-1 rounded-lg font-mono">
                  Level {currentItem.level}
                </span>
              </div>

              {/* Arabic Content */}
              <div dir="rtl" className="text-center my-auto space-y-3.5">
                <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  {currentItem.arb}
                </h3>
                <p className="text-xs text-slate-900/80 font-bold">
                  التصنيف: {currentItem.category}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950/10 border border-slate-950/15 text-right text-xs leading-relaxed font-semibold">
                  <span className="block text-slate-800 mb-0.5">ترجمة المثال:</span>
                  <span className="text-slate-950 font-bold">{currentItem.exampleAr}</span>
                </div>

                {currentItem.note && (
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-500/20 text-slate-950 text-[11px] text-right font-medium">
                    <Sparkles className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>ملاحظة أكاديمية: {currentItem.note}</span>
                  </div>
                )}
              </div>

              <div dir="rtl" className="flex items-center justify-center gap-2 text-slate-900/80 text-xs pt-3 border-t border-slate-950/15 font-bold">
                <RotateCw className="w-3.5 h-3.5" />
                <span>انقر مرة أخرى للعودة إلى الكلمة الألمانية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Navigation & Action Bar */}
        <div className="flex items-center justify-between mt-6 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-lg">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold transition flex items-center gap-1.5"
          >
            <ArrowRight className="w-4 h-4" />
            <span>السابق</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShuffle}
              title="ترتيب عشوائي للبطاقات"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <div className="text-center font-bold font-mono">
              <span className="text-amber-400 text-base">{activeIndex + 1}</span>
              <span className="text-slate-600 mx-1">/</span>
              <span className="text-slate-400 text-xs">{filteredList.length}</span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black transition flex items-center gap-1.5 shadow-md shadow-amber-950/30"
          >
            <span>التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
