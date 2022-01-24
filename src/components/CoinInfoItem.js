import React from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfoItem/CoinInfoItem.module.scss'
import logo from '../assets/img/logo.png'
import {Button} from "react-bootstrap";
import icCheckBox from '../assets/img/ic-checkbox.png'
import icClose from '../assets/img/ic-close-circle.png'
import icTick from '../assets/img/ic-tick-circle.png'

const CoinInfoItem = () => {
    return (
        <div className={s.coinInfoItem}>
            <div className={s.header}>
                <h2 className={s.title}>
                    Coin info
                </h2>
                <div className={s.logoBlock}>
                    <img src={logo} alt="logo"/>
                    <Button
                        variant="primary"
                        className="purple-button"
                    >
                        Buy now
                    </Button>
                </div>
            </div>

            <hr/>

            <div className={s.body}>
                <div className={s.rowItem}>
                    <span className={s.label}>
                        Smart contract address
                    </span>
                    <div className={s.content}>
                        <p>0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13</p>
                        <img src={icCheckBox} alt="icon" className="ms-2"/>
                    </div>
                </div>

                <div className={s.divider}/>

                <div className={s.rowItem}>
                    <span className={s.label}>
                        Symbol
                    </span>
                    <div className={s.content}>
                        <p>LHC</p>
                    </div>
                </div>

                <div className={s.divider}/>

                <div className={s.rowItem}>
                    <span className={s.label}>
                        Decimals
                    </span>
                    <div className={s.content}>
                        <p>8</p>
                    </div>
                </div>

                <div className={s.divider}/>

                <div className={s.rowItem}>
                    <span className={s.label}>
                        Holders
                    </span>
                    <div className={s.content}>
                        <p>457,306</p>
                    </div>
                </div>
            </div>

            <hr/>

            <div className={s.footer}>

                <div className={s.rowItem}>
                    <span className={s.label}>
                        Smart contract address
                    </span>
                    <div className={`${s.content} ${s.features}`}>
                        <img src={icTick} alt="icon" className="me-2"/>
                        <p className="me-4">Staking</p>
                        <img src={icTick} alt="icon" className="me-2"/>
                        <p className="me-4">NFT Games</p>
                        <img src={icClose} alt="icon" className="me-2"/>
                        <p>Masternode</p>
                    </div>
                </div>

                <div className={s.divider}/>

                <div className={s.rowItem}>
                    <span className={s.label}>
                        Links
                    </span>
                    <div className={s.content}>
                        <a href="#" className="navLinkBlue me-4">Reward Structure</a>
                        <a href="#" className="navLinkBlue me-4">Development</a>
                        <a href="#" className="navLinkBlue">What is it Masternode?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinInfoItem;