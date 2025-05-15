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
  location: string;
  email: string;
  phone: string;
  linkedin: string;
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
      className="bg-white w-full max-w-3xl p-10 shadow-lg rounded-lg text-gray-800 font-sans"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase">
          {data.name || 'Your Name'}
        </h1>
        {data.title && <p className="text-base text-gray-700">{data.title}</p>}
      </div>

      <div className="text-right mb-6 space-y-1 text-sm text-gray-700">
        <div>
          <span className="font-medium">Location:</span> {data.location}
        </div>
        <div>
          <span className="font-medium">LinkedIn:</span> {data.linkedin}
        </div>
        <div>
          <span className="font-medium">Email:</span> {data.email}
        </div>
        <div>
          <span className="font-medium">Phone:</span> {data.phone}
        </div>
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
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {data.skills}
        </p>
      </Section>

      <Section title="Education">
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {data.education}
        </p>
      </Section>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-700 border-b border-gray-300 pb-1 mb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}
