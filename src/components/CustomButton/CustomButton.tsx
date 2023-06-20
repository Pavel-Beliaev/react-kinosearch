import React from 'react';
import './custombutton.scss'
import {ButtonProps} from "./types";

export const CustomButton:React.FC<ButtonProps> = ({children, ...props}) => {

    return (
      <button {...props} className='custom_button'>
          {children}
      </button>
    );
};