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
    contact: string;
    about: string;
    experience: ExperienceEntry[];
    skills: string;
    education: string;
  }>({
    name: '',
    title: '',
    contact: '',
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
      <ResumeForm onChange={setData} />
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
  );
};

export default App;
