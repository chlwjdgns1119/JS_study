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
import { useState } from 'react';


const FoodtruckTab = () => {

    const [tabFade, set_tabFade] = useState(false);
    const [tabDetail, set_tabDetail] = useState(false);
    const [tabDetailKey, set_tabDetailKey] = useState(false);
    const arr = {
        'meals' : ['스테이크', '브리또'],
        'beverages' : ['커피', '에이드', '차'],
        'noodles': ['국수', '우동', '소바'],
        'deopbab': ['스테이크 덮밥', '쉬림프 덮밥', '치킨 덮밥', '육회 비빔밥'],
        'bunsig' : ['순대', '떡볶이', '어묵'],
        'western_food': ['스테이크', '파스타', '피자'],
        'chinese_food': ['짜장면', '마라탕', '볶음밥', '탕수육'],
        'japanese_food': ['초밥', '돈까스', '오므라이스'],
        'korean_food': ['비빔밥', '김치찌개', '백반'],
        'lunchbox': ['소불고기 도시락', '스테이크 도시락', '삼겹살 도시락'],
        'snack': ['닭강정', '떡꼬치', '토스트', '컵밥'],
        'dessert': ['빙수', '츄러스', '핫도그']
    } 

    return(
        <div className='foodtrucktab-list'>
            <div className="foodtrucktab-itemlist">
                <div className={`foodtrucktab-item ${(tabFade===1) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(1); set_tabDetailKey(false)}}>
                    <MdDensitySmall className='all-icon'/>
                    전체
                </div>
                <div className={`foodtrucktab-item ${(tabFade===2) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(2); set_tabDetailKey('meals')}}>
                    <MdOutlineFoodBank className='meals-icon'/>
                    식사류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===3) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(3); set_tabDetailKey('beverages')}}>
                    <RiDrinks2Line className="beverages-icon" />
                    음료류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===4) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(4); set_tabDetailKey('noodles')}}>
                    <GiNoodles className="noodles-icon" />
                    면류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===5) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(5); set_tabDetailKey('deopbab')}}>
                    <PiBowlFood className='bowls-icon' />
                    덮밥류
                </div>
                <div className={`foodtrucktab-item ${(tabFade===6) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(6); set_tabDetailKey('bunsig')}}>
                    <img src={tteokbokki} className='tteokbokki-icon'/>
                    분식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===7) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(7); set_tabDetailKey('western_food')}}>
                    <PiHamburgerFill className='pizza-icon'/>
                    양식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===8) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(8); set_tabDetailKey('chinese_food')}}>
                    <GiDumpling className='dumpling-icon'/>
                    중식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===9) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(9); set_tabDetailKey('japanese_food')}}>
                    <GiSushis className='sushi-icon'/>
                    일식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===10) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(10); set_tabDetailKey('korean_food')}}>
                    <img src={bibimbap} className='bibimbap-icon'/>
                    한식
                </div>
                <div className={`foodtrucktab-item ${(tabFade===11) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(11); set_tabDetailKey('lunchbox')}}>
                    <img src={lunchbox} className='lunchbox-icon'/>
                    도시락  
                </div>
                <div className={`foodtrucktab-item ${(tabFade===12) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(12); set_tabDetailKey('snack')}}>
                    <img src={takoyaki} className='takoyaki-icon'/>
                    간식 
                </div>
                <div className={`foodtrucktab-item ${(tabFade===13) ? `foodtrucktab-hovered` : ""}`}  onClick={()=> {set_tabFade(13); set_tabDetailKey('dessert')}}>
                    <img src={shavedice}  className='shavedice-icon'/>
                    디저트류 
                </div>    
                <div className="foodtrucktab-detail-list" />
                <div className='foodtrucktab-detail-itemlist'>
                    {arr.map((item, index)=>{
                        return(
                            <div key={item} className={`foodtrucktab-detail-list-item ${(tabDetail===index) ? `foodtrucktab-detail-hovered` : ""}`} onClick={()=>{set_tabDetail(index)}} >
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FoodtruckTab;