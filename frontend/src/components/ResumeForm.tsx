import { useState } from 'react';

interface ResumeFormProps {
  onChange: (data: {
    name: string;
    about: string;
    education?: string;
    title?: string;
    contact?: string;
    experience?: string;
    skills?: string;
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

  return (
    <div className="p-4 w-full max-w-2xl">
      <input
        name="name"
        placeholder="Your Name"
        value={data.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        name="title"
        placeholder="Your Title (e.g. Full Stack Developer)"
        value={data.title}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        name="contact"
        placeholder="Contact Info (city, email, LinkedIn...)"
        value={data.contact}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <textarea
        name="about"
        placeholder="About you"
        value={data.about}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <textarea
        name="experience"
        placeholder="Work experience"
        value={data.experience}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <textarea
        name="skills"
        placeholder="Skills"
        value={data.skills}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <textarea
        name="education"
        placeholder="Education"
        value={data.education}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
    </div>
  );
}
