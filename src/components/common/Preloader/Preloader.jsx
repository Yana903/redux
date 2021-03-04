import React from 'react';
import preloader from "./../../../assets/images/preloader.gif"

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white', width: '100px'}}>
            <img src={preloader}/>
        </div> 
    )
}

export default Preloader