import React from 'react';
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'
import {useState} from 'react'
import Popup from '../components/Popup.js'

const RightMenu = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={s.rightMenu}>
            <a href="#" className={s.rightMenuItem}>Explorers</a>
            <a href="#" className={s.rightMenuItem}>Exchanges</a>
            <a href="https://lightcoin.io/Whitepaper1.1.pdf" target="_blank" className={s.rightMenuItem}>Whitepaper</a>
            <a href="#" className={s.rightMenuItem}>Team</a>
            <a href="#" className={s.rightMenuItem}>Roadmap</a>
            <a href="#" className={s.rightMenuItem} onClick={() => setButtonPopup(true)} >How to buy</a>
            <a href="https://support.lightcoin.io/" target="_blank" className={s.rightMenuItem}>Support</a>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Soon!</h3>
            </Popup>
        </div>
    );
};

export default RightMenu;