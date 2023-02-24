import * as React from "react";
import { useState } from "react";

import type { RootState } from "../../store";
import type { FormState } from "../../features/form/formSlice";

import {  useSelector, useDispatch } from "react-redux"

import './Input.scss'

export type InputProps = {
  label: string,
  type: string,
  id: string,
  name?: string,
  required?: boolean,
  pattern?: string,
  placeholder?: string
}

const Input: React.FC<InputProps> = ({label,type, id, name, required=false, placeholder="type here"}) => {

  const state = useSelector((state: RootState) => state.form)

  const [inputValue, setInputValue] = useState(state[id as keyof FormState])

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className="input-container">
        <label
          className={type=="radio" ? "radio-input" : null}
          // htmlFor={id}
        >
          <span className="input-label">
            {label}
          </span>
        
          <input 
            placeholder={placeholder}
            required={required}
            value={type == "radio" ? id : inputValue}
            // checked={type == "radio" && id == state[id as keyof FormState] ? true : false }
            type={type}
            id={id}
            onChange={handleInput}
            name={name}
            // pattern={pattern} 
          />
          {required && <div className="required-star">*</div>}
          {type == "radio" ? <span className="checkmark"></span> : null}
        </label>
    </div>
  );
};

export default Input;