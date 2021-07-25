import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'steve jobs',
            url: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5536592a70a1ae8d775dee2e/jobs-manzana.jpg'
        },
        {
            name:'bill gates',
            url:'https://www.infotechnology.com/files/image/91/91036/5fb68d7f9e06a.jpg'
        }
        ]);
        
        //codigo que corre si se cumple una condicion
        useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])
        //TEsteo Git supongo
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
