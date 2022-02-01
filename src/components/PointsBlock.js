import React from 'react';
import s from '../assets/styles/components/PointsBlock/PointsBlock.module.scss'
import icGame from '../assets/img/ic-game.svg'
import icProfile from '../assets/img/ic-profile-circle.svg'
import {Container} from "react-bootstrap";

const PointsBlock = () => {
    return (
        <Container className={`${s.pointsBlock}`}>
            <div className={s.leftSide}>
                <div className="game-card">
                    <div className="game-side">
                        <img src={icProfile} alt="icon"/>
                        <span
                            className="mt-3 text-center"
                        >
                            DeFi apps
                        </span>
                    </div>
                    <div className="divider"/>
                    <div className="game-side">
                        <img src={icGame} alt="icon"/>
                        <span
                            className="mt-3 text-center"
                        >
                            Lightcoin Games
                        </span>
                    </div>
                </div>
            </div>
            <div className={s.rightSide}>
                <span className="block-title">Main Feature Points</span>
                <h2 className="title mt-3 mb-4">
                    Multi-Faceted Blockchain Based <span>Ecosystem</span>
                </h2>
                <p className="content mb-5">
                    It will enable the creation of DeFi apps, NFT, and smart contracts. There will be publicly
                    accessible tools for easily exchanging currencies between all levels.
                </p>
            </div>
        </Container>
    );
};

export default PointsBlock;