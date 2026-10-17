import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FundamentalsSection } from './components/FundamentalsSection';
import { Essential2000Section } from './components/Essential2000Section';
import { LevelSelector } from './components/LevelSelector';
import { FlashcardSection } from './components/FlashcardSection';
import { GrammarStudio } from './components/GrammarStudio';
import { SatzbauStudio } from './components/SatzbauStudio';
import { HomeworkSection } from './components/HomeworkSection';
import { AcademyDictionary } from './components/AcademyDictionary';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { StudentDashboardModal } from './components/StudentDashboardModal';
import { VOCABULARY_DATA, GRAMMAR_RULES, HOMEWORK_QUESTIONS } from './data/curriculum';
import { Level } from './types';

function AcademyApp() {
  const { user, profile, cloudMasteredIds, saveMasteredWords } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const [currentLevel, setCurrentLevel] = useState<Level>(() => {
    try {
      const saved = localStorage.getItem('shady_academy_level');
      if (saved === 'A1' || saved === 'A2' || saved === 'B1' || saved === 'B2' || saved === 'C1') {
        return saved;
      }
    } catch {}
    return 'A1';
  });

  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('shady_academy_mastered');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {}
    return new Set();
  });

  const [speechRate, setSpeechRate] = useState<number>(0.85);

  // Sync with cloud progress if user is logged in
  useEffect(() => {
    if (cloudMasteredIds && cloudMasteredIds.size > 0) {
      setMasteredIds((prev) => {
        const merged = new Set([...Array.from(prev), ...Array.from(cloudMasteredIds)]);
        try {
          localStorage.setItem('shady_academy_mastered', JSON.stringify(Array.from(merged)));
        } catch {}
        return merged;
      });
    }
  }, [cloudMasteredIds]);

  useEffect(() => {
    try {
      localStorage.setItem('shady_academy_level', currentLevel);
    } catch {}
  }, [currentLevel]);

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      const arr = Array.from(next);
      try {
        localStorage.setItem('shady_academy_mastered', JSON.stringify(arr));
      } catch {}

      // Persist to Firebase if logged in
      if (user) {
        saveMasteredWords(arr).catch((err) => console.error('Cloud save failed:', err));
      }
      return next;
    });
  };

  const handleToggleSpeechRate = () => {
    setSpeechRate((prev) => {
      if (prev === 0.7) return 0.85;
      if (prev === 0.85) return 1.0;
      return 0.7;
    });
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const vocabCounts: Record<Level, number> = {
    A1: VOCABULARY_DATA.filter((v) => v.level === 'A1').length,
    A2: VOCABULARY_DATA.filter((v) => v.level === 'A2').length,
    B1: VOCABULARY_DATA.filter((v) => v.level === 'B1').length,
    B2: VOCABULARY_DATA.filter((v) => v.level === 'B2').length,
    C1: VOCABULARY_DATA.filter((v) => v.level === 'C1').length,
  };

  // Active level vocab & rules
  const currentLevelVocab = VOCABULARY_DATA.filter((v) => v.level === currentLevel);
  const currentLevelRules = GRAMMAR_RULES.filter((r) => r.level === currentLevel);

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Header with Firebase Auth & Dashboard trigger */}
      <Header
        masteredCount={masteredIds.size}
        totalVocabCount={VOCABULARY_DATA.length}
        speechRate={speechRate}
        onToggleSpeechRate={handleToggleSpeechRate}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Welcome & Onboarding Hero */}
        <HeroSection
          currentLevel={currentLevel}
          onSelectLevel={setCurrentLevel}
          onNavigate={handleNavigate}
          speechRate={speechRate}
        />

        {/* 2. Fundamentals Section (Days, Months, Seasons, Numbers 0-100 Explorer) */}
        <FundamentalsSection
          speechRate={speechRate}
        />

        {/* 3. Essential 2,000 Words Encyclopedia */}
        <Essential2000Section
          speechRate={speechRate}
          masteredIds={masteredIds}
          onToggleMastered={toggleMastered}
        />

        {/* 4. Levels Selection */}
        <LevelSelector
          currentLevel={currentLevel}
          onSelectLevel={setCurrentLevel}
          vocabCounts={vocabCounts}
        />

        {/* 5. Flashcards Section */}
        <FlashcardSection
          vocabList={currentLevelVocab}
          currentLevel={currentLevel}
          masteredIds={masteredIds}
          onToggleMastered={toggleMastered}
          speechRate={speechRate}
        />

        {/* 6. Grammar Studio */}
        <GrammarStudio
          rules={currentLevelRules.length > 0 ? currentLevelRules : GRAMMAR_RULES}
          currentLevel={currentLevel}
          speechRate={speechRate}
        />

        {/* 7. Satzbau-Studio (Sentence Structure Lab) */}
        <SatzbauStudio
          currentLevel={currentLevel}
          speechRate={speechRate}
        />

        {/* 8. Homework & Interactive Exercises */}
        <HomeworkSection
          questions={HOMEWORK_QUESTIONS}
          currentLevel={currentLevel}
          speechRate={speechRate}
        />

        {/* 9. Academy Dictionary */}
        <AcademyDictionary
          vocabulary={VOCABULARY_DATA}
          speechRate={speechRate}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Student Dashboard & Certificate Modal */}
      <StudentDashboardModal
        isOpen={isDashboardModalOpen}
        onClose={() => setIsDashboardModalOpen(false)}
        currentLevel={currentLevel}
        masteredCount={masteredIds.size}
        totalVocabCount={VOCABULARY_DATA.length}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AcademyApp />
    </AuthProvider>
  );
}
