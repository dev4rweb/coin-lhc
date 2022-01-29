import React from 'react';
import s from '../assets/styles/components/PartnerShipBlock/PartnerShipBlock.module.scss'
import {Button, Container} from "react-bootstrap";

const PartnerShipBlock = () => {
    return (
        <div className={s.partnerBlock}>
            <Container className={s.wrapper}>
                <span className="block-title mb-5">Partnership</span>
                <h2 className="title mt-3 mb-5 text-center" style={{maxWidth: '720px'}}>
                    Are you looking to <span>partner</span> with Lightcoin?
                </h2>
                <p className="content mb-5 text-center"  style={{maxWidth: '700px'}}>
                    We are looking to work with people and companies that are serious about the mass adoption of crypto,
                    metaverse explorers, marketing partners.
                </p>
                <Button
                    variant="light"
                    size="lg"
                    style={{width: '160px', marginBottom: '-30px'}}
                >
                    Contact Us
                </Button>
            </Container>
        </div>
    );
};

export default PartnerShipBlock;