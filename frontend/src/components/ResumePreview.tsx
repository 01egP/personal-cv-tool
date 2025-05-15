import { forwardRef } from 'react';
import ProfileSection from './ProfileSection';
import ResumeSection from './ResumeSection';

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
      className="bg-white w-full max-w-[700px] p-8 shadow-lg rounded-lg text-gray-800 font-professional"
    >
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold uppercase">
          {data.name || 'Your Name'}
        </h1>
        {data.title && <p className="text-base text-gray-700">{data.title}</p>}
      </div>

      <div className="text-sm text-gray-700 text-center mb-6">
        <div>{data.location}</div>
        <span> {data.email} |</span>
        <span> {data.phone} |</span>
        <span> {data.linkedin}</span>
      </div>

      <ProfileSection title="Profile">
        <p className="text-[13px] leading-snug text-gray-800 font-light text-left">
          {data.about}
        </p>
      </ProfileSection>

      <ResumeSection title="Employment History">
        {data.experience.map((job, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-sm">
                {job.position}, {job.company}
              </h3>
              <div className="text-xs text-gray-500 text-right">
                <div>
                  {job.startDate} — {job.endDate}
                </div>
                <div>{job.location}</div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm leading-snug text-justify space-y-1">
              {job.bullets.map((b, j) => b && <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="text-sm leading-snug space-y-1">
          {data.skills.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="space-y-2 text-sm leading-snug">
          {data.education.split('\n').map((line, i) => {
            const [course, details] = line.split(',');
            return (
              <div key={i}>
                <div className="font-medium">{course?.trim()}</div>
                <div className="text-gray-600 text-xs">{details?.trim()}</div>
              </div>
            );
          })}
        </div>
      </ResumeSection>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
