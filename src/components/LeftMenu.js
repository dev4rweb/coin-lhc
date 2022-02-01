import React from 'react';
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'
import Popup from '../components/Popup.js'
import {useState} from 'react'

const LeftMenu = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
        <div className={s.leftMenu}>
            <a className={s.leftMenuItem} href="#" onClick={() => setButtonPopup(true)}>Home</a>
            <a className={s.leftMenuItem} href="#" onClick={() => setButtonPopup(true)}>Bridge</a>
            <a className={s.leftMenuItem} href="#" onClick={() => setButtonPopup(true)}>Swap</a>
            <a className={s.leftMenuItem} href="#" onClick={() => setButtonPopup(true)}>NFT Market</a>
            <a className={s.leftMenuItem} href="https://lightcoin.io/stake" target="_blank">Staking Dapp</a>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Soon!</h3>
            </Popup>
        </div>
    );
};

export default LeftMenu;