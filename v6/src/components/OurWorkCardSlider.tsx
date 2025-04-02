
// Slider component
import React from 'react';
import Carousel from './Carousel';
import OurWorkCard from './OurWorkCard';

// Define the Card type
interface Card {
    id: string | number;
    image: string;
    imageAlt: string;
    title: string;
    tags: string[]; // Array of strings
    description: string;
    learnMoreLink: string;
}

// Props for OurWorkCardSlider
interface OurWorkCardSliderProps {
    cards: Card[];
}

const OurWorkCardSlider: React.FC<OurWorkCardSliderProps> = ({ cards }) => {
    const slides = cards.map((card) => <OurWorkCard key={card.id} card={card} />);

    return <Carousel slides={slides} />;
};

export default OurWorkCardSlider;