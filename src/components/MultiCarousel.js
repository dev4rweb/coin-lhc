import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../assets/styles/components/MultiCarousel/MultiCarousel.scss'
import cardImg from '../assets/img/cardImg.png'


/*https://www.npmjs.com/package/react-multi-carousel*/
const MultiCarousel = () => {
    const cards = [
        {id: 1, title: 'Masternodes', body: 'Get more rewards for hosting and providing layer two services to the LHC network.'},
        {id: 2, title: 'Cold Staking', body: 'Receive staking rewards while your funds are securely locked in offline cold storage.'},
        {id: 3, title: 'Economics', body: 'Long term balance between inflation and deflation; engineered to be scalable.'},
        {id: 4, title: 'Masternodes', body: 'Get more rewards for hosting and providing layer two services to the LHC network.'},
        {id: 5, title: 'Cold Staking', body: 'Receive staking rewards while your funds are securely locked in offline cold storage.'},
        {id: 6, title: 'Economics', body: 'Long term balance between inflation and deflation; engineered to be scalable.'},
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1700 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1700, min: 998 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 998, min: 0 },
            items: 1
        }
    };

    return (
        <div className="mb-5">
            <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    cards.map(card =>
                        <div
                            key={card.id}
                            className="d-flex justify-content-between align-items-center"
                            style={{width: '100%', maxWidth: '575px', margin: '0 auto'}}
                        >
                            <img
                                style={{marginRight: '42px'}}
                                src={cardImg}
                                alt="icon"
                            />
                            <div style={{width: '434px'}}>
                                <h6 className="mb-3">
                                    {card.title}
                                </h6>
                                <p className="content mb-0">
                                    {card.body}
                                </p>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default MultiCarousel;