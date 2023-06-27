import React, {FC} from 'react';
import {MapComponent, Title, Form} from "../components";

export const ContactsPage: FC = () => {


    return (
        <div className='frameworks-container'>
            <MapComponent/>
            <div className='page-frame'>
                <Title>Send a message</Title>
                <Form/>
            </div>
        </div>
    );
};