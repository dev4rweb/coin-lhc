import React from 'react';
import s from '../assets/styles/components/FeaturesBlock/FeaturesBlock.module.scss'
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import miniLogo from '../assets/img/mini-logo.svg'
import dropImg from '../assets/img/ic-dropdown.svg'

const FeaturesBlock = () => {
    return (
        <Container
            className={`${s.featuresBlock} mb-3`}
        >
            <div className={s.leftSide}>
                <span className="block-title">Features</span>
                <h2 className="title mt-3 mb-4">
                    <span>Features</span> of Lightcoin Platform
                </h2>
                <p className="content mb-5">
                    It will enable the creation of DeFi apps, NFT, and smart contracts. There will be publicly
                    accessible tools for easily exchanging currencies between all levels.
                </p>
                <a href="#" className="navLinkBlue ms-4">More Info</a>
            </div>
            <div className={s.rightSide}>
                <div className="lhc-card mb-4">
                    <div className="mb-2">
                        <img src={miniLogo} alt="icon" className="me-2"/>
                        <span className="lhc-name me-2">Mainnet</span>
                        <img src={dropImg} alt="icon"/>
                    </div>
                    <h5 className="mb-0">
                        70 LHC
                    </h5>
                </div>

                <InputGroup className="mb-4" style={{height: '100px'}}>
                    <FormControl
                        type="text"
                        size="lg"
                        className="bg-black text-white border-0 black-input-form"
                        style={{borderRadius: '25px 0 0 25px', background: 'rgba(255, 255, 255, 0.05)'}}
                        value={'70 LHC'}
                        disabled
                    />
                    <Button
                        variant="primary"
                        size="lg"
                        className="purple-button big-purple-btn"
                    >
                        Swap
                    </Button>
                </InputGroup>

                <div className="lhc-card">
                    <div className="mb-2">
                        <img src={miniLogo} alt="icon" className="me-2"/>
                        <span className="lhc-name me-2">BEP 20</span>
                        <img src={dropImg} alt="icon"/>
                    </div>
                    <h5 className="mb-0">
                        70 LHC
                    </h5>
                </div>
            </div>
        </Container>
    );
};

export default FeaturesBlock;