import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase'
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);
        
    //codigo que corre si se cumple una condicion
    useEffect(() => {
        //Esto va a correr una sola vez cuando cargue el codigo

        const unsubscribe = database
        .collection('people')
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            //cleanup
            unsubscribe(); 
        } 

    }, [])
        
    //push to an array in react
    //cuidado con el ...people porque sino borra los datos previos
    //setPeople([...people, 'charles', 'John'])
    return (
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}> 
                        <div
                        style={{backgroundImage: `url(${person.url})`}} 
                        className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
            ))} 
            </div>
        </div>
    )
}

export default TinderCards
