import React, {FC} from 'react';
import {CustomButton, CustomInput, CustomTextarea, MapComponent} from "../components";
import Form from "../components/Form";

export const ContactsPage: FC = () => {


    return (
        <div className='frameworks-container'>
            <div className='map'>
                <div className='map-wrapper'>
                    <div className='map_inside'>
                        <MapComponent/>
                    </div>
                </div>
            </div>
            <div className='form'>
                <div className='form-title'>
                    <h2>Send a message</h2>
                </div>
                <Form/>
            </div>
        </div>
    );
};
