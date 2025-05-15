import { forwardRef } from 'react';

interface ResumeData {
  name: string;
  about: string;
}

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => (
    <div ref={ref} className="border p-4 m-4 bg-white w-[210mm] h-[297mm]">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="mt-4">{data.about}</p>
    </div>
  )
);

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
