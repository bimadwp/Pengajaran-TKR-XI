
import React, { useState, useCallback } from 'react';
import { MainMenu } from './components/MainMenu';
import { ChapterView } from './components/ChapterView';
import { QuizView } from './components/QuizView';
import { EvaluationResult } from './components/EvaluationResult';
import { CHAPTERS, FINAL_EVALUATION_QUIZ } from './constants';
import type { Chapter, Quiz, View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>({ name: 'main_menu' });

  const handleSelectChapter = useCallback((chapter: Chapter) => {
    setCurrentView({ name: 'chapter', data: chapter });
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz, chapterTitle: string) => {
    setCurrentView({ name: 'quiz', data: { quiz, chapterTitle } });
  }, []);
  
  const handleStartFinalEvaluation = useCallback(() => {
    setCurrentView({ name: 'quiz', data: { quiz: FINAL_EVALUATION_QUIZ, chapterTitle: 'Evaluasi Akhir' } });
  }, []);

  const handleQuizComplete = useCallback((score: number, mcqTotal: number, essayTotal: number) => {
    setCurrentView({ name: 'result', data: { score, mcqTotal, essayTotal } });
  }, []);

  const handleBackToMenu = useCallback(() => {
    setCurrentView({ name: 'main_menu' });
  }, []);

  const renderContent = () => {
    switch (currentView.name) {
      case 'chapter':
        return (
          <ChapterView
            chapter={currentView.data}
            onStartQuiz={() => handleStartQuiz(currentView.data.quiz, currentView.data.title)}
            onBack={handleBackToMenu}
          />
        );
      case 'quiz':
        return (
          <QuizView
            quiz={currentView.data.quiz}
            chapterTitle={currentView.data.chapterTitle}
            onQuizComplete={handleQuizComplete}
            onBack={handleBackToMenu}
          />
        );
      case 'result':
        return (
          <EvaluationResult
            score={currentView.data.score}
            mcqTotal={currentView.data.mcqTotal}
            essayTotal={currentView.data.essayTotal}
            onBackToMenu={handleBackToMenu}
          />
        );
      case 'main_menu':
      default:
        return (
          <MainMenu
            chapters={CHAPTERS}
            onSelectChapter={handleSelectChapter}
            onStartFinalEvaluation={handleStartFinalEvaluation}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;