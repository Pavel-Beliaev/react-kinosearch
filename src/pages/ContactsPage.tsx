import React, {FC} from 'react';
import {MapComponent} from "../components";
import Form from "../components/Form";
import Title from "../components/Title";

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
                <Title>Send a message</Title>
                <Form/>
            </div>
        </div>
    );
};
