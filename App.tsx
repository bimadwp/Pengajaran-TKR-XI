
import React, { useState, useCallback } from 'react';
import { MainMenu } from './components/MainMenu';
import { ChapterView } from './components/ChapterView';
import { QuizView } from './components/QuizView';
import { EvaluationResult } from './components/EvaluationResult';
import { CHAPTERS, FINAL_EVALUATION_QUIZ } from './constants';
import type { Chapter, Quiz, View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>({ name: 'main_menu' });
  const [quizResults, setQuizResults] = useState<Record<string, { score: number; mcqTotal: number }>>({});

  const handleSelectChapter = useCallback((chapter: Chapter) => {
    setCurrentView({ name: 'chapter', data: chapter });
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz, chapterTitle: string, chapterId: string) => {
    // Prevent starting quiz if already completed
    if (quizResults[chapterId]) return;
    setCurrentView({ name: 'quiz', data: { quiz, chapterTitle, chapterId } });
  }, [quizResults]);
  
  const handleStartFinalEvaluation = useCallback(() => {
    // Prevent starting final evaluation if already completed
    if (quizResults['final_evaluation']) {
       // If already taken, just show the result
       const result = quizResults['final_evaluation'];
       setCurrentView({ name: 'result', data: { score: result.score, mcqTotal: result.mcqTotal, chapterId: 'final_evaluation' } });
       return;
    }
    setCurrentView({ name: 'quiz', data: { quiz: FINAL_EVALUATION_QUIZ, chapterTitle: 'Evaluasi Akhir', chapterId: 'final_evaluation' } });
  }, [quizResults]);

  const handleQuizComplete = useCallback((score: number, mcqTotal: number, chapterId: string) => {
    setQuizResults(prev => ({ ...prev, [chapterId]: { score, mcqTotal } }));
    setCurrentView({ name: 'result', data: { score, mcqTotal, chapterId } });
  }, []);

  const handleBackToMenu = useCallback(() => {
    setCurrentView({ name: 'main_menu' });
  }, []);

  const renderContent = () => {
    switch (currentView.name) {
      case 'chapter':
        const chapterResult = quizResults[currentView.data.id];
        return (
          <ChapterView
            chapter={currentView.data}
            onStartQuiz={() => handleStartQuiz(currentView.data.quiz, currentView.data.title, currentView.data.id)}
            onBack={handleBackToMenu}
            isCompleted={!!chapterResult}
            result={chapterResult}
          />
        );
      case 'quiz':
        return (
          <QuizView
            quiz={currentView.data.quiz}
            chapterTitle={currentView.data.chapterTitle}
            onQuizComplete={(score, mcqTotal) => handleQuizComplete(score, mcqTotal, currentView.data.chapterId)}
            onBack={handleBackToMenu}
          />
        );
      case 'result':
        return (
          <EvaluationResult
            score={currentView.data.score}
            mcqTotal={currentView.data.mcqTotal}
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
            quizResults={quizResults}
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
