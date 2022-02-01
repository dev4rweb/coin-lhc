import React from 'react';
import s from '../assets/styles/components/Footer/Footer.module.scss'
import {Container} from "react-bootstrap";
import logo from '../assets/img/logo-footer.svg'
import icTwitter from '../assets/img/ic-twitter.svg'
import icFb from '../assets/img/ic-fb.svg'
import icInsta from '../assets/img/ic-insta.svg'
import icTg from '../assets/img/ic-tg.svg'
import icYoutube from '../assets/img/ic-youtube.svg'
import Popup from '../components/Popup.js'
import {useState} from 'react'

const Footer = () => {
     const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.topFooter}>
                    <div className={s.menuLeft}>
                        <a href="https://lightcoin.io">Home</a>
                        <a href="#" onClick={() => setButtonPopup(true)}>Bridge </a>
                        <a href="#" onClick={() => setButtonPopup(true)}>Swap</a>
                        <a href="#" onClick={() => setButtonPopup(true)}>NFT Market</a>
                        <a href="#" onClick={() => setButtonPopup(true)}>Staking Dapp</a>
                    </div>
                    <div className={s.menuRight}>
                        <a href="#">Explorer</a>
                        <a href="https://linktr.ee/lightcoin" target="_blank">Exchanges</a>
                        <a href="https://lightcoin.io/Whitepaper1.1.pdf" target="_blank">Whitepaper</a>
                        <a href="#">Team</a>
                        <a href="#">Roadmap</a>
                        <a href="#" onClick={() => setButtonPopup(true)} >How to buy</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <hr/>
                <div className={s.bottomFooter}>
                    <img className={s.logo} src={logo} alt="logo"/>

                    <div className={s.social}>
                        <a href="https://twitter.com/LHC_COIN"><img src={icTwitter} alt="social"/></a>
                        <a href="https://t.me/LightCoinAnnouncements"><img src={icTg} alt="social"/></a>
                        <a href="https://www.youtube.com/channel/UCnG9EgXF4M5heyr31SmI0wA"><img src={icYoutube} alt="social"/></a>
                        <a href="https://discord.gg/aRpZhkwrcc"><img src={icYoutube} alt="social"/></a>
                    </div>

                    <span className={s.copyright}>© 2022 Lightcoin. All Right Reseved</span>
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Soon!</h3>
                </Popup>
            </Container>
        </footer>
    );
};

export default Footer;