import './FoodtruckItem.css';
import example from '../assets/example.png';
import { FaStar } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
 
const FoodtruckItem = () => {
    const rating = 4.7;
    const reviewers = 57;
    const accumulated_customers = 154;

    const [item_hover, setItemHover] = useState(false);


    return(
        <div 
            className="foodtruck-main-itemlist-item"
            onMouseOver={()=>{setItemHover(true)}} onMouseOut={()=>{setItemHover(false)}}
        >
            <img className={item_hover ? `foodtruck-item-img-hovered` : ""} src={example} />
            <div className='foodtruck-item-text'>
                <div className='foodtruck-item-title'>
                    푸드트럭 아이템 제목
                </div>
                <div className='foodtruck-item-subtitle'>
                    푸드트럭 아이템 설명
                </div>
            </div>
            {
                (!item_hover) ?
                (<div className='foodtruck-item-comment'>
                    <div className='foodtruck-item-rate'>
                        <FaStar/>
                        <p>{rating}</p>
                        <p>{`(${reviewers})`}</p>
                    </div>
                    <div className='foodtruck-item-customers'>
                        <FaUser/>
                        {accumulated_customers}
                    </div>
                </div>) :
                (<div className='foodtruck-item-explain'>
                    대충 설명입니다 알아서 잘 읽어주세요. 대충 설명입니다 알아서 잘 읽어주세요.
                </div>)
            }
            
            
        </div>
    );
}

export default FoodtruckItem;