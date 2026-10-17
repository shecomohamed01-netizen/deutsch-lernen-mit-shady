import React, { useState, useEffect } from 'react';
import { 
  X, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Printer, 
  Calendar, 
  Sparkles, 
  ShieldCheck,
  TrendingUp,
  User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Level } from '../types';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

interface StudentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: Level;
  masteredCount: number;
  totalVocabCount: number;
}

interface SubmissionRecord {
  id: string;
  level: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
}

export const StudentDashboardModal: React.FC<StudentDashboardModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  masteredCount,
  totalVocabCount
}) => {
  const { user, profile } = useAuth();
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'stats' | 'certificate'>('stats');

  useEffect(() => {
    if (!isOpen || !user) return;

    const fetchSubmissions = async () => {
      try {
        const subCol = collection(db, 'users', user.uid, 'homework_submissions');
        const snap = await getDocs(subCol);
        const list: SubmissionRecord[] = [];
        snap.forEach((doc) => {
          list.push(doc.data() as SubmissionRecord);
        });
        list.sort((a, b) => new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime());
        setSubmissions(list);
      } catch (err) {
        console.warn('Could not load submissions:', err);
      }
    };

    fetchSubmissions();
  }, [isOpen, user]);

  if (!isOpen) return null;

  const studentName = profile?.displayName || user?.displayName || 'طالب الأكاديمية المتميز';
  const masteryPercentage = Math.round((masteredCount / Math.max(1, totalVocabCount)) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl text-right my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
              لوحة تحكم وإنجازات الطالب
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {studentName}
            </h3>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-slate-950 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'stats'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>إحصائيات التقدم والواجبات</span>
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'certificate'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>الشهادة الأكاديمية المعتمدة</span>
          </button>
        </div>

        {/* TAB 1: Statistics & Homework History */}
        {activeTab === 'stats' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">المستوى الفعلي</span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                  {currentLevel}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">معتمد بالأكاديمية</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">الكلمات المتقنة</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                  {masteredCount} / {totalVocabCount}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">({masteryPercentage}%)</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-400 block mb-1">الواجبات المنجزة</span>
                <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono">
                  {submissions.length > 0 ? submissions.length : profile?.completedHomeworkCount || 0}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">واجب يومي ذكي</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">نسبة استيعاب وحفظ قاموس الأكاديمية</span>
                <span className="text-amber-400 font-mono">{masteryPercentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(5, masteryPercentage))}%` }}
                />
              </div>
            </div>

            {/* Recent Homework Submissions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400">سجل نتائج الواجبات المنجزة:</h4>
              {submissions.length > 0 ? (
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {submissions.map((sub, idx) => (
                    <div
                      key={sub.id || idx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-white block">
                          واجب مستوى {sub.level}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {sub.completedAt ? new Date(sub.completedAt).toLocaleDateString('ar-EG') : 'اليوم'}
                        </span>
                      </div>
                      <div className="text-left font-mono">
                        <span className="text-emerald-400 font-bold text-sm">
                          {sub.score}/{sub.totalQuestions}
                        </span>
                        <span className="text-slate-400 text-[10px] block">
                          ({sub.percentage}%)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center text-xs text-slate-500">
                  {user 
                    ? 'لم تقم بحل أي واجب بعد. توجه إلى قسم الواجبات والتمارين وابدأ الآن!'
                    : 'اعمل Login لحفظ ومزامنة سجل الواجبات سحابياً في حسابك.'}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Academic Certificate */}
        {activeTab === 'certificate' && (
          <div className="space-y-6">
            {/* The Certificate Sheet */}
            <div 
              id="academic-certificate-view"
              className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-4 border-amber-400/60 text-center space-y-4 shadow-2xl"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-3 right-3 text-amber-400/40 text-lg">✦</div>
              <div className="absolute top-3 left-3 text-amber-400/40 text-lg">✦</div>
              <div className="absolute bottom-3 right-3 text-amber-400/40 text-lg">✦</div>
              <div className="absolute bottom-3 left-3 text-amber-400/40 text-lg">✦</div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-600 to-slate-950 p-[2px] mx-auto shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-amber-400 text-sm">
                  DE
                </div>
              </div>

              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block font-mono">
                DEUTSCH LERNEN Akademie | دويتش ليرنن
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                شهادة إنجاز واحتراف أكاديمي
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                تشهد إدارة أكاديمية دويتش ليرنن (DEUTSCH LERNEN) بأن الطالب المتميز: <br />
                <span className="text-lg font-black text-amber-300 font-mono underline decoration-amber-400/50 block my-1">
                  {studentName}
                </span>
                قد أتم بنجاح متطلبات ودراسة المستوى الأكاديمي{' '}
                <span className="font-black text-white font-mono">({currentLevel})</span> للغة الألمانية،
                مع إتقان القواعد الأساسية والمفردات الصوتية واجتياز التمارين والواجبات اليومية.
              </p>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-4">
                <div>
                  <span className="block font-bold text-slate-300">أستاذ اللغة:</span>
                  <span>DEUTSCH LERNEN Academic Coach</span>
                </div>
                <div className="w-16 h-16 rounded-full border border-dashed border-amber-400/60 flex items-center justify-center text-[9px] text-amber-400 font-bold uppercase rotate-12">
                  DEUTSCH LERNEN
                </div>
                <div className="text-left font-mono">
                  <span className="block font-bold text-slate-300 font-sans">تاريخ التوثيق:</span>
                  <span>{new Date().toISOString().split('T')[0]}</span>
                </div>
              </div>
            </div>

            {/* Print Action */}
            <div className="flex justify-center pt-2">
              <button
                onClick={handlePrint}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-amber-950/40"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة أو تحميل الشهادة بصيغة PDF</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
