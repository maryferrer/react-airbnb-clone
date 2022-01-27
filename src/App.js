import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import array from './data';

function App() {

    const cards = array.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
                />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-container">
            {cards}
            </section>
        </div>
    )
}

export default App;