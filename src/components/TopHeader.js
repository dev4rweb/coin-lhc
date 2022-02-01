import React from 'react';
import s from '../../src/assets/styles/components/TopHeader/TopHeader.module.scss'
import {Container} from "react-bootstrap";

const TopHeader = () => {
    return (
        <div className={s.topHeader}>
            <Container className={s.wrapper}>
                <div className={s.headerCard}>
                    <span className={s.title}>
                        Max Total supply:
                    </span>
                    <span className={s.content}>
                        214 748 3647
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Coin name:
                    </span>
                    <span className={s.content}>
                        Lightcoin
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Circulating supply:
                    </span>
                    <span className={s.content}>
                         47 914 106
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Fully Diluted Valuation
                    </span>
                    <span className={s.content}>
                        $110,618,387
                    </span>
                </div>
                <div className={s.divider}/>
                <div className={s.headerCard}>
                    <span className={s.title}>
                        Current Price:
                    </span>
                    <span className={s.content}>
                        $0.04438
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;