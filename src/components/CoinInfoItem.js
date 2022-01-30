import React, {useRef, useState} from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfoItem/CoinInfoItem.module.scss'
import logo from '../assets/img/logo.png'
import {Button, Overlay, Popover} from "react-bootstrap";
import icCheckBox from '../assets/img/ic-checkbox.png'
import icClose from '../assets/img/ic-close-circle.png'
import icTick from '../assets/img/ic-tick-circle.png'

const CoinInfoItem = () => {
    const [val, setVal] = useState('0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13')
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const copyToClipBoard = e => {
        navigator.clipboard.writeText(val)
            .then(res => {
                // console.log('res ', res)
                setShow(true);
                setTarget(e.target);
                setTimeout(() => {
                    setShow(false);
                }, 1500);
            });
        console.log('copyToClipBoard')
    };

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
                    <div ref={ref} className={s.content}>
                        <p>{val}</p>
                        <img
                            src={icCheckBox}
                            alt="icon"
                            onClick={copyToClipBoard}
                            className={`ms-2 ${s.copyToClipboard}`}
                        />
                        <Overlay
                            show={show}
                            target={target}
                            placement="top-start"
                            container={ref}
                            containerPadding={20}
                        >
                            <Popover id="popover-contained">
                                {/*<Popover.Header as="h3">Popover bottom</Popover.Header>*/}
                                <Popover.Body>
                                    <strong>Copied!</strong>
                                </Popover.Body>
                            </Popover>
                        </Overlay>
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
                        <img src={icTick} alt="icon" className="me-3"/>
                        <p className="me-4">Staking</p>
                        <img src={icTick} alt="icon" className="me-3"/>
                        <p className="me-4">NFT Games</p>
                        <img src={icClose} alt="icon" className="me-4"/>
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