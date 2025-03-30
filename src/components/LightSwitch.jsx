import React, { useState, useEffect } from 'react';

function LightSwitch() {
    const [bulbState, setBulbState] = useState(false);
    const [brightness, setBrightness] = useState(100);
    const [timer, setTimer] = useState(null);

    const startAutoTurnOffTimer = () => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(() => {
            setBulbState(false);
        }, 5000);

        setTimer(newTimer);
    };

    useEffect(() => {
        if (bulbState) {
            startAutoTurnOffTimer();
        }
    }, [bulbState]);

    useEffect(() => {
        startAutoTurnOffTimer();
    }, []);


    useEffect(() => {
        const bulblight = document.getElementsByClassName('light-gradient')[0];
        
        bulblight.style.opacity = `${brightness}%`;
        
        if (bulbState) {
            bulblight.classList.add('on');
        } else {
            bulblight.classList.remove('on');
        }  
        
    }, [bulbState, brightness]);

    const switchLightButton = () => {
        setBulbState(!bulbState);
    };
    
    const handleSliderChange = (e) => {
        setBrightness(e.target.value);
    };

    return ( 
        <>
            <button className='light-switch' 
                id='light-switch' 
                onClick={() => switchLightButton()}
            >{bulbState ? 'ON' : 'OFF'}</button>
            <div className='light-brightness'>
                <input type="range" 
                name="brightness-slider" 
                min="0" 
                max="100" 
                value={brightness} 
                onChange={handleSliderChange} />
            </div>
        </>
    );
}

export default LightSwitch;