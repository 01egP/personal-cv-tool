import React, { forwardRef } from 'react';

interface ResumeData {
  name: string;
  title?: string;
  contact?: string;
  about: string;
  experience?: string;
  skills?: string;
  education?: string;
}

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => (
    <div className="resume" ref={ref}>
      <h1>{data.name || 'Your Name'}</h1>
      {data.title && (
        <h2
          style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '4px' }}
        >
          {data.title}
        </h2>
      )}
      {data.contact && (
        <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>
          {data.contact}
        </p>
      )}

      <h2>Profile</h2>
      <p>{data.about || 'Short summary about yourself...'}</p>

      <h2>Experience</h2>
      <p>{data.experience || 'List your work experience here.'}</p>

      <h2>Skills</h2>
      <p>{data.skills || 'List your skills here.'}</p>

      <h2>Education</h2>
      <p>{data.education || 'List your education here.'}</p>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
