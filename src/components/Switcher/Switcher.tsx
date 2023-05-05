import React from 'react';
import './switcher.scss'

export type SwitcherType = {
    switcher: number,
    setSwitcher: React.Dispatch<React.SetStateAction<number>>,
    title1: string,
    title2: string,
    color: string
}
const Switcher: React.FC<SwitcherType> = ({color, title1, title2, setSwitcher, switcher}) => {


    return (
        <div
            style={{backgroundColor: `${color}`}}
            className='switcher'>
            <span
                onClick={() => setSwitcher(0)}
            >
                {title1}
            </span>
            <span
                  onClick={() => setSwitcher(1)}
            >
                {title2}
            </span>
            <div
                style={switcher === 0
                    ? {transform: 'translateX(0px)', width: ''}
                    : {transform: 'translateX(100%)', width: ''}}
                className='slider'
            >
                <span>
                    {switcher === 0
                        ? title1
                        : title2
                    }
                </span>

            </div>
        </div>
    );
};

export default Switcher;