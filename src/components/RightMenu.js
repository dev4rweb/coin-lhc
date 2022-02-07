import React from 'react';
import {useState} from 'react'
import Popup from '../components/Popup.js'
import {DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'

const RightMenu = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [dropTitle, setDropTitle] = useState('Dropdown')
    return (
        <div className={s.rightMenu}>
            <a href="#" className={s.rightMenuItem}>Explorers</a>
            <a href="#" className={s.rightMenuItem}>Exchanges</a>
            <a href="https://lightcoin.io/Whitepaper1.1.pdf" target="_blank" className={s.rightMenuItem}>Whitepaper</a>
            <a href="#" className={s.rightMenuItem}>Team</a>
            <a href="#" className={s.rightMenuItem}>Roadmap</a>
            <DropdownButton
                id="dropdown-basic-button"
                variant="link"
                className="right-menu"
                title={dropTitle}>
                <DropdownItem
                    href="#/action-1"
                    onClick={event => setDropTitle('Action')}
                >Action</DropdownItem>
                <DropdownItem
                    href="#/action-2"
                    onClick={event => setDropTitle('Another action')}
                >Another action</DropdownItem>
                <DropdownItem
                    href="#/action-3"
                    onClick={event => setDropTitle('Something else')}
                >Something else</DropdownItem>
            </DropdownButton>
            <a href="#" className={s.rightMenuItem} onClick={() => setButtonPopup(true)} >How to buy</a>
            <a href="https://support.lightcoin.io/" target="_blank" className={s.rightMenuItem}>Support</a>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Soon!</h3>
            </Popup>
        </div>
    );
};

export default RightMenu;