import React from 'react';

interface TextareaProps {
  label: string;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export default function Textarea({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 5,
}: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-neutral-300 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-2.5 text-sm rounded-md border border-neutral-600 bg-neutral-900/40 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none transition-colors hover:border-neutral-500 resize-none"
        placeholder={placeholder}
      />
    </div>
  );
}
