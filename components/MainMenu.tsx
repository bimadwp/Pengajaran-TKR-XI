import React from 'react';
import type { Chapter } from '../types';
import { FinalExamIcon } from './icons';

interface MainMenuProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  onStartFinalEvaluation: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ chapters, onSelectChapter, onStartFinalEvaluation }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">📘 PSPTK Interaktif XI TKR</h1>
        <p className="text-slate-400 mt-2 text-lg">Aplikasi Pembelajaran Interaktif</p>
        <p className="text-xl font-semibold text-slate-200 mt-4">SMK MUHAMMADIYAH 3 NGANJUK</p>
      </header>
      
      <main className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className="group bg-slate-800 p-6 rounded-lg shadow-lg hover:bg-slate-700 transition-all duration-300 flex items-center space-x-4 transform hover:-translate-y-1"
          >
            <div className="bg-slate-900 p-4 rounded-full">
              <chapter.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-left text-white">{chapter.title}</h2>
              <p className="text-slate-400 text-left">Materi & Latihan</p>
            </div>
          </button>
        ))}
         <button
            onClick={onStartFinalEvaluation}
            className="md:col-span-2 group bg-cyan-600 p-6 rounded-lg shadow-lg hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center space-x-4 transform hover:-translate-y-1"
          >
            <FinalExamIcon className="w-8 h-8 text-white" />
            <div>
              <h2 className="text-xl font-semibold text-white">Evaluasi Akhir</h2>
              <p className="text-cyan-100">Uji pemahaman semua bab</p>
            </div>
          </button>
      </main>

      <footer className="mt-12 text-center text-slate-500">
        <p>Dibuat untuk <span className="font-semibold text-slate-400">SMK MUHAMMADIYAH 3 NGANJUK</span></p>
      </footer>
    </div>
  );
};