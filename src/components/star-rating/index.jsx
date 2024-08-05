import {FaStar} from 'react-icons/fa'
import './styles.css'
import { useState } from 'react';

export default function StarRating({noOfStars}){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);



    function handleMouseEnter(index){
        setHover(index);
        console.log(index,hover,rating);
    }

    function handleMouseLeave(){
        setHover(rating)
    }

    function handleMouseOnclick(index){
        setRating(index);
        if(rating === index){
            setRating(0)
            
        }
    }

    return (
        <div className="star-rating" >
            {
                Array.from({length: noOfStars}, (_, index) => {
                    index += 1
                    return <FaStar 
                    key={index}
                    className={index<=(hover) || index <=(rating)? 'active':'inactive'}
                    onClick={()=> handleMouseOnclick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    />
                })
        }

        </div>
    )
}