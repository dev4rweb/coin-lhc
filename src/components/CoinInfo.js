import React from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfo.module.scss'
import {Container, Tab, Tabs} from "react-bootstrap";
import CoinInfoItem from "./CoinInfoItem";
import CoinInfoItemTwo from "./CoinInfoItemTwo";
import CoinInfoItemThree from "./CoinInfoItemThree";

const CoinInfo = () => {
    return (
        <Container className={s.coinInfo}>
            <Tabs defaultActiveKey="bsc" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="bsc" title="BSC">
                    <CoinInfoItem />
                </Tab>
                <Tab eventKey="mainnet" title="Mainnet">
                    <CoinInfoItemTwo />
                </Tab>
                <Tab eventKey="eth" title="ETH">
                    <CoinInfoItemThree />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default CoinInfo;