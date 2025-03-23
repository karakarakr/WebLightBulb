import React, { useState, useEffect } from 'react';

function LightSwitch() {
    const [bulbState, setBulbState] = useState(false);

    useEffect(() => {
        const lightElement = document.getElementById('light-grad');
        if (lightElement) {
            lightElement.style.display = bulbState ? 'block' : 'none';
        }
    }, [bulbState]);

    function switchLightButton() {
        setBulbState(!bulbState);
    }і

    return ( 
        <>
            <button className='light-switch' id='light-switch' onClick={() => switchLightButton()}>{bulbState ? 'ON' : 'OFF'}</button>
        </>
    );
}

export default LightSwitch;