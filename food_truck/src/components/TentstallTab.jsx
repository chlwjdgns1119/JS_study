import "./TentstallTab.css";
import { useState } from "react";

const TentstallTab = () => {

    const [category_hovered, setHovered] = useState(false);
    const [category, setCategory] = useState(false);
    const [detail_hovered, setDetail] = useState(false);

    const temp_category = {
        "시설 및 인프라" : ['캐노피', '테이블 및 의자', '전기 및 조명', '소도구', '음향 장비', '안전 장비'],
        '조리 기구' : ['렌지', '튀김기', '버너', '그릴러', '오븐', '구이기', '불판', '분식기계', '아이스크림/슬러시 기계', '붕어빵/타꼬야끼 기계', '토스트기계', '와플기계', '기타'],
        '조리 도구' : ['뒤집개/주걱/국자', '집게/스푼/젓가락', '채반/믹싱볼', '찜기', '계량스푼/계량컵', '칼/가위/채칼', '기타조리도구', '기타'],
        '보관 도구' : ['냉장고', '쇼케이스', '제빙기/빙삭기', '아이스박스', '온장고/보온고', '온수기', '기타'],
        "식자재": ['육류', '채소류', '곡물', '조미료/양념', '유제품', '냉동식품', '가공된 식자재', '특별 소스'],
        '기타' : ['보관 용기', '포장 도구', '일회용품', '기타']
    }

    return(
        <div className="tentstalltab">
            <div className="tentstalltab-category"> 
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===0 || category==false) ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(0)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('시설 및 인프라')}}
                >
                    전체
                </div>
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===1 || category==='시설 및 인프라') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(1)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('시설 및 인프라')}}
                >
                    시설 및 인프라
                </div>
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===2 || category==='조리 기구') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(2)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('조리 기구')}}
                >
                    조리 기구
                </div>
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===3 || category==='조리 도구') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(3)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('조리 도구')}}
                >
                    조리 도구
                </div>
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===4 || category==='보관 도구') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(4)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('보관 도구')}}
                >
                    보관 도구
                </div>
                <div 
                    className={`tentstalltab-category-item ${(category_hovered===5 || category==='식자재') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(5)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('식자재')}}
                >
                    식자재
                </div>
                <div 
                    className={`tentstalltab-category-item-end ${(category_hovered===6 || category==='기타') ? `tentstalltab-category-hovered`: ""}`} 
                    onMouseOver={()=>{setHovered(6)}} 
                    onMouseOut={()=>{setHovered(false)}}
                    onClick={()=>{setCategory('기타')}}
                >
                    기타
                </div>
            </div>
            {
                category &&
                (
                    <div className="tentstalltab-category-detail">
                        {temp_category[category].map((item, index)=>{
                            return(
                                <div key={item} className={`tentstalltab-category-detail-item ${detail_hovered===index ? `tentstalltab-detail-hovered` : ""}`} onClick={()=>{setDetail(index)}}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default TentstallTab;