export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type Article = 'der' | 'die' | 'das' | '';

export interface VocabItem {
  id: string;
  art: Article;
  ger: string;
  plu: string;
  arb: string;
  level: Level;
  category: string;
  example: string;
  exampleAr: string;
  note?: string;
}

export interface GrammarRule {
  id: string;
  level: Level;
  title: string;
  subtitle: string;
  summary: string;
  details: {
    heading: string;
    description: string;
    examples: { ger: string; arb: string; highlight?: string }[];
  }[];
  tips?: string[];
}

export type QuestionType = 'article' | 'translation' | 'sentence' | 'listening';

export interface HomeworkQuestion {
  id: string;
  level: Level;
  type: QuestionType;
  prompt: string;
  instruction: string;
  targetWord?: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
  sentenceWords?: string[]; // For sentence reordering
}

export interface VerbConjugation {
  verb: string;
  meaning: string;
  level: Level;
  praesens: {
    ich: string;
    du: string;
    er_sie_es: string;
    wir: string;
    ihr: string;
    sie_Sie: string;
  };
  perfekt: string;
  beispiel: string;
  beispielAr: string;
}

export interface SentenceExercise {
  id: string;
  level: Level;
  germanFull: string;
  arabicTranslation: string;
  tokens: string[];
  grammarHint: string;
  structureExplanation: string;
}
