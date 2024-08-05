import React, { useState } from 'react';
import Accordion from '../accordion';
import './styles.css'
import RandomColor from '../random-color';
import StarRating from '../star-rating';


function App() {
    // Define a state variable to track the visibility of the component
    const [isAccordionVisible, setAccordionIsVisible] = useState(false);
    const [isRandomVisible, setIsRandomVisible] = useState(false);
    const [isStarVisible, setIsStarVisible] = useState(false);

    return (
        <div className='allcomponents'>
            <ul className='components-list'>

                <li className='component-item' id='Accordion'>
                    <h3 onClick={() => setAccordionIsVisible(!isAccordionVisible)}>TOGGLE: Accordion</h3>
                    {isAccordionVisible && <Accordion />}
                </li>

                <li className='component-item' id='random'>
                    <h3 onClick={() => setIsRandomVisible(!isRandomVisible)}>TOGGLE: Random Color Generator </h3>
                    {isRandomVisible && <RandomColor />}
                </li>

                <li className='component-item' id='star-rating'>
                    <h3 onClick={() => setIsStarVisible(!isStarVisible)}>TOGGLE: Rating </h3>
                    {isStarVisible && <StarRating noOfStars={5}/>}
                </li>

            </ul>
        </div>
    );
}

// Your component that you want to show/hide


export default App;

