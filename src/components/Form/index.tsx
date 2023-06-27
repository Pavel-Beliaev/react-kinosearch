import React, {FC} from 'react';
import './form.scss'
import {contactArray} from "../../mock/statick";
import {CustomInput, CustomTextarea} from "../CustomFields";
import {CustomButton} from "../CustomButton";

export const Form: FC = () => {

    return (
        <div className='form'>
            <form action="src/components">
                <CustomInput title={'Name'}/>
                <CustomInput title={'Email'}/>
                <CustomInput title={'Where did you hear about us?'}/>
                <CustomTextarea title={'Message'}/>
                <CustomButton>Send message</CustomButton>
            </form>
            <div className='form-colum'>
                {contactArray
                    .map((obj) => (
                        <div
                            key={obj.icon}
                            className='form-row'
                        >
                            <span>
                                <i className={`${obj.icon}`}></i>
                            </span>
                            <div className='form-text'>
                                <h4>{obj.title}</h4>
                                <p>{obj.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};