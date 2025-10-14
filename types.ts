
export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple-choice',
  ESSAY = 'essay',
}

export interface AnswerOption {
  text: string;
}

export interface Question {
  text: string;
  type: QuestionType;
  options?: AnswerOption[];
  correctAnswerIndex?: number;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: {
    imageUrl: string;
    summary: string;
    subSections: {
      title: string;
      text: string;
      imageUrl?: string;
    }[];
  };
  quiz: Quiz;
}

export type View =
  | { name: 'main_menu' }
  | { name: 'chapter'; data: Chapter }
  | { name: 'quiz'; data: { quiz: Quiz; chapterTitle: string; chapterId: string } }
  | { name: 'result'; data: { score: number; mcqTotal: number; chapterId: string } };
