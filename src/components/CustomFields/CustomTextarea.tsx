import React, {forwardRef} from 'react';
import './customfields.scss'
import {TextareaProps} from "../../@types/@types";


const CustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref?) => {
    const { children, ...textareaProps } = props;

    return (
        <div className='custom-field'>
            <p>
                {children}
                <span>*</span>
            </p>
            <textarea ref={ref} {...textareaProps} />
        </div>
    );
});

export default CustomTextarea;