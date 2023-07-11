import React from 'react';
import "./loading.css"
import load from "./assets/loading.svg"

function Loading() {
    return (
        <div className='spin-head'>
            <img src={load} alt='loading..' className='load-img'/>
            <p className='loading-text'>
                IEEE SB NITC
            </p>
        </div>
    )
}

export default Loading