'use client';
import React from 'react';
import CardEvent from './CardEvent';
import Carousel from './Carousel';
function CardEventSlider({cards}:{cards: any[]}) {
    const slides = cards.map((event) => <CardEvent key={event.title} event={event} />);

    return <Carousel slides={slides} />;
}

export default CardEventSlider;





