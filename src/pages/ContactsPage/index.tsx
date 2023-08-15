import React, {FC} from 'react';
import {Form, MapComponent} from "../../modules";
import {Title} from "../../components";

export const ContactsPage: FC = () => {
    console.log('contacts')

    return (
        <div className="frameworks">
            <div className='frameworks-container'>
                <MapComponent/>
                <div className='page-frame'>
                    <Title>Send a message</Title>
                    <Form/>
                </div>
            </div>
        </div>
    );
};