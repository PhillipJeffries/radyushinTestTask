import * as React from "react";
import { useState } from "react";
import { store } from "./store"
import { Provider } from "react-redux";

import FormWrapper from "./components/FormWrapper/FormWrapper";

import './app.scss'

const App: React.FC = () => {

  const [selectedCountry, setSelectedCountry] = useState('')

  return (
    <Provider store={store}>
      <div className="app">
        <FormWrapper />
      </div>
    </Provider>
  
  );
};

export default App;
