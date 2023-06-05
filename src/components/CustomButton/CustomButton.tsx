import React from 'react';
import './custombutton.scss'
import {ButtonProps} from "./types";

const CustomButton:React.FC<ButtonProps> = ({children, ...props}) => {

    return (
      <button {...props} className='custom_button'>
          {children}
      </button>
    );
};

export default CustomButton;