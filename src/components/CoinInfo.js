import React from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfo.module.scss'
import {Container, Tab, Tabs} from "react-bootstrap";
import CoinInfoItem from "./CoinInfoItem";

const CoinInfo = () => {
    return (
        <Container className={s.coinInfo}>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <CoinInfoItem />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>
                        2
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <div>
                        3
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default CoinInfo;