import { useRef, useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [data, setData] = useState({ name: '', about: '' });
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'resume',
  });

  return (
    <div className="flex flex-col items-center">
      <ResumeForm onChange={setData} />
      <ResumePreview ref={componentRef} data={data} />
      <button
        onClick={handlePrint}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Download PDF
      </button>
    </div>
  );
}

export default App;
