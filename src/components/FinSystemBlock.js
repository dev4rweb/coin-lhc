import React from 'react';
import {Button} from "react-bootstrap";
import s from '../assets/styles/components/FinSystemBlock/FinSystemBlock.module.scss'

const FinSystemBlock = () => {
    return (
        <div className={s.finSystemBlock}>
            <h2>The future of financial system is here</h2>
            <p>The Lightcoin Foundation wil develop a use for the current financial system</p>
            <div className="d-flex justify-content-center">
                <Button
                    variant="primary"
                    className="purple-button"
                >
                    Buy now
                </Button>
            </div>
        </div>
    );
};

export default FinSystemBlock;