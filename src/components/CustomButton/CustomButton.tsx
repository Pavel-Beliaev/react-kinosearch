import React from 'react';
import style from './custombutton.module.scss'
import {ButtonProps} from "../../@types/@types";



const CustomButton:React.FC<ButtonProps> = ({children, ...props}) => {
    return (
      <button {...props} className={style.custom_button}>
          {children}
      </button>
    );
};

export default CustomButton;