import React from 'react';
import './switcher.scss'

export type SwitcherType = {
    switcher: number,
    setSwitcher: React.Dispatch<React.SetStateAction<number>>
}
const Switcher:React.FC<SwitcherType> = ({setSwitcher, switcher}) => {


    return (
        <div className='switcher'>
            <span
                onClick={() => setSwitcher(0)}
            >
                Trailers
            </span>
            <span
                onClick={() => setSwitcher(1)}
            >
                Backgrounds
            </span>
            <div
                style={switcher === 0
                    ? {transform: 'translateX(-75px)', width: '45%'}
                    : {transform: 'translateX(62px)', width: '65%'}}
                className='slider'
            />
        </div>
    );
};

export default Switcher;