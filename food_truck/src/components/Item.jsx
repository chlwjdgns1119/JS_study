import './Item.css';
import Foodtruck_image from '../assets/Foodtruck_image.png';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Item = ({score, reviewer}) => {
    return(
        <div className='item-class'>
            <img src={Foodtruck_image}/>
            <div className='item-content'>
                <div className='item-explain'>푸드트럭 설명란입니다. 줄바꿈도 확인 중입니다.</div>
                <div className='item-provider'>이건희</div>
                <div className='score-rating'>
                    {Array.from({ length: score-1 }, (_, index) => (
                        <FaStar key={index} />
                    ))}
                    {!(Number.isInteger(score))&& <FaStarHalfAlt />}
                    <div className='score-notation'>({reviewer})</div>
                </div>
            </div>
        </div>
    );
};

export default Item;