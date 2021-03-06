import React from 'react';
import s from '../assets/styles/components/FinFunctionBlock/FinFunctionBlock.module.scss'
import {Button, Container} from "react-bootstrap";

const FinFunctionBlock = () => {
    return (
        <Container className={s.finFunctionBlock}>
            <h2 className={s.leftSide}>
                Financial <span>Function</span> Which Created OnlyFor You Bussines
            </h2>
            <div className={s.rightSide}>
                <p>
                    The Lightcoin Foundation will develop a use case for the current financial system. Lightcoin, which
                    blockchain, will remain strong several levels like as ERC20, TRC20 and Binance Smart Chain.
                </p>
                <a href="https://lightcoin.io/Whitepaper1.1.pdf" target="_blank"> 
                <Button
                    variant="primary"
                    className="purple-button me-5">
                        Whitepaper
                </Button>
                </a>

                <a href="http://explorer.light-coin.org/" target="_blank" className="navLinkBlue">Coin Explorer</a>
            </div>
        </Container>
    );
};

export default FinFunctionBlock;