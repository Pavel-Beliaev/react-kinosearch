import React, {FC} from 'react';
import {PeopleContent} from "../../modules";
import './people.scss'

export const People: FC = () => {

    return (
        <div className="frameworks">
            <div className='page-frame'>
                <PeopleContent/>
            </div>
        </div>
    );
};