import './TentstallItem.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import example from '../assets/tentstallItem_example.png';
import { useState } from 'react';

const TentstallItem = ({score, reviewer}) => {
    const [itemHover, setItemHover] = useState(false);

    return(
        <div className={`tentstall-item ${itemHover ? `tentstall-item-hovered` : ""}`} onMouseOver={()=>{setItemHover(true)}} onMouseOut={()=>{setItemHover(false)}}>
            <img src={example}/>
            <div className='tentstall-item-explain'>
                <div className='tentstall-item-title'>
                    40구 타코야끼 기계
                </div>
                <div className='tentstall-item-price'>
                    17,800원
                </div>
                <div className='tentstall-item-score-rating'>
                    {Array.from({ length: score-1 }, (_, index) => (
                        <FaStar key={index} className='tentstall-item-score-icon'/>
                    ))}
                    {!(Number.isInteger(score))&& <FaStarHalfAlt className='tentstall-item-score-icon'/>}
                    <div className='score-notation'>({reviewer})</div>
                </div>
            </div>
        </div>
    );
};

export default TentstallItem;