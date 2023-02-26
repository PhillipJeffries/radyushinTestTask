import { createSlice, ReducersMapObject } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  eMail: string;
  birthDate: string;
  country?: string;
  address?: string;
}

const initialState: FormState = localStorage.form
  ? JSON.parse(localStorage.form)
  : {
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      eMail: "",
      birthDate: "",
      country: "",
      address: "",
    };

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<any>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.phoneNumber = action.payload.phoneNumber;
      state.eMail = action.payload.eMail;
      state.birthDate = action.payload.birthDate;
      state.country = action.payload.country;
      state.address = action.payload.address;
      console.log("payload", action.payload);
      console.log("state", state);
      localStorage.form = JSON.stringify(state);
    },
    // cleanForm: (state, )
  },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
