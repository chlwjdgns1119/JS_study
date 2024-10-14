import './FoodtruckTab.css';
import { MdDensitySmall } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";
import { PiHamburgerFill } from "react-icons/pi";
import { GiDumpling } from "react-icons/gi";
import { GiSushis } from "react-icons/gi";
import tteokbokki from "../assets/tteokbokki.svg";
import bibimbap from "../assets/bibimbap.svg";
import takoyaki from "../assets/takoyaki.svg";
import shavedice from "../assets/shavedice.svg";
import lunchbox from "../assets/lunchbox.svg";
import FoodtruckTabDetail from './FoodtruckTabDetail';
import { useState } from 'react';


const FoodtruckTab = () => {

    const [tabFade, set_tabFade] = useState(false);


    return(
        <div className='foodtrucktab-list'>
            <div className="foodtrucktab-itemlist">
                <div className={`foodtrucktab-item ${(tabFade===1) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(1)}}>
                    <MdDensitySmall className='all-icon'/>
                    전체
                </div>
                <div className={`foodtrucktab-item ${(tabFade===2) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(2)}}>
                    <MdOutlineFoodBank className='meals-icon'/>
                    식사류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===3) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(3)}}>
                    <RiDrinks2Line className="beverages-icon" />
                    음료류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===4) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(4)}}>
                    <GiNoodles className="noodles-icon" />
                    면류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===5) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(5)}}>
                    <PiBowlFood className='bowls-icon' />
                    덮밥류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===6) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(6)}}>
                    <img src={tteokbokki} className='tteokbokki-icon'/>
                    떡볶이
                </div>
                <div className={`foodtrucktab-item ${(tabFade===7) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(7)}}>
                    <PiHamburgerFill className='pizza-icon'/>
                    양식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===8) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(8)}}>
                    <GiDumpling className='dumpling-icon'/>
                    중식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===9) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(9)}}>
                    <GiSushis className='sushi-icon'/>
                    일식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===10) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(10)}}>
                    <img src={bibimbap} className='bibimbap-icon'/>
                    한식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===11) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(11)}}>
                    <img src={lunchbox} className='lunchbox-icon'/>
                    도시락  
                </div>
                <div className={`foodtrucktab-item ${(tabFade===12) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(12)}}>
                    <img src={takoyaki} className='takoyaki-icon'/>
                    간식 
                </div>
                <div className={`foodtrucktab-item ${(tabFade===13) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(13)}}>
                    <img src={shavedice}  className='shavedice-icon'/>
                    디저트류 
                </div>    
                <FoodtruckTabDetail />
            </div>
        </div>
    )
}

export default FoodtruckTab;