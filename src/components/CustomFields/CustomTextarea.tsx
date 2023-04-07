import React from 'react';
import style from './customfields.module.scss'
import {FieldsProps} from "../../@types/@types";



const CustomTextarea: React.FC<FieldsProps> = ({children, ...props}) => {
    return (
        <div className={style.custom_field}>
            <p>{children}<span>*</span></p>
            <textarea {...props} />
        </div>

    );
};

export default CustomTextarea;