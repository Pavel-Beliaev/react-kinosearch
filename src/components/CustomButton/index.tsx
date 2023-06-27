import React, {FC} from 'react';
import './custombutton.scss'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string | React.ReactElement;
}

export const CustomButton:FC<ButtonProps> = ({children, ...props}) => {

    return (
      <button {...props} className='custom_button'>
          {children}
      </button>
    );
};