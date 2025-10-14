
import React from 'react';
import { CertificateIcon } from './icons';

interface EvaluationResultProps {
  score: number;
  mcqTotal: number;
  onBackToMenu: () => void;
}

export const EvaluationResult: React.FC<EvaluationResultProps> = ({ score, mcqTotal, onBackToMenu }) => {
  const percentage = mcqTotal > 0 ? Math.round((score / mcqTotal) * 100) : 0;
  const isPassing = percentage >= 75;

  const getFeedback = () => {
    if (percentage >= 90) return { title: "Luar Biasa!", message: "Pemahaman Anda sangat mendalam.", color: "text-green-400" };
    if (percentage >= 75) return { title: "Bagus Sekali!", message: "Anda telah lulus evaluasi ini.", color: "text-cyan-400" };
    if (percentage >= 50) return { title: "Cukup Baik", message: "Terus tingkatkan lagi pemahaman Anda.", color: "text-yellow-400" };
    return { title: "Perlu Belajar Lagi", message: "Jangan menyerah, coba pelajari kembali materinya.", color: "text-red-400" };
  };

  const feedback = getFeedback();

  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl shadow-2xl p-8 border-t-4 border-cyan-500">
        <h1 className="text-3xl font-bold text-white mb-2">Hasil Evaluasi</h1>
        
        <div className={`my-6 ${feedback.color}`}>
          <h2 className="text-4xl font-bold">{feedback.title}</h2>
          <p className="text-slate-300 mt-2">{feedback.message}</p>
        </div>
        
        <div className="bg-slate-900/50 rounded-lg p-6 my-8 text-left">
          <div className="py-4">
            <div className="flex justify-between items-center">
              <p className="text-slate-400 text-lg">Skor Akhir</p>
              <p className="text-4xl font-bold text-cyan-400">{percentage}%</p>
            </div>
            <p className="text-slate-300 font-medium mt-1">({score} dari {mcqTotal} soal benar)</p>
          </div>
        </div>

        {isPassing && (
          <div className="flex flex-col items-center p-4 bg-green-900/30 rounded-lg border border-green-700">
             <CertificateIcon className="w-16 h-16 text-green-400 mb-2"/>
             <h3 className="text-xl font-semibold text-green-300">Sertifikat Kelulusan</h3>
             <p className="text-green-400/80">Selamat! Anda telah menguasai materi ini.</p>
          </div>
        )}

        <button
          onClick={onBackToMenu}
          className="mt-10 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 w-full"
        >
          Kembali ke Menu Utama
        </button>
      </div>
    </div>
  );
};
