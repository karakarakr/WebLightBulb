import React, { useState } from 'react';

function LightBulb() {
    const lightBulbsImg = {
        standart: 'https://pngimg.com/d/bulb_PNG1243.png',
        
    };
    const [bulbType, setBulbType] = useState('standart');
    
    return (
        <div className='lightbulb'>
            <img src={lightBulbsImg[bulbType]}/>
            <div className='light-gradient' id='light-grad'></div>
        </div>
    );
}

export default LightBulb;