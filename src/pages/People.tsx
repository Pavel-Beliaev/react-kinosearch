import React, {FC} from 'react';
import {PeopleContent} from "../modules";

export const People: FC = () => {
    return (
        <div className="frameworks">
            <div className='frameworks-container people'>
                <PeopleContent/>
            </div>
        </div>
    );
};