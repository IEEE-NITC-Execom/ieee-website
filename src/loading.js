import React from 'react';
import { motion } from 'framer-motion';
import "./loading.css";
import Logo from "./assets/logoblack.svg";

function Loading() {
    return (
        <div className='spin-head'>
            <motion.img 
                src={Logo} 
                alt='loading..' 
                className='load-img' 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className='loading-text'>
                IEEE SB NITC
            </p>
        </div>
    )
}

export default Loading;
