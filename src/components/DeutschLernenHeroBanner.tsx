import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, BookOpen, Compass, X } from 'lucide-react';
import { playGermanAudio } from '../utils/speech';

interface DeutschLernenHeroBannerProps {
  onStartLearning: () => void;
  speechRate?: number;
}

interface StateInfo {
  id: string;
  name: string;
  capital: string;
  nameAr: string;
  capitalAr: string;
  fact: string;
}

const BUNDESLAENDER: Record<string, StateInfo> = {
  by: { id: 'by', name: 'Bayern', capital: 'München', nameAr: 'بافاريا', capitalAr: 'ميونخ', fact: 'أكبر ولاية ألمانية مساحة وعاصمتها ميونخ، مشهورة بجبال الألب والصناعات المتقدمة.' },
  bw: { id: 'bw', name: 'Baden-Württemberg', capital: 'Stuttgart', nameAr: 'بادن-فورتمبيرغ', capitalAr: 'شتوتغارت', fact: 'مهد صناعة السيارات الألمانية (مرسيدس وبورش) والغابة السوداء Schwarzwald.' },
  nrw: { id: 'nrw', name: 'Nordrhein-Westfalen', capital: 'Düsseldorf', nameAr: 'شمال الراين - فستفاليا', capitalAr: 'دوسلدورف', fact: 'أكبر ولاية من حيث عدد السكان، وتضم كولونيا ودوسلدورف وحوض الرور الصناعي.' },
  he: { id: 'he', name: 'Hessen', capital: 'Wiesbaden', nameAr: 'هسن', capitalAr: 'فيسبادن', fact: 'تضم فرانكفورت، العاصمة المالية للاتحاد الأوروبي ومقر البنك المركزي الأوروبي.' },
  ni: { id: 'ni', name: 'Niedersachsen', capital: 'Hannover', nameAr: 'سكسونيا السفلى', capitalAr: 'هانوفر', fact: 'تتميز بأصفى لكنة ألمانية فصحى قياسية (Hochdeutsch) حول هانوفر.' },
  rp: { id: 'rp', name: 'Rheinland-Pfalz', capital: 'Mainz', nameAr: 'راينلاند بفالتس', capitalAr: 'ماينتس', fact: 'موطن يوهانس غوتنبرغ مخترع الطباعة، ومشهورة بوادي الراين الساحر وقلاعه.' },
  sn: { id: 'sn', name: 'Sachsen', capital: 'Dresden', nameAr: 'ساكسونيا', capitalAr: 'دريسدن', fact: 'تضم مدينتي درسدن (فلورنسا الإلب) ولايبتسيغ عاصمة الثقافة والموسيقى الكلاسيكية.' },
  th: { id: 'th', name: 'Thüringen', capital: 'Erfurt', nameAr: 'تورينغن', capitalAr: 'إرفورت', fact: 'القلب الأخضر لألمانيا، وموطن عمالقة الأدب غوته وشيلر ومدرسة الباوهاوس.' },
  st: { id: 'st', name: 'Sachsen-Anhalt', capital: 'Magdeburg', nameAr: 'ساكسونيا أنهالت', capitalAr: 'ماغدبورغ', fact: 'موطن حركة الإصلاح الديني بقيادة مارتن لوثر في فيتنبرغ.' },
  bb: { id: 'bb', name: 'Brandenburg', capital: 'Potsdam', nameAr: 'براندنبورغ', capitalAr: 'بوتسدام', fact: 'تحيط بالعاصمة برلين وتشتهر بقصور سانسوسي الملكية والبحيرات الطبيعية.' },
  mv: { id: 'mv', name: 'Mecklenburg-Vorpommern', capital: 'Schwerin', nameAr: 'مكلنبورغ فوربومرن', capitalAr: 'شفيرين', fact: 'أرض الألف بحيرة والشواطئ الخلابة على بحر البلطيق (Ostsee).' },
  sh: { id: 'sh', name: 'Schleswig-Holstein', capital: 'Kiel', nameAr: 'شلسفيغ هولشتاين', capitalAr: 'كيل', fact: 'تقع بين بحر الشمال وبحر البلطيق وتشتهر بأسابيع الإبحار العالمية في كيل.' },
  be: { id: 'be', name: 'Berlin', capital: 'Berlin', nameAr: 'برلين (العاصمة)', capitalAr: 'برلين', fact: 'عاصمة ألمانيا وأكبر مدنها، مركز السياسة والثقافة والتاريخ الأوروبي الحديث.' },
  hh: { id: 'hh', name: 'Hamburg', capital: 'Hamburg', nameAr: 'هامبورغ', capitalAr: 'هامبورغ', fact: 'ثاني أكبر مدن ألمانيا، تمتلك أكبر ميناء بحري وأكثر من 2500 جسر.' },
  hb: { id: 'hb', name: 'Bremen', capital: 'Bremen', nameAr: 'بريمن', capitalAr: 'بريمن', fact: 'أصغر الولايات الألمانية، مشهورة بقصة موسيقيي مدينة بريمن وتاريخ الهانزا التجاري.' },
  sl: { id: 'sl', name: 'Saarland', capital: 'Saarbrücken', nameAr: 'سارلاند', capitalAr: 'ساربروكن', fact: 'تقع على الحدود مع فرنسا وتتميز بثقافة ثنائية اللغة ومطبخ راقٍ.' },
};

export const DeutschLernenHeroBanner: React.FC<DeutschLernenHeroBannerProps> = ({
  onStartLearning,
  speechRate = 0.85
}) => {
  const [mottoLang, setMottoLang] = useState<'en' | 'de' | 'ar'>('en');
  const [showMapModal, setShowMapModal] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<StateInfo>(BUNDESLAENDER['by']);

  const handlePlayVoice = (text: string) => {
    playGermanAudio(text, speechRate);
  };

  const handlePlayBannerTheme = () => {
    playGermanAudio('Deutsch lernen. Ein Land, ein Volk, eine Zukunft. Willkommen!', speechRate);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#1c0c0b] via-[#240e0c] to-[#160807] border border-[#421b16] shadow-2xl p-6 sm:p-12 lg:p-16 text-center select-none my-6">
      
      {/* Dynamic Ambient Background: Full visibility with subtle warm glows & vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-[#1e0d0b]/80 to-[#120605] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-rose-900/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full bg-gradient-to-r from-amber-600/10 via-rose-700/10 to-amber-500/10 blur-3xl pointer-events-none" />

      {/* Decorative Sparkling Stars matching the Instagram Artwork */}
      <div className="absolute top-12 left-12 sm:left-24 animate-pulse pointer-events-none text-amber-200/80">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute top-20 right-14 sm:right-28 animate-pulse delay-300 pointer-events-none text-amber-100/75">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-16 sm:left-32 animate-pulse delay-700 pointer-events-none text-amber-300/65">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-16 sm:right-32 animate-pulse delay-500 pointer-events-none text-amber-200/70">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-8 animate-pulse delay-1000 pointer-events-none text-amber-400/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-8 animate-pulse delay-700 pointer-events-none text-amber-400/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>

      {/* Top Banner Tag & Audio trigger */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c1310]/80 backdrop-blur border border-[#4d211a] text-xs text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold tracking-wider uppercase font-mono">German Unity & Language Hub</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowMapModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2c1310]/80 hover:bg-[#3d1a15] border border-[#4d211a] text-xs text-amber-300 transition"
            title="خريطة الولايات الألمانية"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">16 Bundesländer</span>
          </button>

          <button
            onClick={handlePlayBannerTheme}
            title="استمع إلى شعار المنصة باللكنة الألمانية"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c1310]/80 hover:bg-[#3d1a15] border border-[#4d211a] text-xs text-amber-300 transition transform hover:scale-105 active:scale-95"
          >
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-[11px]">Aussprache</span>
          </button>
        </div>
      </div>

      {/* Central Visual Showcase: Clear, uncluttered background with German Flag Flanks & Pure Typography */}
      <div className="relative z-10 my-4 sm:my-8 flex items-center justify-center">
        
        {/* Left German Flag Emblem Accent */}
        <div 
          className="hidden md:block absolute -left-2 lg:left-4 top-1/2 -translate-y-1/2 transform -rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer group"
          onClick={() => handlePlayVoice('Die deutsche Flagge: Schwarz, Rot, Gold')}
          title="Schwarz, Rot, Gold"
        >
          <div className="w-1.5 h-32 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 rounded-full shadow-md z-30 relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gradient-to-tr from-amber-400 to-amber-100 rounded-full shadow" />
          </div>
          <svg className="w-20 lg:w-28 h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] filter group-hover:brightness-110 transition-all absolute top-2 left-1" viewBox="0 0 160 120" fill="none">
            <defs>
              <linearGradient id="flagL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="40%" stopColor="#000000" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M15 15 C 45 5, 80 25, 115 12 C 135 5, 148 10, 150 15 L 146 45 C 130 40, 110 52, 85 45 C 50 35, 30 48, 15 45 Z" fill="#121214" />
            <path d="M15 45 C 30 48, 50 35, 85 45 C 110 52, 130 40, 146 45 L 142 75 C 126 70, 106 82, 80 75 C 45 65, 28 78, 15 75 Z" fill="#dc2626" />
            <path d="M15 75 C 28 78, 45 65, 80 75 C 106 82, 126 70, 142 75 L 138 105 C 120 100, 100 112, 75 105 C 40 95, 25 108, 15 105 Z" fill="#fbbf24" />
            <path d="M15 15 C 45 5, 80 25, 115 12 C 135 5, 148 10, 150 15 L 138 105 C 120 100, 100 112, 75 105 C 40 95, 25 108, 15 105 Z" fill="url(#flagL)" />
          </svg>
        </div>

        {/* Centerpiece: Pure, Massive, Stunning "DEUTSCH LERNEN" Typography from the Artwork */}
        <div className="max-w-3xl mx-auto py-2">
          
          <h1 className="font-extrabold tracking-tight flex flex-col items-center justify-center leading-none">
            {/* DEUTSCH with mauve/rose/champagne gradient */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-wider font-sans font-black bg-gradient-to-b from-[#e8bcc9] via-[#e2b0a2] to-[#ce7f8f] bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] filter hover:brightness-105 transition">
              DEUTSCH
            </span>
            {/* LERNEN with warm bright golden gradient */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-wider font-sans font-black bg-gradient-to-b from-[#fff3b0] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_12px_30px_rgba(245,158,11,0.35)] -mt-2 sm:-mt-4 filter hover:brightness-105 transition">
              LERNEN
            </span>
          </h1>

          {/* Slogan: "One nation, one people, one future" */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl italic font-serif tracking-wide transition-all drop-shadow-md">
              {mottoLang === 'en' && (
                <>
                  <span className="text-[#d89daf]">One nation, one people, </span>
                  <span className="text-[#f59e0b] font-semibold">one future</span>
                </>
              )}
              {mottoLang === 'de' && (
                <>
                  <span className="text-[#d89daf]">Ein Land, ein Volk, </span>
                  <span className="text-[#f59e0b] font-semibold">eine Zukunft</span>
                </>
              )}
              {mottoLang === 'ar' && (
                <>
                  <span className="text-[#d89daf]">أمة واحدة، مجتمع واحد، </span>
                  <span className="text-[#f59e0b] font-semibold">مستقبل واحد واعد</span>
                </>
              )}
            </p>

            {/* Slogan Language Toggle pills */}
            <div className="flex items-center gap-1.5 mt-4 bg-[#28110f]/90 p-1.5 rounded-full border border-[#4d211a] shadow-inner">
              <button
                onClick={() => setMottoLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-mono transition ${mottoLang === 'en' ? 'bg-amber-400 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
              <button
                onClick={() => { setMottoLang('de'); handlePlayVoice('Ein Land, ein Volk, eine Zukunft'); }}
                className={`px-3 py-1 rounded-full text-xs font-mono transition ${mottoLang === 'de' ? 'bg-amber-400 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Deutsch
              </button>
              <button
                onClick={() => setMottoLang('ar')}
                className={`px-3 py-1 rounded-full text-xs font-mono transition ${mottoLang === 'ar' ? 'bg-amber-400 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}`}
              >
                العربية
              </button>
            </div>
          </div>

        </div>

        {/* Right German Flag Emblem Accent */}
        <div 
          className="hidden md:block absolute -right-2 lg:right-4 top-1/2 -translate-y-1/2 transform rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer group"
          onClick={() => handlePlayVoice('Einigkeit und Recht und Freiheit')}
          title="Einigkeit und Recht und Freiheit"
        >
          <div className="w-1.5 h-32 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 rounded-full shadow-md z-30 relative ml-auto">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gradient-to-tr from-amber-400 to-amber-100 rounded-full shadow" />
          </div>
          <svg className="w-20 lg:w-28 h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] filter group-hover:brightness-110 transition-all absolute top-2 right-1" viewBox="0 0 160 120" fill="none">
            <defs>
              <linearGradient id="flagR" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="80%" stopColor="#000000" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path d="M10 15 C 30 10, 50 25, 75 15 C 105 5, 130 20, 145 15 L 145 45 C 130 50, 105 35, 75 45 C 50 55, 30 40, 10 45 Z" fill="#121214" />
            <path d="M10 45 C 30 40, 50 55, 75 45 C 105 35, 130 50, 145 45 L 145 75 C 130 80, 105 65, 75 75 C 50 85, 30 70, 10 75 Z" fill="#dc2626" />
            <path d="M10 75 C 30 70, 50 85, 75 75 C 105 65, 130 80, 145 75 L 145 105 C 130 110, 105 95, 75 105 C 50 115, 30 100, 10 105 Z" fill="#fbbf24" />
            <path d="M10 15 C 30 10, 50 25, 75 15 C 105 5, 130 20, 145 15 L 145 105 C 130 110, 105 95, 75 105 C 50 115, 30 100, 10 105 Z" fill="url(#flagR)" />
          </svg>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-8 pt-4">
        <button
          onClick={onStartLearning}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm lg:text-base shadow-xl shadow-amber-950/60 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
        >
          <span>ابدأ التعلم الآن (A1 - C1)</span>
          <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={() => {
            const el = document.getElementById('fundamentals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-4 rounded-2xl bg-[#2c1310]/90 hover:bg-[#3d1a15] border border-[#52231b] text-amber-200 text-sm font-bold transition flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>الأساسيات: الأيام، الشهور والأرقام</span>
        </button>
      </div>

      {/* Optional Interactive German Geography Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#1d0d0b] border border-[#4d211a] rounded-3xl p-6 shadow-2xl text-right">
            <div className="flex items-center justify-between pb-4 border-b border-[#4d211a]">
              <button
                onClick={() => setShowMapModal(false)}
                className="p-1.5 rounded-xl bg-[#2d1411] hover:bg-[#3d1a15] text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>الولايات الألمانية الـ 16 (Bundesländer)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-5 max-h-[50vh] overflow-y-auto pr-1">
              {Object.values(BUNDESLAENDER).map((state) => (
                <button
                  key={state.id}
                  onClick={() => {
                    setSelectedState(state);
                    handlePlayVoice(`${state.name}, Hauptstadt ${state.capital}`);
                  }}
                  className={`p-2.5 rounded-xl text-right border transition ${
                    selectedState.id === state.id
                      ? 'bg-[#3d1a15] border-amber-400 text-amber-300 shadow'
                      : 'bg-[#26110f] border-[#441d18] text-slate-300 hover:border-amber-400/50'
                  }`}
                >
                  <span className="font-bold text-xs block text-white">{state.name}</span>
                  <span className="text-[10px] text-amber-300/80 block mt-0.5">{state.nameAr}</span>
                  <span className="text-[9px] text-slate-400 block font-mono">العاصمة: {state.capital}</span>
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-[#26110f] border border-[#441d18]">
              <div className="flex items-center justify-between mb-1">
                <button
                  onClick={() => handlePlayVoice(`${selectedState.name}, Hauptstadt ${selectedState.capital}`)}
                  className="p-1.5 rounded-lg bg-[#3a1a15] hover:bg-[#4d231c] text-amber-300 transition"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-amber-300">
                  {selectedState.name} ({selectedState.nameAr}) - العاصمة {selectedState.capital}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                {selectedState.fact}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
