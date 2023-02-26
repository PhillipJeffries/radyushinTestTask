import * as React from "react";
import { useState } from "react";

import type { RootState } from "../../store";
import type { FormState } from "../../features/form/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../../features/form/formSlice";

import Input from "../Input/Input";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";

import "./FormWrapper.scss";

import { countryList } from "../../utils/countries";
import RadioButtonGroup from "../RadioButtonnGroup/RadioButtonGroup";

const FormWrapper: React.FC = () => {
  const state = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    const data: FormState = { ...state };
    console.log(data.firstName);
    e.preventDefault();
    const form = e.currentTarget;
    // const formElements = form.elements as typeof form.elements
    console.log(form.elements);

    Object.values(form.elements).forEach((el: HTMLInputElement) => {
      if (el.id) {
        if (el.type == "radio" && el.checked) {
          data.gender = el.value;
        }
        if (Object.keys(data).includes(el.id))
          data[el.id as keyof FormState] = el.value;
      }
    });
    dispatch(updateForm(data));
    setFormSent(!formSent);
  };

  return (
    <div className="form-container">
      {!formSent ? (
        <form onSubmit={handleSubmit}>
          <Input type="text" id="firstName" label="firstName" required />
          <Input type="text" id="lastName" label="lastName" />
          <div className="gender-input-wrapper">
            <span>gender</span>
            <RadioButtonGroup
              options={["male", "female"]}
              name="gender"
              checkedValue={state.gender}
            />
          </div>
          <Input type="tel" id="phoneNumber" label="phone number" />
          <Input type="email" id="eMail" label="e-mail" required />
          <Input type="date" id="birthDate" label="birth date" />
          <DropDown options={countryList} headerTitle={state.country} />
          <div className="button-wrapper">
            <Button label="send" />
          </div>
        </form>
      ) : (
        <div className="sending-alert">
          <p>
            {Math.round(Math.random() * 2) > 0
              ? "Успешно отправлено"
              : "Что-то пошло не так, попробуйте повторить"}
          </p>
          <Button label={"ok"} onClick={() => setFormSent(!formSent)} />
        </div>
      )}
    </div>
  );
};

export default FormWrapper;
