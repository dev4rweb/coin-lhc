import React from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfoItem/CoinInfoItem.module.scss'
import logo from '../assets/img/logo.png'
import {Button} from "react-bootstrap";

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
        </div>
    );
};

export default CoinInfoItem;