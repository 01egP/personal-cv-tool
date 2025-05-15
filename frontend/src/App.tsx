import { useRef, useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [data, setData] = useState({
    name: '',
    title: '',
    contact: '',
    about: '',
    experience: '',
    skills: '',
    education: '',
  });

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'resume',
  });

  return (
    <div className="container">
      <ResumeForm onChange={setData} />
      <ResumePreview ref={componentRef} data={data} />
      <button
        onClick={handlePrint}
        className="border mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200"
      >
        Download PDF
      </button>
    </div>
  );
}

export default App;
