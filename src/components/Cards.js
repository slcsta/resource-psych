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
                            src='images/img-1.jpg'
                            text='Meet Dr. Soden'
                            label='MeetDrSoden'
                            path='/meet-dr-soden'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Treatement'
                            label='Treatment'
                            path='/treatment'
                        />
                        {/* </ul>
                        <ul className='cards_items'> */}
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Scheduling'
                            label='Scheduling'
                            path='/scheduling'
                        />
                        <CardItem 
                            src='images/img-4.jpg'
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