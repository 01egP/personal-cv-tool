import React, { forwardRef } from 'react';

interface ExperienceEntry {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

interface ResumeData {
  name: string;
  title: string;
  contact: string;
  about: string;
  experience: ExperienceEntry[];
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
      className="bg-white w-full max-w-[800px] p-12 shadow-lg rounded-md mt-8 text-gray-800 font-serif"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide uppercase">
          {data.name || 'Your Name'}
        </h1>
        {data.title && <p className="text-base mt-1">{data.title}</p>}
        {data.contact && (
          <p className="text-sm text-gray-600 mt-1">{data.contact}</p>
        )}
      </div>

      <Section title="Profile">
        <p className="text-justify leading-relaxed text-sm">{data.about}</p>
      </Section>

      <Section title="Employment History">
        {data.experience.map((job, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-sm">
                {job.position}, {job.company}
              </h3>
              <div className="text-sm text-gray-500 text-right">
                <div>
                  {job.startDate} — {job.endDate}
                </div>
                <div>{job.location}</div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm leading-relaxed text-justify space-y-1">
              {job.bullets.map((b, j) => b && <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <p className="text-sm leading-relaxed">{data.skills}</p>
      </Section>

      <Section title="Education">
        <p className="text-sm leading-relaxed">{data.education}</p>
      </Section>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;

// 🔷 Универсальный компонент секции
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}
