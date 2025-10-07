
import React from 'react';

export const SuspensionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M16 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M6 10l0 -4.5" />
    <path d="M18 10l0 -4.5" />
    <path d="M7 6h10" />
    <path d="M6 12l-2 0" />
    <path d="M18 12l2 0" />
    <path d="M3 17c0 1.333 .667 2 2 2s2 -.667 2 -2s-.667 -2 -2 -2s-2 .667 -2 2" />
    <path d="M15 17c0 1.333 .667 2 2 2s2 -.667 2 -2s-.667 -2 -2 -2s-2 .667 -2 2" />
    <path d="M5 15l0 -3" />
    <path d="M17 15l0 -3" />
  </svg>
);

export const SteeringIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 14l0 7" />
    <path d="M10 12l-6.75 -2" />
    <path d="M14 12l6.75 -2" />
  </svg>
);

export const TransmissionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 12l0 -2.5" />
    <path d="M14.243 10.243l1.757 -1.757" />
    <path d="M10.243 10.243l-1.757 -1.757" />
    <path d="M14.243 13.757l1.757 1.757" />
    <path d="M10.243 13.757l-1.757 1.757" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </svg>
);

export const FinalExamIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
    <path d="M12 12l8 -4.5" />
    <path d="M12 12l0 9" />
    <path d="M12 12l-8 -4.5" />
    <path d="M16 5.25l-8 4.5" />
  </svg>
);

export const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 15l3.35 -3.35a2.4 2.4 0 1 0 -3.39 -3.39l-3.35 3.35" />
    <path d="M13 17.5v2.5a2.5 2.5 0 0 0 5 0v-2.5" />
    <path d="M15 19l-9 -9" />
    <path d="M6.5 11l-2.5 -2.5a2.5 2.5 0 0 1 0 -5l2.5 2.5" />
    <path d="M11 6.5l-2.5 -2.5a2.5 2.5 0 0 0 -5 0l2.5 2.5" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>
);

export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z"/>
  </svg>
);

export const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
