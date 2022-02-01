import React from 'react';
import s from '../assets/styles/components/WalletBlock/WalletBlock.module.scss'
import macbook from '../assets/img/macbook.png'
import {Container} from "react-bootstrap";
import icWin from '../assets/img/ic-purple-win.svg'
import icMac from '../assets/img/ic-purple-mac.svg'
import icApple from '../assets/img/ic-purple-apple.svg'
import icAndroid from '../assets/img/ic-purple-android.svg'
import Popup from '../components/Popup.js'
import {useState} from 'react'


const WalletBlock = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={s.walletBlock}>
            <img className={s.macbook} src={macbook} alt="macbook"/>
            <div className={s.lineBg}>
                <Container className={s.wrapper}>
                    <div className={s.rightSide}>
                        <div className={s.content}>
                            <span className="block-title">Download</span>
                            <h2 className="title mt-3 mb-4">
                                <span>Wallet & Tools</span>
                            </h2>
                            <p className="content mb-5">
                                We provides you with the tools & resources so you can be in contrl of your funds at all
                                times.
                            </p>
                            <div className={`d-flex justify-content-between align-items-center ${s.iconWrapper}`}>
                                <span>
                                    Download for:
                                </span>
                                <a href="https://git.io/JZBq8"><img className={s.icon} src={icWin} alt="icon"/></a>
                                <a href="https://git.io/JnICM"><img className={s.icon} src={icMac} alt="icon"/></a>
                                <a href="#"><img className={s.icon} src={icApple} alt="icon" onClick={() => setButtonPopup(true)}/></a>
                                <a href="#"><img className={s.icon} src={icAndroid} alt="icon" onClick={() => setButtonPopup(true)} /></a>
                                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <h3>Soon!</h3>
                                </Popup>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );


};


export default WalletBlock;