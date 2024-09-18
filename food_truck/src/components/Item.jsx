import './Item.css';
import Foodtruck_image from '../assets/Foodtruck_image.png';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Item = ({score}) => {
    return(
        <div className='item-class'>
            <img src={Foodtruck_image}/>
            <div>
                {Array.from({ length: score }, (_, index) => (
                    <FaStar key={index} />
                ))}
                {!(Number.isInteger(score))&& <FaStarHalfAlt />}
                
            </div>
        </div>
    );
};

export default Item;