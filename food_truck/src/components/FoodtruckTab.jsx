import './FoodtruckTab.css';
import { MdOutlineFoodBank } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";



const FoodtruckTab = () => {
    return(
        <div className="foodtrucktab-list">
            <div className="foodtrucktab-item">
                전체
            </div>
            <div className="foodtrucktab-item">
                <MdOutlineFoodBank className='meals-icon'/>
                식사류
            </div>
            <div className="foodtrucktab-item">
                <RiDrinks2Line className="beverages-icon" />
                음료류
            </div>
            <div className="foodtrucktab-item">
                <GiNoodles className="noodles-icon" />
                면류
            </div>
            <div className="foodtrucktab-item">
                <PiBowlFood className='bowls-icon' />
                덮밥류
            </div>
            <div className="foodtrucktab-item">
                분식류
            </div>
            <div className="foodtrucktab-item">
                양식
            </div>
            <div className="foodtrucktab-item">
                중식
            </div>
            <div className="foodtrucktab-item">
                일식
            </div>
            <div className="foodtrucktab-item">
                한식
            </div>
            <div className="foodtrucktab-item">
                도시락  
            </div>
            <div className="foodtrucktab-item">
                간식 
            </div>
            <div className="foodtrucktab-item">
                디저트류 
            </div>
        </div>
    )
}

export default FoodtruckTab;