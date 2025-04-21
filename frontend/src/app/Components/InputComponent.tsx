import React from 'react';
import { InputText } from 'primereact/inputtext';

interface InputComponentProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ id, name, value, onChange }) => {
  return (
    <InputText
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full"
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = '#c2c2c2';
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = '#c2c2c2';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#c2c2c2';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white';
        (e.currentTarget as HTMLButtonElement).style.color = '#131313';
      }}
    />
  );
};

export default InputComponent;
