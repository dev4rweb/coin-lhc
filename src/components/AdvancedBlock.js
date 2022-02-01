import React, {useState} from 'react';
import s from '../assets/styles/components/AdvancedBlock/AdvancedBlock.module.scss'
import {Container} from "react-bootstrap";

const AdvancedBlock = () => {
    const pagination = [
        {id: 1, name: '2021'},
        {id: 2, name: 'Q1 2022'},
        {id: 3, name: 'Q2 2022'},
        {id: 4, name: 'Q3 2022'},
        {id: 5, name: '2023'},
    ]
    const cards = [
        {id: 1, title: '2021', description1: '− Whitepaper', description2: '− Establishing a team', description4: '− First website', description5: '− Mainnet Launch', description6: '− Creation LHC contract for ETH Network',description7: '− Creation LHC contract for BSC Network',description8: '− Staking platform on BSC network',description9: '− Crex24 listing',description10: '− masternodes.online listing',status: 'Finished'},
        {id: 2, title: 'Q1 2022', description1: '− Website v2', description2: '− NFT game development begins', description4: '− NFT staking for ETH network development begins', description5: '− Creation of Whitepaper v2 begins', description6: '− Game studio/developer partnerships',description7: '− Swap platform development begins',description8: '− NFT marketplace development begins',description9: '',description10: '',status: 'In progress'},
        {id: 3, title: 'Q2 2022', description1: '− More shared masternode listings', description2: '− Staking platfoms listings', description4: '− Whitepaper v2 release', description5: '− Mars House NFT Game release', description6: '− Staking NFT game release',description7: 'Team Expanding',description8: '',description9: '',description10: '',status: 'In progress'},
        {id: 4, title: 'Q3 2022', description1: '− Airdrops', description2: '− Swap platform release', description4: '− Polygon LHC contract live', description5: '− More NFT Games', description6: '− LHC tron smart contract creation begins',description7: '− Farm smart contract development begins',description8: '− LHC Shop release',description9: '− Multi-chain payment tool development research begins',description10: '',status: 'In Future'},
        {id: 5, title: '2023', description1: '− More Staking hostings', description2: '− Swap, farming platform release', description4: '− More Exchanges', description5: '− Social Media marketing', description6: '− Rewards for holders',description7: '− LHC on Tron Chain live',description8: '',description9: '',description10: '',status: 'In Future'},
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
                <span className="block-title">Roadmap</span>
                <h2 className="title mt-3 mb-4">
                    What <span>are we</span> planning?
                </h2>
                <p className="content mb-5">
                    Take a look at our already achieved goals and see what else we are planning! 
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
                        <span className={s.status}>{curCard.status}</span>
                    </div>
                    <ul className={s.descList}>
                        <li>{curCard.description1}</li>
                        <li>{curCard.description2}</li>
                        <li>{curCard.description3}</li>
                        <li>{curCard.description4}</li>
                        <li>{curCard.description5}</li>
                        <li>{curCard.description6}</li>
                        <li>{curCard.description7}</li>
                        <li>{curCard.description8}</li>
                        <li>{curCard.description9}</li>
                        <li>{curCard.description10}</li>
                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default AdvancedBlock;