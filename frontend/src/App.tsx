import { useRef, useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useReactToPrint } from 'react-to-print';

interface ExperienceEntry {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

const App = () => {
  const [data, setData] = useState<{
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
  }>({
    name: '',
    title: '',
    location: '',
    email: '',
    phone: '',
    linkedin: '',
    about: '',
    experience: [],
    skills: '',
    education: '',
  });

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'resume',
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl uppercase mb-8">Resume Builder</h1>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: form */}
        <div className="w-full lg:w-1/2">
          <ResumeForm onChange={setData} />
        </div>

        {/* Right: preview */}
        <div className="w-full lg:w-1/2">
          <ResumePreview ref={componentRef} data={data} />
          <div className="text-center mt-4">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
