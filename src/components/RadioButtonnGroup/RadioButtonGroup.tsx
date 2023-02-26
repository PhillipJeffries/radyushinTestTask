import * as React from "react";
import { useState } from "react";

import RadioButton from "./RadioButton/RadioButton";

import "./RadioButtonGroup.scss";

type RadioButtonGroupProps = {
  name?: string;
  options: string[];
  checkedValue?: string;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  checkedValue = "",
}) => {
  const [selectedButton, setSelectedButton] = useState(checkedValue);

  const isSelected = (value: string): boolean => {
    return selectedButton === value;
  };

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedButton(e.target.value);
    console.log("click", e.target.value);
  };

  return (
    <div className="radio-button-group">
      {options.map((el) => {
        return (
          <RadioButton
            name={name}
            label={el}
            value={el}
            key={el}
            checked={isSelected(el)}
            onChange={handleRadioClick}
          />
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
