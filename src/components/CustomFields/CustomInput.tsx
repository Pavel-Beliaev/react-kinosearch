import React, {forwardRef} from 'react';
import './customfields.scss'
import {InputProps} from "../../@types/@types";


const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
    const {children, ...inputProps} = props;

    return (
        <div className={children ? 'custom-field' : ''}>
            {children &&
                <p>
                    {children}
                    <span>*</span>
                </p>
            }
            <input ref={ref} {...inputProps} />
        </div>
    );
});

export default CustomInput;