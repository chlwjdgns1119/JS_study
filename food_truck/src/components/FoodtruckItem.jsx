import './FoodtruckItem.css';
import example from '../assets/example.png';
import { FaStar } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
 
const FoodtruckItem = () => {
    const rating = 4.7;
    const reviewers = 57;
    const accumulated_customers = 154;

    return(
        <div className='foodtruck-main-itemlist-item'>
            <img src={example} />
            <div className='foodtruck-item-text'>
                <div className='foodtruck-item-title'>
                    푸드트럭 아이템 제목
                </div>
                <div className='foodtruck-item-explain'>
                    푸드트럭 아이템 설명
                </div>
            </div>
            <div className='foodtruck-item-comment'>
                <div className='foodtruck-item-rate'>
                    <FaStar/>
                    <p>{rating}</p>
                    <p>{`(${reviewers})`}</p>
                </div>
                <div className='foodtruck-item-customers'>
                    <FaUser/>
                    {accumulated_customers}
                </div>
            </div>
        </div>
    );
}

export default FoodtruckItem;