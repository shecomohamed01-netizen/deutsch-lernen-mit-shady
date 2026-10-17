import React, { useState } from 'react';
import { 
  Puzzle, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Volume2, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Lightbulb,
  Check
} from 'lucide-react';
import { SentenceExercise, Level } from '../types';
import { SENTENCE_EXERCISES } from '../data/curriculum';
import { playGermanAudio } from '../utils/speech';

interface SatzbauStudioProps {
  currentLevel: Level;
  speechRate: number;
}

export const SatzbauStudio: React.FC<SatzbauStudioProps> = ({
  currentLevel,
  speechRate
}) => {
  const filteredExercises = SENTENCE_EXERCISES.filter(ex => ex.level === currentLevel);
  const exerciseList = filteredExercises.length > 0 ? filteredExercises : SENTENCE_EXERCISES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = exerciseList[currentIndex] || exerciseList[0];

  const [availableTokens, setAvailableTokens] = useState<string[]>(() => {
    return [...currentExercise.tokens].sort(() => 0.5 - Math.random());
  });
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Sync tokens when exercise changes
  const handleSelectExercise = (idx: number) => {
    setCurrentIndex(idx);
    const ex = exerciseList[idx];
    setAvailableTokens([...ex.tokens].sort(() => 0.5 - Math.random()));
    setSelectedTokens([]);
    setIsEvaluated(false);
    setIsCorrect(false);
  };

  const handleAddToken = (token: string, idx: number) => {
    if (isEvaluated) return;
    setSelectedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== idx));
  };

  const handleRemoveToken = (token: string, idx: number) => {
    if (isEvaluated) return;
    setSelectedTokens(prev => prev.filter((_, i) => i !== idx));
    setAvailableTokens(prev => [...prev, token]);
  };

  const handleReset = () => {
    setAvailableTokens([...currentExercise.tokens].sort(() => 0.5 - Math.random()));
    setSelectedTokens([]);
    setIsEvaluated(false);
    setIsCorrect(false);
  };

  const handleCheck = () => {
    if (selectedTokens.length === 0) return;
    const userSentence = selectedTokens.join(' ').trim().toLowerCase();
    const correctSentence = currentExercise.germanFull.trim().toLowerCase();
    
    const matched = userSentence === correctSentence;
    setIsCorrect(matched);
    setIsEvaluated(true);

    if (matched) {
      playGermanAudio('Gut! Du machst das gut!', speechRate);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % exerciseList.length;
    handleSelectExercise(nextIdx);
  };

  return (
    <section id="satzbau" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto w-full">
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-400/10 blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Puzzle className="w-4 h-4" />
              <span>Satzbau-Studio</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              مختبر صياغة الجمل وتراكيب الكلام الألمانية
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              تعلم هندسة الجملة الألمانية: موقع الفعل في المركز الثاني، قاعدة TeKaMoLo، وقوانين الجمل الجانبية.
            </p>
          </div>

          {/* Exercise Index Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-950 border border-slate-800 rounded-2xl">
            {exerciseList.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => handleSelectExercise(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition ${
                  currentIndex === idx
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                تمرين {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Workbench */}
        <div className="space-y-6">
          {/* Target meaning card */}
          {/* Target meaning card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#070c17] border border-slate-800/80 text-center space-y-2 shadow-inner">
            <span className="text-xs text-amber-400 font-bold block font-mono">
              المعنى المطلوب تكوينه بالألمانية:
            </span>
            <h4 dir="rtl" className="text-xl sm:text-2xl font-black text-white">
              "{currentExercise.arabicTranslation}"
            </h4>
            <div dir="rtl" className="inline-flex items-center gap-1.5 text-xs text-slate-400 pt-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>إرشاد نحوي: {currentExercise.grammarHint}</span>
            </div>
          </div>

          {/* Construction Dropzone - Strictly LTR */}
          <div 
            dir="ltr" 
            className="p-6 sm:p-8 rounded-3xl bg-[#060a14]/90 border-2 border-dashed border-slate-700/80 min-h-[100px] flex flex-wrap items-center justify-center gap-3 transition-all shadow-inner"
          >
            {selectedTokens.length === 0 ? (
              <p dir="rtl" className="text-xs sm:text-sm text-slate-500 font-sans select-none text-center">
                اضغط على بطاقات الكلمات بالأسفل لتركيبها هنا بالترتيب النحوي السليم من اليسار لليمين
              </p>
            ) : (
              selectedTokens.map((token, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveToken(token, idx)}
                  disabled={isEvaluated}
                  dir="ltr"
                  className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-rose-500 hover:text-white text-slate-950 font-black font-mono text-sm sm:text-base shadow-md transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>{token}</span>
                  <span className="text-xs opacity-60">✕</span>
                </button>
              ))
            )}
          </div>

          {/* Available Word Tokens - Strictly LTR */}
          <div className="space-y-3">
            <span className="text-xs text-slate-400 block text-center font-medium">
              القطع والكلمات المتاحة للتركيب (اضغط للإضافة):
            </span>
            <div dir="ltr" className="flex flex-wrap items-center justify-center gap-3">
              {availableTokens.map((token, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAddToken(token, idx)}
                  disabled={isEvaluated}
                  dir="ltr"
                  className="px-4 py-2.5 rounded-2xl bg-[#0f172a] hover:bg-[#1e293b] border border-slate-700 hover:border-amber-400/60 text-white font-mono font-bold text-sm sm:text-base transition-all shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>

          {/* Action Bar (Check / Reset / Next) */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-800/80">
            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold transition flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة المحاولة</span>
            </button>

            {!isEvaluated ? (
              <button
                onClick={handleCheck}
                disabled={selectedTokens.length === 0}
                className="px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shadow-amber-950/40 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>التحقق من صحة ترتيب الجملة</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shadow-amber-950/40 flex items-center gap-1.5"
              >
                <span>التمرين التالي</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Evaluated Result Card */}
          {isEvaluated && (
            <div className={`p-6 rounded-2xl border text-right space-y-4 animate-fadeIn ${
              isCorrect 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <span dir="ltr" className="font-black text-sm text-emerald-400 font-mono block text-left">
                          Gut! Du machst das gut! 👍
                        </span>
                        <span dir="rtl" className="text-xs text-emerald-300/90 font-medium">
                          ترتيب نحوي صحيح ومتقن! أحسنت صنعاً وتصويباً
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span dir="rtl" className="font-black text-sm text-rose-400">
                        الترتيب غير دقيق. انظر الهيكل الصحيح للجملة:
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => playGermanAudio(currentExercise.germanFull, speechRate)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 transition flex items-center gap-1.5 text-xs font-mono"
                  title="استمع للجملة كاملة"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>استماع</span>
                </button>
              </div>

              {/* Correct Sentence Display - Strict LTR */}
              <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800/80">
                <div dir="ltr" className="text-left">
                  <p className="font-mono font-black text-base sm:text-lg text-white leading-relaxed">
                    {currentExercise.germanFull}
                  </p>
                </div>
                <div dir="rtl" className="text-right mt-1.5">
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {currentExercise.arabicTranslation}
                  </p>
                </div>
              </div>

              {/* Grammatical structure analysis */}
              <div dir="rtl" className="text-xs text-slate-300 bg-[#070b14]/90 p-4 rounded-xl border border-slate-800/60 leading-relaxed text-right">
                <span className="font-bold text-amber-400 block font-sans mb-1.5">
                  التحليل الهيكلي للجملة (Satzstruktur):
                </span>
                <span dir="ltr" className="inline-block font-mono text-left text-slate-200">
                  {currentExercise.structureExplanation}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
