import React, { forwardRef } from 'react';

interface ResumeData {
  name: string;
  title: string;
  contact: string;
  about: string;
  experience: string;
  skills: string;
  education: string;
}

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => (
    <div
      ref={ref}
      className="bg-white w-full max-w-3xl p-10 shadow-md rounded-lg mt-8 text-gray-800"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          {data.name || 'Your Name'}
        </h1>
        {data.title && (
          <div className="text-lg text-gray-600 mt-1">{data.title}</div>
        )}
        {data.contact && (
          <p className="text-sm text-gray-500 mt-1 whitespace-pre-line">
            {data.contact}
          </p>
        )}
      </div>

      {/* Profile */}
      <Section title="Profile" content={data.about} />

      {/* Experience */}
      <Section title="Employment History" content={data.experience} />

      {/* Skills */}
      <Section title="Skills" content={data.skills} />

      {/* Education */}
      <Section title="Education" content={data.education} />
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;

// Компонент секции для повторного использования
function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">
        {title}
      </h2>
      <p className="text-sm whitespace-pre-line leading-relaxed">
        {content || `Your ${title.toLowerCase()} goes here.`}
      </p>
    </div>
  );
}
