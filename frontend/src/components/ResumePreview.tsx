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
      className="w-full max-w-[1000px] mx-auto bg-white text-gray-800 font-sans shadow-lg rounded-lg overflow-hidden flex"
    >
      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-100 p-6 space-y-8 text-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-bold leading-tight">
            {data.name || 'Your Name'}
          </h1>
          <p className="text-sm text-gray-600">{data.title}</p>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Location:</span>{' '}
            <span className="text-[13px] text-gray-700">{data.location}</span>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <span className="text-[13px] text-gray-700">{data.email}</span>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <span className="text-[13px] text-gray-700">{data.phone}</span>
          </p>
          {data.linkedin && (
            <p className="break-words">
              <span className="font-semibold">LinkedIn:</span>
              <br />
              <a
                href={data.linkedin}
                className="text-[13px] text-gray-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.linkedin}
              </a>
            </p>
          )}
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide border-b border-gray-400 pb-1 mb-2">
            Skills
          </h2>
          <div className="space-y-2 text-gray-700 text-[13px] leading-snug">
            {data.skills.split('\n').map((line, i) => {
              const [label, values] = line.split(':');
              return (
                <div key={i}>
                  <span className="font-semibold text-sm">{label}:</span>{' '}
                  <span className="text-[13px] font-normal">
                    {values?.trim()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 space-y-8 text-[13px]">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Profile
          </h2>
          <p className="text-[13px] leading-snug text-gray-800 font-normal text-left">
            {data.about}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Employment History
          </h2>
          {data.experience.map((job, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">
                    {job.company}, {job.location}
                  </h3>
                  <p className="text-sm text-gray-700">{job.position}</p>
                </div>
                <div className="text-xs text-gray-500 text-right">
                  {job.startDate} — {job.endDate}
                </div>
              </div>
              <ul className="list-disc pl-5 mt-2 text-[13px] leading-snug text-gray-800 font-normal space-y-1">
                {job.bullets.map((b, j) => b && <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-4 text-sm">
            {data.education.split('\n').map((line, i) => {
              const [institution, details] = line.split(',');
              return (
                <div key={i}>
                  <div className="font-semibold">{institution?.trim()}</div>
                  {details && (
                    <div className="text-xs text-gray-600">
                      {details.trim()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
