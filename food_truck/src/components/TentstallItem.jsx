import './TentstallItem.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import example from '../assets/example.png';

const TentstallItem = ({score, reviewer}) => {
    return(
        <div className='tentstall-item'>
            <img />
            <div className='tentstall-item-explain'>
                <div className='tentstall-item-title'>
                    푸드트럭 아이템 제목
                </div>
                <div className='tentstall-item-price'>
                    푸드트럭 아이템 가격
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