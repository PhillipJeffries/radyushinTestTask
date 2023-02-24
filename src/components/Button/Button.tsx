import * as React from "react";
import { useState } from "react";

import "./Button.scss"

export type ButtonProps = {
  label: string,
  onClick?: ()=>void
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {

  return (
    <button className="button" onClick={onClick}>
      <span>
        {label}
      </span>
    </button>
  )
}

export default Button