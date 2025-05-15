import { useState } from 'react';

interface ResumeFormProps {
  onChange: (data: { name: string; about: string }) => void;
}

export default function ResumeForm({ onChange }: ResumeFormProps) {
  const [data, setData] = useState({ name: '', about: '' });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    onChange(newData);
  }

  return (
    <div className="p-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={data.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="about"
        placeholder="About you"
        value={data.about}
        onChange={handleChange}
        className="border p-2 w-full mt-2"
      />
    </div>
  );
}
