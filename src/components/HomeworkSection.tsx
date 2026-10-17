import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Volume2, 
  Award, 
  Sparkles, 
  ArrowLeft,
  Printer,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { HomeworkQuestion, Level } from '../types';
import { playGermanAudio } from '../utils/speech';
import { useAuth } from '../context/AuthContext';

interface HomeworkSectionProps {
  questions: HomeworkQuestion[];
  currentLevel: Level;
  speechRate: number;
}

const GERMAN_PRAISES = [
  { ger: 'Gut! Du machst das gut!', title: 'Gut! Du machst das gut! 👍', sub: 'رائع جداً! أحسنت صنعاً وتصويباً' },
  { ger: 'Sehr gut!', title: 'Sehr gut! Ausgezeichnet! 🌟', sub: 'ممتاز جداً! إجابة دقيقة وصحيحة 100%' },
  { ger: 'Machst du gut!', title: 'Machst du gut! Weiter so! ✨', sub: 'أداء بطولي رائع، استمر هكذا يا بطل!' },
  { ger: 'Ausgezeichnet!', title: 'Ausgezeichnet! Perfekt! 🎯', sub: 'ممتاز وبلا أي خطأ! استيعاب كامل للقاعدة' },
  { ger: 'Wunderbar!', title: 'Wunderbar! Genau richtig! 👏', sub: 'إجابة نموذجية ومبهرة، رائع!' },
  { ger: 'Fantastisch!', title: 'Fantastisch gemacht! 🚀', sub: 'مذهل! تقدمك ملحوظ في اللغة الألمانية' }
];

export const HomeworkSection: React.FC<HomeworkSectionProps> = ({
  questions,
  currentLevel,
  speechRate
}) => {
  const { user, saveHomeworkRecord } = useAuth();
  const [activeQuestions, setActiveQuestions] = useState<HomeworkQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPraise, setCurrentPraise] = useState<typeof GERMAN_PRAISES[0] | null>(null);
  const [userHistory, setUserHistory] = useState<{ question: HomeworkQuestion; userChoice: string; isCorrect: boolean }[]>([]);

  // State for sentence ordering questions
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);
  const [constructedSentence, setConstructedSentence] = useState<string[]>([]);

  // Initialize or reset questions when level changes
  useEffect(() => {
    resetQuiz();
  }, [currentLevel, questions]);

  const resetQuiz = () => {
    const pool = questions.filter(q => q.level === currentLevel);
    const selected = pool.length > 0 ? [...pool].sort(() => 0.5 - Math.random()) : [];
    setActiveQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
    setUserHistory([]);

    if (selected[0]?.type === 'sentence' && selected[0].sentenceWords) {
      setSentenceTokens([...selected[0].sentenceWords].sort(() => 0.5 - Math.random()));
      setConstructedSentence([]);
    }
  };

  const currentQ: HomeworkQuestion | undefined = activeQuestions[currentIndex];

  useEffect(() => {
    if (currentQ?.type === 'sentence' && currentQ.sentenceWords) {
      setSentenceTokens([...currentQ.sentenceWords].sort(() => 0.5 - Math.random()));
      setConstructedSentence([]);
    }
  }, [currentIndex, currentQ]);

  const handleSelectOption = (choice: string) => {
    if (isAnswered || !currentQ) return;
    
    setSelectedOption(choice);
    setIsAnswered(true);

    const isCorrect = choice.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();
    if (isCorrect) {
      setScore(prev => prev + 1);
      const randomPraise = GERMAN_PRAISES[Math.floor(Math.random() * GERMAN_PRAISES.length)];
      setCurrentPraise(randomPraise);
      // Play encouragement audio
      playGermanAudio(randomPraise.ger, speechRate);
    } else {
      setCurrentPraise(null);
    }

    setUserHistory(prev => [...prev, {
      question: currentQ,
      userChoice: choice,
      isCorrect
    }]);

    // Pronounce audio if listening question and wrong
    if (currentQ.type === 'listening' && !isCorrect) {
      playGermanAudio(currentQ.correctAnswer, speechRate);
    }
  };

  // Sentence reordering handlers
  const handleAddToken = (token: string, idx: number) => {
    if (isAnswered) return;
    setConstructedSentence(prev => [...prev, token]);
    setSentenceTokens(prev => prev.filter((_, i) => i !== idx));
  };

  const handleRemoveToken = (token: string, idx: number) => {
    if (isAnswered) return;
    setConstructedSentence(prev => prev.filter((_, i) => i !== idx));
    setSentenceTokens(prev => [...prev, token]);
  };

  const handleCheckSentence = () => {
    if (!currentQ || isAnswered) return;
    const answer = constructedSentence.join(' ');
    handleSelectOption(answer);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      const percentage = Math.round((score / Math.max(1, activeQuestions.length)) * 100);
      if (user) {
        saveHomeworkRecord({
          level: currentLevel,
          score,
          totalQuestions: activeQuestions.length,
          percentage
        }).catch(err => console.error("Error saving homework:", err));
      }
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore fallback
      }
    }
  };

  const handlePlayAudio = (text: string) => {
    playGermanAudio(text, speechRate);
  };

  if (!currentQ && !isCompleted) {
    return (
      <section id="homework" className="px-4 py-16 text-center text-slate-400">
        <p>لا توجد أسئلة واجب متاحة لهذا المستوى حالياً.</p>
      </section>
    );
  }

  const isCorrect = selectedOption?.trim().toLowerCase() === currentQ?.correctAnswer.trim().toLowerCase();

  return (
    <section id="homework" className="px-4 sm:px-6 py-20 max-w-4xl mx-auto w-full">
      <div className="bg-slate-900 border-2 border-amber-400/30 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-xs font-black uppercase tracking-wider">
                نظام الواجبات والتمارين اليومية (Hausaufgaben)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                مستوى {currentLevel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              اختبار ذكي لقياس الفهم وتثبيت القواعد
            </h3>
          </div>

          {!isCompleted && (
            <div className="bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800 text-xs font-bold self-start sm:self-auto flex items-center gap-2">
              <span className="text-slate-400">السؤال:</span>
              <span className="text-amber-400 font-mono text-sm">{currentIndex + 1}</span>
              <span className="text-slate-600">من</span>
              <span className="text-slate-300 font-mono text-sm">{activeQuestions.length}</span>
            </div>
          )}
        </div>

        {/* QUIZ IN PROGRESS */}
        {!isCompleted && currentQ && (
          <div className="space-y-6">
            {/* Question prompt card */}
            <div className="bg-slate-950/90 p-6 sm:p-8 rounded-3xl border border-slate-800 text-center space-y-3 relative">
              <span className="text-xs text-slate-400 block font-medium">
                {currentQ.instruction}
              </span>

              {/* Target word or listening prompt */}
              {currentQ.type === 'listening' ? (
                <div className="py-4">
                  <button
                    onClick={() => handlePlayAudio(currentQ.targetWord || currentQ.correctAnswer)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition shadow-lg shadow-amber-950/50"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>اضغط هنا للاستماع للكلمة الألمانية</span>
                  </button>
                </div>
              ) : currentQ.type === 'sentence' ? (
                <div>
                  <h4 dir="rtl" className="text-lg sm:text-xl font-bold text-white mb-3">
                    {currentQ.prompt}
                  </h4>
                  {/* Sentence dropzone strictly LTR */}
                  <div dir="ltr" className="p-4 sm:p-5 rounded-2xl bg-[#060a14]/90 border-2 border-dashed border-slate-700 min-h-[64px] flex flex-wrap items-center justify-center gap-2.5 shadow-inner">
                    {constructedSentence.length === 0 ? (
                      <span dir="rtl" className="text-xs text-slate-500 font-sans">
                        اضغط على الكلمات بالأسفل لترتيبها هنا بالترتيب النحوي الصحيح من اليسار لليمين
                      </span>
                    ) : (
                      constructedSentence.map((word, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleRemoveToken(word, idx)}
                          disabled={isAnswered}
                          dir="ltr"
                          className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-mono font-black text-sm hover:bg-rose-500 hover:text-white transition shadow-sm"
                        >
                          {word}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <div dir="ltr" className="text-center">
                    <h4 className="text-2xl sm:text-4xl font-black text-white font-mono tracking-wide">
                      {currentQ.targetWord ? `___ ${currentQ.targetWord}` : currentQ.prompt}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Options */}
            {currentQ.type === 'sentence' ? (
              <div className="space-y-4">
                <div dir="ltr" className="flex flex-wrap items-center justify-center gap-2.5">
                  {sentenceTokens.map((token, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAddToken(token, idx)}
                      disabled={isAnswered}
                      dir="ltr"
                      className="px-4 py-2.5 rounded-2xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono font-bold text-sm border border-slate-700 hover:border-amber-400/50 transition shadow-sm"
                    >
                      {token}
                    </button>
                  ))}
                </div>

                {!isAnswered && (
                  <div className="text-center pt-2">
                    <button
                      onClick={handleCheckSentence}
                      disabled={constructedSentence.length === 0}
                      className="px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-black text-sm transition shadow-lg shadow-amber-950/40"
                    >
                      تأكيد الترتيب والتحقق من الإجابة
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Multiple choice options (Article or translation) */
              <div
                className={`grid gap-3.5 ${
                  currentQ.options.length <= 3 ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOption === opt;
                  const isThisCorrect = opt.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();

                  let btnStyle = 'bg-[#0f172a] hover:bg-[#1e293b] text-white border-slate-700 hover:border-amber-400/50';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/30 font-black';
                    } else if (isSelected && !isThisCorrect) {
                      btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 ring-2 ring-rose-500/30';
                    } else {
                      btnStyle = 'opacity-40 bg-[#070b14] border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isAnswered}
                      dir="ltr"
                      className={`p-4 rounded-2xl border font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 ${btnStyle}`}
                    >
                      <span className="font-mono">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Answer Explanation & Next Button */}
            {isAnswered && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                        <div>
                          <span className="font-black text-emerald-400 text-sm sm:text-base font-mono block">
                            {currentPraise?.title || 'Sehr gut! Das machst du gut! 👏'}
                          </span>
                          <span className="text-xs text-emerald-300/80 font-medium font-sans">
                            {currentPraise?.sub || 'أحسنت صنعاً! إجابة صحيحة وممتازة'}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => playGermanAudio(currentPraise?.ger || 'Sehr gut!', speechRate)}
                        className="self-start sm:self-auto px-2.5 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition flex items-center gap-1.5 text-xs font-mono"
                        title="استمع للتشجيع الصوتي بالألمانية"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع للنطق</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span className="font-black text-rose-400 text-sm">
                        إجابة خاطئة. الإجابة الصحيحة هي:{' '}
                        <span className="font-mono underline text-amber-400">{currentQ.correctAnswer}</span>
                      </span>
                    </>
                  )}
                </div>

                <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/60">
                  <span className="font-bold text-amber-400 block mb-0.5">الشرح الأكاديمي:</span>
                  <span>{currentQ.explanation}</span>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md shadow-amber-950/40"
                  >
                    <span>{currentIndex + 1 < activeQuestions.length ? 'السؤال التالي' : 'عرض النتيجة النهائية'}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* QUIZ COMPLETED SCREEN */}
        {isCompleted && (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-amber-400/10 border-2 border-amber-400 text-amber-400 mx-auto flex items-center justify-center shadow-xl shadow-amber-400/10">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                تقرير إنجاز الواجب اليومي
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white">
                {score === activeQuestions.length
                  ? 'تهانينا! علامة كاملة واحتراف حقيقي 🌟'
                  : score >= activeQuestions.length * 0.7
                  ? 'أداء رائع جداً يا بطل! 👏'
                  : 'أداء جيد، وتحتاج إلى تكرار التمرين لتثبيت القواعد 💪'}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                لقد أجبت بشكل صحيح على <span className="text-amber-400 font-bold font-mono">{score}</span> من أصل{' '}
                <span className="text-white font-bold font-mono">{activeQuestions.length}</span> أسئلة (نسبة النجاح:{' '}
                <span className="text-emerald-400 font-bold font-mono">
                  {Math.round((score / Math.max(1, activeQuestions.length)) * 100)}%
                </span>
                )
              </p>
            </div>

            {/* Detailed answers breakdown */}
            <div className="max-h-60 overflow-y-auto space-y-2 text-right p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-bold text-slate-400 block mb-2">مراجعة الأسئلة والإجابات:</span>
              {userHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${
                    item.isCorrect
                      ? 'bg-emerald-500/5 border-emerald-500/20'
                      : 'bg-rose-500/5 border-rose-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                    <div>
                      <p className="font-semibold text-white">
                        {item.question.targetWord || item.question.prompt}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        إجابتك: <span className="font-mono text-slate-200">{item.userChoice}</span>{' '}
                        {!item.isCorrect && (
                          <span className="text-amber-400 font-mono">
                            (الصحيح: {item.question.correctAnswer})
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">سؤال {idx + 1}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md shadow-amber-950/40"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة التمرين مرة أخرى</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 border border-slate-700"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة تقرير الواجب</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
