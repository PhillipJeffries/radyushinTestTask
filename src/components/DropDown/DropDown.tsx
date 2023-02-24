import * as React from "react";
import { useState } from "react";

import Input from "../Input/Input";

import "./DropDown.scss"

export type DropDownProps = {
  label?: string,
  options: string[],
  headerTitle?: string
}

const DropDown: React.FC<DropDownProps> = ({ options, label="country", headerTitle='' }) => {



  const [ isOpen, setIsOpen ] = useState(false)

  const [ selectedOption, setSelectedOption ] = useState(headerTitle)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)


  }

  return (
    <>
      <div className="dd">
        <span>{label}</span>
        <div id="cuntry" className="dd_header" onClick={toggling} title={selectedOption}>
          {selectedOption || "select your country"}
          <div className="dd_header_button">
            <div className={ !isOpen ? "dd_header_button_triangle" : "dd_header_button_triangle dd_header_button_triangle_inverted"}></div>
          </div>
        </div>
        <input id="country" readOnly style={{opacity: 0, position: "absolute"}} value={selectedOption}/>
        {isOpen && (
          <div className="dd_list_container">
            <ul className="dd_list">
              {
                // options.filter(option => option !== header).map(option => (
                options.map(option => (
                  option === selectedOption ? 
                  <li className="dd_list_item dd_list_item_active" key={option} onClick={()=>{onOptionClicked(option)}}>{option}</li> :
                  <li className="dd_list_item" key={option} onClick={()=>{onOptionClicked(option)}}>{option}</li>
                ))
              }
            </ul>
          </div>
          )
        }
      </div>
      {selectedOption && <Input type="text" id="address" label="address" />}
    </>
      
  )
} 

export default DropDown