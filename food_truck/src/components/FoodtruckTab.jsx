import './FoodtruckTab.css';
import { MdDensitySmall } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";
import { PiHamburgerFill } from "react-icons/pi";
import { GiDumpling } from "react-icons/gi";
import { GiSushis } from "react-icons/gi";
import tteokbokki from "../assets/tteokbokki.png";
import bibimbap from "../assets/bibimbap.png";
import lunchbox from "../assets/lunchbox.png";
import takoyaki from "../assets/takoyaki.png";
import shavedice from "../assets/shavedice.png";
import { useState } from 'react';

const FoodtruckTab = () => {

    const [tabFade, set_tabFade] = useState(false);


    return(
        <div className="foodtrucktab-list">
            <div className={`foodtrucktab-item ${tabFade ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(1)}}>
                <MdDensitySmall className='all-icon'/>
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
                <img src={tteokbokki} className='tteokbokki-icon'/>
                떡볶이
            </div>
            <div className="foodtrucktab-item">
                <PiHamburgerFill className='pizza-icon'/>
                양식
            </div>
            <div className="foodtrucktab-item">
                <GiDumpling className='dumpling-icon'/>
                중식
            </div>
            <div className="foodtrucktab-item">
                <GiSushis className='sushi-icon'/>
                일식
            </div>
            <div className="foodtrucktab-item">
                <img src={bibimbap} className='bibimbap-icon'/>
                한식
            </div>
            <div className="foodtrucktab-item">
                <img src={lunchbox} className='lunchbox-icon'/>
                도시락  
            </div>
            <div className="foodtrucktab-item">
                <img src={takoyaki} className='takoyaki-icon'/>
                간식 
            </div>
            <div className="foodtrucktab-item">
                <img src={shavedice}  className='shavedice-icon'/>
                디저트류 
            </div>
        </div>
    )
}

export default FoodtruckTab;