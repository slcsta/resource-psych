import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Get Started</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='./resource-psych/images/img-5.jpg'
                            text='Meet Dr. Soden'
                            // label='MeetDrSoden'
                            path='/meet-dr-soden'
                        />
                        <CardItem 
                            src='./resource-psych/images/img-2.jpg'
                            text='Services'
                            label='Services'
                            path='/services'
                        />
                        {/* </ul>
                        <ul className='cards_items'> */}
                        <CardItem 
                            src='./resource-psych/images/img-3.jpg'
                            text='Scheduling'
                            label='Scheduling'
                            path='/scheduling'
                        />
                        <CardItem 
                            src='./resource-psych/images/img-4.jpg'
                            text='FAQs'
                            label='FAQs'
                            path='/faqs'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
} 

export default Cards;