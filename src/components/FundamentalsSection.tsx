import React, { useState } from 'react';
import { 
  Calendar, 
  Sun, 
  Hash, 
  Volume2, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { DAYS_OF_WEEK, MONTHS_OF_YEAR, SEASONS, TIME_TERMS } from '../data/fundamentals';
import { getAllNumbers0To100, getGermanNumber, GermanNumberInfo } from '../utils/germanNumbers';
import { playGermanAudio } from '../utils/speech';

interface FundamentalsSectionProps {
  speechRate: number;
}

export const FundamentalsSection: React.FC<FundamentalsSectionProps> = ({ speechRate }) => {
  const [activeTab, setActiveTab] = useState<'days' | 'months' | 'numbers'>('days');
  const [selectedNumber, setSelectedNumber] = useState<number>(25);
  const [numberFilter, setNumberFilter] = useState<'all' | 'units' | 'teens' | 'tens'>('all');
  
  // Interactive Number Quiz State
  const [quizNumber, setQuizNumber] = useState<number>(() => Math.floor(Math.random() * 100));
  const [quizOptions, setQuizOptions] = useState<number[]>(() => generateQuizOptions(25));
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  function generateQuizOptions(correct: number): number[] {
    const opts = new Set<number>([correct]);
    while (opts.size < 4) {
      const rand = Math.floor(Math.random() * 101);
      opts.add(rand);
    }
    return Array.from(opts).sort(() => 0.5 - Math.random());
  }

  const handleStartNewQuiz = () => {
    const nextNum = Math.floor(Math.random() * 101);
    setQuizNumber(nextNum);
    setQuizOptions(generateQuizOptions(nextNum));
    setQuizAnswered(false);
    setQuizSelected(null);
    playGermanAudio(getGermanNumber(nextNum).audioText, speechRate);
  };

  const handleAnswerQuiz = (chosen: number) => {
    if (quizAnswered) return;
    setQuizSelected(chosen);
    setQuizAnswered(true);
    if (chosen === quizNumber) {
      playGermanAudio('Gut! Du machst das gut!', speechRate);
    }
  };

  const allNumbers = getAllNumbers0To100();
  const currentNumberInfo: GermanNumberInfo = getGermanNumber(selectedNumber);

  const filteredNumbers = allNumbers.filter(n => {
    if (numberFilter === 'units') return n.num <= 9;
    if (numberFilter === 'teens') return n.num >= 10 && n.num <= 19;
    if (numberFilter === 'tens') return n.num % 10 === 0 && n.num > 0;
    return true;
  });

  const handleAudio = (text: string) => {
    playGermanAudio(text, speechRate);
  };

  return (
    <section id="fundamentals" className="px-4 sm:px-6 py-20 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-mono">Grundlagen der deutschen Sprache</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            الأساسيات الشاملة: الأيام، الشهور، والأرقام حتى 100
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            دليل التأسيس الصوتي والنحوي لأيام الأسبوع، شهور وفصول السنة، ومستكشف الأرقام الألمانية التفاعلي.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 bg-[#0f172a] border border-slate-800 rounded-2xl overflow-x-auto self-start md:self-auto shadow-inner">
          <button
            onClick={() => setActiveTab('days')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'days'
                ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>أيام الأسبوع والوقت</span>
          </button>

          <button
            onClick={() => setActiveTab('months')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'months'
                ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>الشهور والفصول</span>
          </button>

          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'numbers'
                ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span>الأرقام (0 - 100)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Days of the week */}
      {activeTab === 'days' && (
        <div className="space-y-8">
          {/* Golden Grammar Rule Callout */}
          <div className="p-5 rounded-2xl bg-[#0e1c36] border border-blue-500/30 text-xs sm:text-sm text-blue-200 flex items-start gap-3 shadow-lg">
            <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div dir="rtl" className="text-right leading-relaxed">
              <span className="font-bold text-white block mb-1">القاعدة الذهبية لأيام الأسبوع:</span>
              <span>
                جميع أيام الأسبوع في اللغة الألمانية مذكرة وتأخذ أداة المعرفة{' '}
                <strong dir="ltr" className="inline-block text-blue-400 font-mono font-bold mx-1">Der</strong>،{' '}
                وعند التعبير عن حدوث شيء في يوم معين نستخدم دائماً حرف الجر{' '}
                <strong dir="ltr" className="inline-block text-amber-400 font-mono font-bold mx-1">am</strong>{' '}
                (مثال:{' '}
                <span dir="ltr" className="inline-block text-white font-mono bg-slate-950 px-2 py-0.5 rounded mx-1">am Montag</span>{' '}
                = في يوم الإثنين).
              </span>
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DAYS_OF_WEEK.map((day) => (
              <div
                key={day.id}
                onClick={() => handleAudio(`${day.art} ${day.ger}`)}
                className="card-theme p-6 rounded-2xl flex flex-col justify-between cursor-pointer group hover:scale-[1.02] transition-all"
              >
                <div>
                  {/* Article & Abbreviation badges - strict LTR */}
                  <div dir="ltr" className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono tracking-wider">
                      {day.art.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-[#070b14] px-2.5 py-1 rounded-md border border-slate-800">
                      {day.abbr}
                    </span>
                  </div>

                  {/* German Day & Arabic Meaning Row */}
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    {/* German: LTR & text-left */}
                    <div dir="ltr" className="text-left">
                      <h4 className="text-2xl font-black font-mono text-white group-hover:text-amber-300 transition-colors tracking-tight">
                        {day.ger}
                      </h4>
                    </div>

                    {/* Arabic: RTL & text-right */}
                    <div dir="rtl" className="text-right">
                      <span className="text-base font-bold text-amber-400">
                        {day.arb}
                      </span>
                    </div>
                  </div>

                  {/* Context Example Box */}
                  <div className="bg-[#070c17]/90 border border-slate-800/80 rounded-xl p-3.5 space-y-2 mt-2">
                    {/* German Sentence: Strictly LTR */}
                    <p dir="ltr" className="text-xs text-slate-200 font-mono font-medium text-left leading-relaxed">
                      "{day.prepExample}"
                    </p>
                    {/* Arabic Translation: Strictly RTL */}
                    <p dir="rtl" className="text-[11px] text-slate-400 font-sans text-right leading-relaxed">
                      {day.prepAr}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-sans">
                  <span>انقر للاستماع للنطق</span>
                  <div className="p-1 rounded-lg bg-slate-900 group-hover:bg-amber-400/20 transition">
                    <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common Time Expressions */}
          <div className="card-theme p-6 sm:p-8 rounded-3xl space-y-5">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>مفردات الوقت والأيام الأساسية (Zeitangaben)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {TIME_TERMS.map((t, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAudio(t.ger)}
                  className="p-4 rounded-xl bg-[#090e1c] border border-slate-800/90 hover:border-amber-400/50 cursor-pointer transition flex items-center justify-between group shadow-sm"
                >
                  <div className="space-y-1">
                    <span dir="ltr" className="font-mono font-bold text-white text-sm group-hover:text-amber-300 transition-colors block text-left">
                      {t.ger}
                    </span>
                    <span dir="rtl" className="text-xs text-slate-400 block text-right font-sans">
                      {t.arb}
                    </span>
                  </div>
                  <Volume2 className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 mr-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Months and Seasons */}
      {activeTab === 'months' && (
        <div className="space-y-8">
          {/* Golden Grammar Rule Callout */}
          <div className="p-5 rounded-2xl bg-[#0c2420] border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 flex items-start gap-3 shadow-lg">
            <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div dir="rtl" className="text-right leading-relaxed">
              <span className="font-bold text-white block mb-1">القاعدة الذهبية لشهور وفصول السنة:</span>
              <span>
                جميع شهور وفصول السنة مذكرة وتأخذ أداة المعرفة{' '}
                <strong dir="ltr" className="inline-block text-blue-400 font-mono font-bold mx-1">Der</strong>،{' '}
                وعند التعبير عن حدوث شيء في شهر أو فصل معين نستخدم حرف الجر{' '}
                <strong dir="ltr" className="inline-block text-amber-400 font-mono font-bold mx-1">im</strong>{' '}
                (اختصاراً لـ in dem) مثل:{' '}
                <span dir="ltr" className="inline-block text-white font-mono bg-slate-950 px-2 py-0.5 rounded mx-1">im Januar</span>،{' '}
                <span dir="ltr" className="inline-block text-white font-mono bg-slate-950 px-2 py-0.5 rounded mx-1">im Sommer</span>.
              </span>
            </div>
          </div>

          {/* 4 Seasons Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEASONS.map((sea) => (
              <div
                key={sea.id}
                onClick={() => handleAudio(`${sea.art} ${sea.ger}`)}
                className="card-theme p-6 rounded-2xl cursor-pointer transition group hover:scale-[1.02]"
              >
                <div dir="ltr" className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">
                    {sea.art.toUpperCase()}
                  </span>
                  <Volume2 className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <div dir="ltr" className="text-left">
                  <h4 className="text-2xl font-black text-white group-hover:text-amber-300 font-mono tracking-tight">
                    {sea.ger}
                  </h4>
                </div>
                <div dir="rtl" className="text-right mt-1">
                  <p className="text-sm font-bold text-amber-400">
                    فصل {sea.arb}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    الشهور: {sea.months}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 12 Months Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MONTHS_OF_YEAR.map((mon) => (
              <div
                key={mon.id}
                onClick={() => handleAudio(`${mon.art} ${mon.ger}`)}
                className="card-theme p-5 rounded-2xl cursor-pointer transition flex flex-col justify-between group hover:scale-[1.02]"
              >
                <div>
                  <div dir="ltr" className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      Month {mon.order}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#070b14] text-amber-300 border border-slate-800">
                      {mon.abbr}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-2 mb-3">
                    <div dir="ltr" className="text-left">
                      <h5 className="text-xl font-black font-mono text-white group-hover:text-amber-300 transition-colors">
                        {mon.ger}
                      </h5>
                    </div>
                    <div dir="rtl" className="text-right">
                      <span className="text-xs font-bold text-amber-400">
                        {mon.arb}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#070c17]/90 border border-slate-800/80 rounded-xl p-3 space-y-1.5 mt-2">
                    <p dir="ltr" className="text-[11px] text-slate-200 font-mono text-left leading-relaxed">
                      "{mon.prepExample}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span dir="rtl">{mon.note}</span>
                  <Volume2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Interactive Numbers 0 to 100 */}
      {activeTab === 'numbers' && (
        <div className="space-y-8">
          {/* Number Spotlight Workbench */}
          <div className="card-theme-accent p-6 sm:p-10 rounded-3xl relative overflow-hidden text-center space-y-5">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-widest block font-mono">
              مستكشف الأرقام الألمانية التفاعلي (Zahlen-Explorer)
            </span>

            {/* Selected Number Display */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-3">
              <div className="w-28 h-28 rounded-3xl bg-amber-400 text-slate-950 flex flex-col items-center justify-center shadow-2xl shadow-amber-950/50 shrink-0">
                <span dir="ltr" className="text-5xl font-black font-mono leading-none">{selectedNumber}</span>
                <span dir="rtl" className="text-xs font-bold mt-1.5">{currentNumberInfo.arb.split(' ')[1] || currentNumberInfo.arb}</span>
              </div>

              <div className="text-center sm:text-right space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div dir="ltr" className="text-left">
                    <h4 className="text-3xl sm:text-5xl font-black font-mono text-white tracking-wide">
                      {currentNumberInfo.ger}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleAudio(currentNumberInfo.audioText)}
                    className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition shadow-md"
                    title="استمع لنطق الرقم بالألمانية"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {currentNumberInfo.decomposition && (
                  <div dir="ltr" className="text-left">
                    <p className="text-xs text-amber-300 font-mono bg-[#070b14] px-3.5 py-1.5 rounded-xl border border-slate-800 inline-block">
                      {currentNumberInfo.decomposition}
                    </p>
                  </div>
                )}

                <p dir="rtl" className="text-xs text-slate-300">
                  قاعدة الأرقام المركبة في الألمانية: ننطق الآحاد أولاً، ثم كلمة "und" (و)، ثم العشرات!
                </p>
              </div>
            </div>

            {/* Number Slider */}
            <div className="max-w-md mx-auto pt-2">
              <input
                type="range"
                min="0"
                max="100"
                value={selectedNumber}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setSelectedNumber(val);
                  handleAudio(getGermanNumber(val).audioText);
                }}
                className="w-full accent-amber-400 h-2.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div dir="ltr" className="flex justify-between text-xs text-slate-400 font-mono mt-2">
                <span>0 (null)</span>
                <span>50 (fünfzig)</span>
                <span>100 (hundert)</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Buttons & Number Grid */}
          <div className="card-theme rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <h4 className="text-base font-black text-white">
                جدول الأرقام الكامل (انقر على أي رقم لسماعه ومعرفة طريقة كتابته):
              </h4>

              <div className="flex items-center gap-1.5 overflow-x-auto">
                <button
                  onClick={() => setNumberFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    numberFilter === 'all'
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-[#090e1c] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  الكل (0-100)
                </button>
                <button
                  onClick={() => setNumberFilter('units')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    numberFilter === 'units'
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-[#090e1c] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  الآحاد (0-9)
                </button>
                <button
                  onClick={() => setNumberFilter('teens')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    numberFilter === 'teens'
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-[#090e1c] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  العشرات (10-19)
                </button>
                <button
                  onClick={() => setNumberFilter('tens')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    numberFilter === 'tens'
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-[#090e1c] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  العقود (10, 20... 100)
                </button>
              </div>
            </div>

            {/* Clickable Number Badges Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
              {filteredNumbers.map((item) => {
                const isSelected = selectedNumber === item.num;
                return (
                  <button
                    key={item.num}
                    onClick={() => {
                      setSelectedNumber(item.num);
                      handleAudio(item.audioText);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all transform active:scale-95 flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xl font-black scale-105 z-10'
                        : 'bg-[#070b14] hover:bg-[#11192b] border-slate-800/90 text-white'
                    }`}
                  >
                    <span dir="ltr" className="font-mono text-base font-bold">{item.num}</span>
                    <span dir="ltr" className={`text-[10px] truncate max-w-full font-mono mt-0.5 ${
                      isSelected ? 'text-slate-950 font-bold' : 'text-slate-400'
                    }`}>
                      {item.ger}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Listening Game */}
          <div className="card-theme p-6 sm:p-8 rounded-3xl space-y-5 text-center">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block font-mono">
              لعبة اختبار الأذن الألمانية (Hörübung)
            </span>
            <h4 className="text-lg font-black text-white">
              استمع للنطق الصوتي وحدد الرقم المطابق:
            </h4>

            <div className="flex items-center justify-center gap-3 py-2">
              <button
                onClick={() => playGermanAudio(getGermanNumber(quizNumber).audioText, speechRate)}
                className="px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-amber-950/50 transition transform hover:scale-105"
              >
                <Volume2 className="w-5 h-5" />
                <span>اضغط للاستماع للرقم الألماني</span>
              </button>

              <button
                onClick={handleStartNewQuiz}
                className="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                title="تغيير الرقم وسماع رقم جديد"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-lg mx-auto pt-2">
              {quizOptions.map((opt) => {
                const isCorrect = opt === quizNumber;
                const isSelected = quizSelected === opt;

                let btnStyle = 'bg-[#090e1c] hover:bg-[#11192b] border-slate-800 text-white';
                if (quizAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-black ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500';
                  } else {
                    btnStyle = 'opacity-40 bg-[#070b14] border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswerQuiz(opt)}
                    disabled={quizAnswered}
                    className={`py-4 px-4 rounded-2xl border font-mono font-bold text-lg transition flex flex-col items-center justify-center ${btnStyle}`}
                  >
                    <span dir="ltr">{opt}</span>
                    <span dir="ltr" className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {getGermanNumber(opt).ger}
                    </span>
                  </button>
                );
              })}
            </div>

            {quizAnswered && (
              <div className="pt-2 animate-fadeIn">
                {quizSelected === quizNumber ? (
                  <div className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>Gut! Du machst das gut! 👍 إجابة صحيحة، الرقم هو {getGermanNumber(quizNumber).ger} ({quizNumber})!</span>
                  </div>
                ) : (
                  <div className="text-rose-400 font-bold text-sm">
                    إجابة خاطئة. الرقم المطلوب كان: {getGermanNumber(quizNumber).ger} ({quizNumber})
                  </div>
                )}

                <button
                  onClick={handleStartNewQuiz}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-black hover:bg-amber-300 transition shadow-lg"
                >
                  سؤال رقم جديد
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
