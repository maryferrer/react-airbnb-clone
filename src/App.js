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
                item={item}
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