import React from 'react';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProfileSection({
  title,
  children,
}: ProfileSectionProps) {
  return (
    <div className="mb-8">
      <div className="border-t-2 border-black mb-1" />
      <div className="border-t border-black mb-4" />

      <div className="bg-gray-100 text-center py-1 mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 underline underline-offset-4 decoration-gray-500">
          {title}
        </h2>
      </div>

      <div className="text-center text-sm text-gray-800 leading-relaxed space-y-2">
        {children}
      </div>

      <div className="mt-4 border-t border-black" />
      <div className="border-t-2 border-black mt-1" />
    </div>
  );
}
