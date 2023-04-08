import React, {forwardRef} from 'react';
import './customfields.scss'
import {InputProps} from "../../@types/@types";


const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
    const {children, ...inputProps} = props;

    return (
        <>
            {children &&
                <div className={children ? 'custom-field' : ''}>

                    <p>
                        {children}
                        <span>*</span>
                    </p>
                </div>
            }
            <input className='custom-input' ref={ref} {...inputProps} />
        </>
    );
});

export default CustomInput;