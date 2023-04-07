import React from 'react';
import style from './customfields.module.scss'
import {FieldsProps} from "../../@types/@types";



const CustomInput: React.FC<FieldsProps> = ({children, ...props}) => {
    return (
        <div className={style.custom_field}>
            <p>{children}<span>*</span></p>
            <input {...props} />
        </div>

    );
};

export default CustomInput;