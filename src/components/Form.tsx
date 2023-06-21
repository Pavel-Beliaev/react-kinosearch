import React, {FC} from 'react';
import {CustomInput} from "./CustomFields/CustomInput";
import {CustomTextarea} from "./CustomFields/CustomTextarea";
import {CustomButton} from "./CustomButton";
import {contactArray} from "../mock/statick";

const Form: FC = () => {
    return (
        <div className='form-block'>
            <form action="">
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

export default Form;