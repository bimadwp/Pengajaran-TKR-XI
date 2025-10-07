
import React, { useState, useCallback } from 'react';
import type { Chapter } from '../types';
import { GoogleGenAI } from '@google/genai';
import { SparkleIcon, SpinnerIcon } from './icons';

interface ChapterViewProps {
  chapter: Chapter;
  onStartQuiz: () => void;
  onBack: () => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onStartQuiz, onBack }) => {
  const [aiImages, setAiImages] = useState<{ [key: number]: string | null }>({});
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  const handleGenerateIllustration = useCallback(async (subsectionTitle: string, index: number) => {
    setLoadingImages(prev => ({ ...prev, [index]: true }));
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: `Ilustrasi teknis dari "${subsectionTitle}" pada sistem otomotif kendaraan ringan. Gaya diagram yang bersih, berwarna, dan jelas untuk materi pembelajaran. Latar belakang gelap agar kontras.`,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '16:9',
        },
      });

      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
      
      setAiImages(prev => ({ ...prev, [index]: imageUrl }));
    } catch (e) {
      console.error("Error generating image:", e);
      setError("Gagal membuat ilustrasi. Silakan coba lagi.");
    } finally {
      setLoadingImages(prev => ({ ...prev, [index]: false }));
    }
  }, []);
  
  return (
    <div className="animate-fade-in bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
      <header className="p-6 border-b border-slate-700 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-cyan-400">{chapter.title}</h1>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          &larr; Menu Utama
        </button>
      </header>
      
      <div className="p-6">
        <img src={chapter.content.imageUrl} alt={chapter.title} className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"/>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">{chapter.content.summary}</p>
        
        {error && <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-md mb-6">{error}</div>}

        <div className="space-y-8">
          {chapter.content.subSections.map((section, index) => (
            <div key={index} className="bg-slate-900/50 p-4 sm:p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
                <h3 className="text-xl font-semibold text-cyan-300">{section.title}</h3>
                <button
                  onClick={() => handleGenerateIllustration(section.title, index)}
                  disabled={loadingImages[index]}
                  className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-wait text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm w-full sm:w-auto"
                >
                  {loadingImages[index] ? (
                    <>
                      <SpinnerIcon className="w-4 h-4 animate-spin" />
                      <span>Membuat...</span>
                    </>
                  ) : (
                    <>
                      <SparkleIcon className="w-4 h-4" />
                      <span>Buat Ilustrasi AI</span>
                    </>
                  )}
                </button>
              </div>

              <div className="w-full aspect-video bg-slate-800 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                 <img 
                  src={aiImages[index] || section.imageUrl} 
                  alt={section.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-slate-400 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-6 bg-slate-800/50 flex justify-end">
        <button
          onClick={onStartQuiz}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
        >
          Latihan Bab Ini &rarr;
        </button>
      </footer>
    </div>
  );
};
