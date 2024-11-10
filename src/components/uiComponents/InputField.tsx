import React from 'react';

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, placeholder, onChange }) => {
  return <input value={value} placeholder={placeholder} onChange={onChange} className="input-field" />;
};

export default InputField;
