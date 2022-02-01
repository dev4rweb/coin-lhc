import React from 'react';
import s from '../assets/styles/components/TeamBlock/TeamBlock.module.scss'
import {Container} from "react-bootstrap";
import teamOne from '../assets/img/team-one.png'
import teamTwo from '../assets/img/team-two.png'
import teamThree from '../assets/img/team-three.png'
import teamFour from '../assets/img/team-four.png'

const TeamBlock = () => {
    const teams = [
        {id: 1, pict: teamOne, name: 'Lord', prof: 'Chief Executive Officer'},
        {id: 2, pict: teamTwo, name: 'Pir', prof: 'VP of Operations'},
        {id: 3, pict: teamThree, name: 'Jackob', prof: 'Global Head of Products'},
        {id: 4, pict: teamFour, name: 'Skiller', prof: 'Director of Content'},
    ]

    return (
        <Container className={s.teamBlock}>
            <span className="block-title mb-5">Meet us</span>
            <h2 className="title mt-3 mb-5">
                Our <span>Team</span>

            </h2>
            <div className={s.teamWrapper}>
                {
                    teams.map(i =>
                        <div
                            className={s.teamCard}
                            key={i.id}
                        >
                            <img src={i.pict} alt="ava"/>
                            <span className={s.name}>{i.name}</span>
                            <span className={s.prof}>{i.prof}</span>
                        </div>
                    )
                }
            </div>


        </Container>
    );
};

export default TeamBlock;