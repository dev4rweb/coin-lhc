import React from 'react';
import s from '../assets/styles/components/BrandBlock/BrandBlock.module.scss'
import {Container} from "react-bootstrap";
import brandGlu from "../assets/img/brand-glu.svg";
import brandM from "../assets/img/brand-m.svg";
import brandKiwi from "../assets/img/brand-kiwi.svg";
import brandSup from "../assets/img/brand-sup.svg";
import brandHuawei from "../assets/img/brand-huawei.svg";
import brandBabel from "../assets/img/brand-babel.svg";

const BrandBlock = () => {
    const brands = [
        {id: 1, logo: brandGlu, name: 'Glu'},
        {id: 2, logo: brandM, name: 'Malwarebytes'},
        {id: 3, logo: brandKiwi, name: 'Kiwi'},
    ]

    const brandsRow = [
        {id: 1, logo: brandKiwi, name: 'Kiwi'},
        {id: 2, logo: brandSup, name: 'Supercell'},
        {id: 3, logo: brandHuawei, name: 'Huawei'},
        {id: 4, logo: brandBabel, name: 'Babbel'},
        {id: 5, logo: brandGlu, name: 'Glu'},
    ]
    return (
        <Container className={s.brandsBlock}>
            <div className={`${s.brandTitle} mb-5`}>
                <h2 className="title">
                    Create <span>future</span> with the best of the best
                </h2>
                {
                    brands.map((a, index) =>
                        <div className={s.brandCard} key={index}>
                            <img src={a.logo} alt="logo"/>
                            <span>{a.name}</span>
                        </div>
                    )
                }
            </div>

            <div className={s.brandTitle}>
                {
                    brandsRow.map(b =>
                        <div className={s.brandCard} key={b.id}>
                            <img src={b.logo} alt="logo"/>
                            <span>{b.name}</span>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default BrandBlock;