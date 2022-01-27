import React from 'react';
import s from '../assets/styles/components/AdvancedBlock/AdvancedBlock.module.scss'
import {Container} from "react-bootstrap";

const AdvancedBlock = () => {
    return (
        <Container className={s.advancedBlock}>
            <div className={s.leftSide}>
                <span className="block-title">Features</span>
                <h2 className="title mt-3 mb-4">
                    How are we going <span>to do</span> all of this?
                </h2>
                <p className="content mb-5">
                    We provides you with the tools & resources so you can be in contrl of your funds at all times.
                </p>
                <div className={s.stages}>
                    <span className={s.stage}>Q1</span>
                    <span className={s.stage}>Q2</span>
                    <span className={s.stage}>Q3</span>
                    <span className={`${s.stage} ${s.active}`}>Q4</span>
                    <span className={s.stage}>Q5</span>
                </div>
            </div>
            <div className={s.rightSide}>
                <div className={s.titleBlock}>
                    <span className={s.name}>Q4 2021</span>
                    <span className={s.status}>In progress</span>
                </div>
                <ul className={s.descList}>
                    <li>− V3 Metascanner @ Future Blockchain Summit</li>
                    <li>− First Tier 1 Listing</li>
                    <li>− Website v2</li>
                    <li>− Expanding Team</li>
                    <li>− Game studio/developer partnerships</li>
                    <li>− − First Tier 1 Listing</li>
                    <li>− Website v2</li>
                    <li>− V3 Metascanner @ Future Blockchain Summit</li>
                    <li>− Expanding Team</li>
                    <li>− Game studio/developer partnerships</li>
                </ul>
            </div>
        </Container>
    );
};

export default AdvancedBlock;