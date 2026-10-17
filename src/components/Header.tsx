import React, { useState } from 'react';
import { Volume2, Award, User, LogOut, Cloud, LogIn, LayoutDashboard, Puzzle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  masteredCount: number;
  totalVocabCount: number;
  speechRate: number;
  onToggleSpeechRate: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenAuth: () => void;
  onOpenDashboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  masteredCount,
  totalVocabCount,
  speechRate,
  onToggleSpeechRate,
  onNavigate,
  onOpenAuth,
  onOpenDashboard
}) => {
  const { user, profile, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-[#0d1322]/95 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5 flex items-center justify-between gap-6 transition-all">
      {/* Zone 1: Single text element Brand mark */}
      <div 
        onClick={() => onNavigate('welcome')} 
        className="flex items-center gap-3 cursor-pointer select-none shrink-0"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-600 to-slate-950 p-[2px] shadow-lg flex items-center justify-center">
          <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
            <span className="font-black text-amber-400 text-sm tracking-wider">DE</span>
          </div>
        </div>
        <div>
          <h1 className="font-black text-base lg:text-lg text-white tracking-tight leading-none font-mono">
            DEUTSCH LERNEN
          </h1>
          <p className="text-[10px] text-amber-400 font-medium tracking-wide mt-1">
            One nation, one people, one future
          </p>
        </div>
      </div>

      {/* Zone 2: Navigation links */}
      <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-300">
        <button 
          onClick={() => onNavigate('welcome')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          البداية
        </button>
        <button 
          onClick={() => onNavigate('fundamentals')}
          className="hover:text-amber-400 text-amber-300/90 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 font-bold"
        >
          <span>الأيام والشهور والأرقام</span>
        </button>
        <button 
          onClick={() => onNavigate('essential2000')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 font-bold text-rose-400"
        >
          <span>أهم 2000 كلمة</span>
        </button>
        <button 
          onClick={() => onNavigate('levels')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          المستويات
        </button>
        <button 
          onClick={() => onNavigate('vocab')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          البطاقات
        </button>
        <button 
          onClick={() => onNavigate('grammar')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          استوديو القواعد
        </button>
        <button 
          onClick={() => onNavigate('satzbau')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-slate-300"
        >
          <Puzzle className="w-3 h-3 text-amber-400" />
          <span>مختبر الجمل</span>
        </button>
        <button 
          onClick={() => onNavigate('homework')}
          className="text-amber-400 hover:text-amber-300 transition-colors font-bold whitespace-nowrap shrink-0"
        >
          الواجبات
        </button>
        <button 
          onClick={() => onNavigate('dictionary')}
          className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          القاموس
        </button>
      </nav>

      {/* Zone 3: Primary Action & Learning Controls */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          onClick={onToggleSpeechRate}
          title="سرعة نطق الصوت الألماني"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 font-mono transition-colors"
        >
          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
          <span>{speechRate}x</span>
        </button>

        <button
          onClick={onOpenDashboard}
          title="افتح لوحة تقدم الطالب والشهادة"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-xs text-slate-300 transition"
        >
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>المتقن:</span>
          <span className="font-bold text-emerald-400 font-mono">{masteredCount}/{totalVocabCount}</span>
        </button>

        {/* User Account / Firebase Auth Status */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-xs text-white transition"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs uppercase">
                {user.email ? user.email[0] : 'U'}
              </div>
              <span className="max-w-[90px] truncate hidden md:inline">
                {profile?.displayName || user.displayName || user.email}
              </span>
              <Cloud className="w-3 h-3 text-emerald-400" />
            </button>

            {showUserMenu && (
              <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl text-right z-50 animate-fadeIn">
                <div className="border-b border-slate-800 pb-2 mb-2">
                  <p className="font-bold text-xs text-white truncate">
                    {profile?.displayName || user.displayName || 'طالب الأكاديمية'}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{user.email}</p>
                  <span className="inline-block mt-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    مزامنة السحابة مفعلة ✓
                  </span>
                </div>

                <button
                  onClick={() => {
                    onOpenDashboard();
                    setShowUserMenu(false);
                  }}
                  className="w-full flex items-center justify-between text-xs text-amber-300 hover:text-amber-200 p-2 rounded-xl hover:bg-slate-800/80 transition mb-1"
                >
                  <span>لوحة الطالب والشهادة</span>
                  <LayoutDashboard className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    signOut();
                    setShowUserMenu(false);
                  }}
                  className="w-full flex items-center justify-between text-xs text-rose-400 hover:text-rose-300 p-2 rounded-xl hover:bg-slate-800/80 transition"
                >
                  <span>تسجيل الخروج</span>
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs text-amber-300 font-bold transition font-mono"
          >
            <LogIn className="w-3.5 h-3.5 text-amber-400" />
            <span>Login</span>
          </button>
        )}

        <button
          onClick={() => onNavigate('homework')}
          className="px-3.5 sm:px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs lg:text-sm transition-all shadow-md shadow-rose-950 whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span>ابدأ الواجب</span>
        </button>
      </div>
    </header>
  );
};
