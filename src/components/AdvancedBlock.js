import React, {useState} from 'react';
import s from '../assets/styles/components/AdvancedBlock/AdvancedBlock.module.scss'
import {Container} from "react-bootstrap";

const AdvancedBlock = () => {
    const pagination = [
        {id: 1, name: 'Q1'},
        {id: 2, name: 'Q2'},
        {id: 3, name: 'Q3'},
        {id: 4, name: 'Q4'},
        {id: 5, name: 'Q5'},
    ]
    const cards = [
        {id: 1, title: 'Q1 2021', description: 'quod, quos ratione velit voluptatum!'},
        {id: 2, title: 'Q2 2019', description: 'Lorem ipsum dolor sit amet, consectetur'},
        {id: 3, title: 'Q3 2015', description: 'adipisicing elit. Asperiores cupiditate dignissimos'},
        {id: 4, title: 'Q4 2023', description: 'ex exercitationem fugit impedit, maxime modi nesciunt'},
        {id: 5, title: 'Q5 2025', description: 'nostrum odit pariatur placeat quasi quia quo '},
    ]
    const [activePag, setActivePag] = useState(pagination[3])
    const [curCard, setCurCard] = useState(cards[3])

    const handleClick = item => {
        console.log('handleClick', item)
        setActivePag(item)
        const data = cards.find(i => i.id === item.id)
        setCurCard(data)
    };

    return (
        <Container className={s.advancedBlock}>
            <div className={s.leftSide}>
                <span className="block-title">Advanced</span>
                <h2 className="title mt-3 mb-4">
                    How are we going <span>to do</span> all of this?
                </h2>
                <p className="content mb-5">
                    We provides you with the tools & resources so you can be in contrl of your funds at all times.
                </p>
                <div className={s.stages}>
                    {
                        pagination.map(i => {
                            const isActive = i.id === activePag.id ? s.active : ''
                            return (
                                <span
                                    key={i.id}
                                    onClick={event => handleClick(i)}
                                    className={`${s.stage} ${isActive}`}
                                >
                                    {i.name}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className={s.rightSide}>
                <div>
                    <div className={s.titleBlock}>
                        <span className={s.name}>{curCard.title}</span>
                        <span className={s.status}>In progress</span>
                    </div>
                    <ul className={s.descList}>
                        <li>− {curCard.description}</li>
                        <li>− First Tier 1 Listing</li>
                        <li>− Website v2</li>
                        <li>− Expanding Team</li>
                        <li>− Game studio/developer partnerships</li>
                        <li>− First Tier 1 Listing</li>
                        <li>− Website v2</li>
                        <li>− V3 Metascanner @ Future Blockchain Summit</li>
                        <li>− Expanding Team</li>
                        <li>− Game studio/developer partnerships</li>
                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default AdvancedBlock;