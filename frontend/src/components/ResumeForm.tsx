import { useState } from 'react';

interface ResumeFormProps {
  onChange: (data: {
    name: string;
    title: string;
    contact: string;
    about: string;
    experience: string;
    skills: string;
    education: string;
  }) => void;
}

export default function ResumeForm({ onChange }: ResumeFormProps) {
  const [data, setData] = useState({
    name: '',
    title: '',
    contact: '',
    about: '',
    experience: '',
    skills: '',
    education: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    onChange(newData);
  }

  const inputClass =
    'w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition';

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow mb-8 space-y-4">
      <input
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="title"
        placeholder="Job Title (e.g. Full Stack Developer)"
        value={data.title}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="contact"
        placeholder="Contact Info (city, email, LinkedIn...)"
        value={data.contact}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="about"
        placeholder="Profile Summary"
        value={data.about}
        onChange={handleChange}
        className={`${inputClass} h-24`}
      />
      <textarea
        name="experience"
        placeholder="Experience"
        value={data.experience}
        onChange={handleChange}
        className={`${inputClass} h-24`}
      />
      <textarea
        name="skills"
        placeholder="Skills"
        value={data.skills}
        onChange={handleChange}
        className={`${inputClass} h-24`}
      />
      <textarea
        name="education"
        placeholder="Education"
        value={data.education}
        onChange={handleChange}
        className={`${inputClass} h-24`}
      />
    </div>
  );
}
