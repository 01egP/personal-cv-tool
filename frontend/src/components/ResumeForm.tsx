import { useState } from 'react';

interface ExperienceEntry {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

interface ResumeFormProps {
  onChange: (data: {
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
  }) => void;
}

export default function ResumeForm({ onChange }: ResumeFormProps) {
  const [data, setData] = useState({
    name: '',
    title: '',
    location: '',
    email: '',
    phone: '',
    linkedin: '',
    about: '',
    experience: [
      {
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        bullets: [''],
      },
    ],
    skills: '',
    education: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const updated = { ...data, [name]: value };
    setData(updated);
    onChange(updated);
  }

  function handleExperienceChange(
    index: number,
    update: Partial<ExperienceEntry>
  ) {
    const newExp = [...data.experience];
    newExp[index] = { ...newExp[index], ...update };
    const newData = { ...data, experience: newExp };
    setData(newData);
    onChange(newData);
  }

  function addExperience() {
    const newData = {
      ...data,
      experience: [
        ...data.experience,
        {
          position: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          bullets: [''],
        },
      ],
    };
    setData(newData);
    onChange(newData);
  }

  const inputClass = 'w-full p-2 border border-gray-300 rounded';

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow space-y-6">
      <input
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="title"
        placeholder="Job Title"
        value={data.title}
        onChange={handleChange}
        className={inputClass}
      />

      <div className="border p-4 rounded space-y-2">
        <h3 className="text-sm font-medium text-gray-700">
          Contact Information
        </h3>
        <input
          name="location"
          placeholder="Location"
          value={data.location}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="linkedin"
          placeholder="LinkedIn"
          value={data.linkedin}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <textarea
        name="about"
        placeholder="Profile Summary"
        value={data.about}
        onChange={handleChange}
        className={inputClass + ' h-24'}
      />

      <div className="border p-4 rounded space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Experience</h3>
        {data.experience.map((entry, i) => (
          <div key={i} className="space-y-2">
            <input
              placeholder="Position"
              value={entry.position}
              onChange={(e) =>
                handleExperienceChange(i, { position: e.target.value })
              }
              className={inputClass}
            />
            <input
              placeholder="Company"
              value={entry.company}
              onChange={(e) =>
                handleExperienceChange(i, { company: e.target.value })
              }
              className={inputClass}
            />
            <input
              placeholder="Location"
              value={entry.location}
              onChange={(e) =>
                handleExperienceChange(i, { location: e.target.value })
              }
              className={inputClass}
            />
            <div className="flex gap-2">
              <input
                placeholder="Start Date"
                value={entry.startDate}
                onChange={(e) =>
                  handleExperienceChange(i, { startDate: e.target.value })
                }
                className={inputClass}
              />
              <input
                placeholder="End Date"
                value={entry.endDate}
                onChange={(e) =>
                  handleExperienceChange(i, { endDate: e.target.value })
                }
                className={inputClass}
              />
            </div>
            <textarea
              placeholder="Bullet points (one per line)"
              value={entry.bullets.join('\n')}
              onChange={(e) =>
                handleExperienceChange(i, {
                  bullets: e.target.value.split('\n'),
                })
              }
              className={inputClass + ' h-24'}
            />
          </div>
        ))}
        <button
          onClick={addExperience}
          type="button"
          className="mt-2 text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          + Add Experience
        </button>
      </div>

      <textarea
        name="skills"
        placeholder="Skills"
        value={data.skills}
        onChange={handleChange}
        className={inputClass + ' h-24'}
      />
      <textarea
        name="education"
        placeholder="Education"
        value={data.education}
        onChange={handleChange}
        className={inputClass + ' h-24'}
      />
    </div>
  );
}
