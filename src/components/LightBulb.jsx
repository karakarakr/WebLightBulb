import React, { useState } from 'react';
import standart from '../bulbs/standart.png';
import econom from '../bulbs/econom.png';
import led from '../bulbs/led.png';

function LightBulb() {
    const lightBulbsImg = [
        standart,
        econom,
        led
    ];
    const [bulbType, setBulbType] = useState(0);

    function switchLamp(iterValue) {
        setBulbType((prevBulbType) => {
            let newBulbType = prevBulbType + iterValue;
            if (newBulbType < 0) {
                newBulbType = lightBulbsImg.length - 1;
            } else if (newBulbType >= lightBulbsImg.length) {
                newBulbType = 0;
            }
            return newBulbType;
        });
    }
    
    return (
        <>
            <div className='lightbulb'>
                <img className='bulb-img' src={lightBulbsImg[bulbType]}/>
                <div className='light-gradient' id='light-grad'></div>
            </div>
            <div className='switch-panel'>
                <button onClick={() => switchLamp(-1)}>L</button>
                <button onClick={() => switchLamp(1)}>R</button>
            </div>
            
        </>
    );
}

export default LightBulb;