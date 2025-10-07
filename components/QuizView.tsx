
import React, { useState } from 'react';
import type { Quiz, AnswerOption } from '../types';
import { QuestionType } from '../types';

interface QuizViewProps {
  quiz: Quiz;
  chapterTitle: string;
  onQuizComplete: (score: number, mcqTotal: number, essayTotal: number) => void;
  onBack: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ quiz, chapterTitle, onQuizComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isMultipleChoice = currentQuestion.type === QuestionType.MULTIPLE_CHOICE;
  const mcqQuestionsCount = quiz.questions.filter(q => q.type === QuestionType.MULTIPLE_CHOICE).length;
  const essayQuestionsCount = quiz.questions.filter(q => q.type === QuestionType.ESSAY).length;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (isMultipleChoice && answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onQuizComplete(score, mcqQuestionsCount, essayQuestionsCount);
    }
  };

  const getButtonClass = (optionIndex: number) => {
    if (!isAnswered) {
      return 'bg-slate-700 hover:bg-slate-600';
    }
    if (optionIndex === currentQuestion.correctAnswerIndex) {
      return 'bg-green-600';
    }
    if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.correctAnswerIndex) {
      return 'bg-red-600';
    }
    return 'bg-slate-700 opacity-50';
  };

  return (
    <div className="animate-fade-in w-full max-w-3xl mx-auto bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
      <header className="mb-6 pb-4 border-b border-slate-700 flex justify-between items-center">
        <div>
           <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">{quiz.title}</h1>
           <p className="text-slate-400">{chapterTitle}</p>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
          &larr; Batal
        </button>
      </header>
      
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-4">
          <p className="text-lg font-semibold text-slate-300">
            Soal {currentQuestionIndex + 1} dari {quiz.questions.length}
          </p>
          {mcqQuestionsCount > 0 && <p className="text-sm font-mono bg-slate-900 px-3 py-1 rounded-full text-cyan-300">Skor: {score}</p>}
        </div>
        <p className="text-xl text-white bg-slate-900/50 p-4 rounded-lg min-h-[100px] flex items-center">
          {currentQuestion.text}
        </p>
      </div>
      
      {isMultipleChoice ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {currentQuestion.options?.map((option: AnswerOption, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 text-white font-medium ${getButtonClass(index)} ${isAnswered ? 'cursor-not-allowed' : 'transform hover:scale-105'}`}
            >
              <span className="font-mono mr-3">{String.fromCharCode(97 + index)}.</span>
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <textarea
            rows={5}
            className="w-full bg-slate-900 p-4 rounded-lg text-white border-2 border-slate-700 focus:border-cyan-500 focus:ring-cyan-500 transition-colors"
            placeholder="Ketik jawaban Anda di sini..."
            onFocus={() => setIsAnswered(true)} // Consider essay answered on focus
          ></textarea>
           <p className="text-xs text-slate-500 mt-2">Jawaban esai tidak dinilai secara otomatis.</p>
        </div>
      )}
      
      {isAnswered && (
        <div className="text-right">
          <button
            onClick={handleNextQuestion}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          >
            {currentQuestionIndex < quiz.questions.length - 1 ? 'Soal Berikutnya' : 'Selesai'}
          </button>
        </div>
      )}
    </div>
  );
};
