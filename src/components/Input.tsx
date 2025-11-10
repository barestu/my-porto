import React from 'react';

interface InputProps {
  label: string;
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-neutral-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 text-sm rounded-md border border-neutral-600 bg-neutral-900/40 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none transition-colors hover:border-neutral-500"
        placeholder={placeholder}
      />
    </div>
  );
}
