import * as React from "react";
import { useState } from "react";

import type { RootState } from "../../store";
import type { FormState } from "../../features/form/formSlice";

import { useSelector } from "react-redux";

import "./Input.scss";

export type InputProps = {
  label: string;
  type: string;
  id: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  required = false,
  placeholder = "type here",
}) => {
  const state = useSelector((state: RootState) => state.form);

  const [inputValue, setInputValue] = useState(state[id as keyof FormState]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  let pattern: string;

  switch (id) {
    case "firstName" || "lastName":
      pattern = "[А-Яа-яA-Za-z]{3,16}";
      break;
    case "phoneNumber":
      pattern = "[0-9]{5,11}";
      break;

    case "eMail":
      pattern = "^[w-.]+@([w-]+.)+[w-]{2,4}$";
      break;
    case "birthDate":
      pattern = "d{2}-d{4}-d{2}";
      break;
    default:
      pattern = "[А-Яа-яA-Za-z0-9]{3,50}";
      break;
  }

  return (
    <div className="input-container">
      <label>
        <span className="input-label">{label}</span>

        <input
          placeholder={placeholder}
          required={required}
          value={inputValue}
          type={type}
          id={id}
          onChange={handleInput}
          name={name}
          pattern={pattern}
        />
        {required && <div className="required-star">*</div>}
      </label>
    </div>
  );
};

export default Input;
