import React, {FC} from 'react';
import {PeopleContent} from "../../modules";
import './people.scss'

export const People: FC = () => {
    console.log('people')
    return (
        <div className="frameworks">
            <div className='frameworks-container people'>
                <PeopleContent/>
            </div>
        </div>
    );
};