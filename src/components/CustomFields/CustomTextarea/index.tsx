import React, {forwardRef} from 'react';
import '../customfields.scss'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
}

export const CustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref?) => {
    const {title, ...textareaProps} = props;

    return (
        <div className='custom-field'>
            <p>
                {title}
                <span>*</span>
            </p>
            <textarea ref={ref} {...textareaProps}/>
        </div>
    );
});