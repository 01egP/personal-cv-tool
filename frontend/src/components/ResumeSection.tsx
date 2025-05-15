import React from 'react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <div className="mb-8">
      <div className="bg-gray-100 text-center py-1 mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 underline underline-offset-4 decoration-gray-500">
          {title}
        </h2>
      </div>
      <div className="text-sm text-gray-800 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
