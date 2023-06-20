import React, {forwardRef} from 'react';
import '../customfields.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}

export const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
    const {title, ...inputProps} = props;

    return (
        <>
            {title &&
                <div className={title
                    ? 'custom-field'
                    : ''
                }>
                    <p>
                        {title}
                        <span>*</span>
                    </p>
                </div>
            }
            <input className='custom-input' ref={ref} {...inputProps}/>
        </>
    );
});