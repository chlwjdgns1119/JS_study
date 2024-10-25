import "./TenstallTab.css";

const TenstallTab = () => {

    const temp_category = {
        "시설 및 인프라" : ['캐노피', '테이블 및 의자', '전기 및 조명', '소도구', '음향 장비', '안전 장비'],
        "주방 설비" : {
            '조리 기구' : ['렌지', '튀김기', '버너', '그릴러', '오븐', '구이기', '불판', '분식기계', '아이스크림/슬러시 기계', '붕어빵/타꼬야끼 기계', '토스트기계', '와플기계', '기타'],
            '조리 도구' : ['뒤집개/주걱/국자', '집게/스푼/젓가락', '채반/믹싱볼', '찜기', '계량스푼/계량컵', '칼/가위/채칼', '기타조리도구', '기타'],
            '보관 도구' : ['냉장고', '쇼케이스', '제빙기/빙삭기', '아이스박스', '온장고/보온고', '온수기', '기타'],
            '기타': ['커피포트', '믹서기/블렌더', '보관 용기'],
        },
        "식자재": ['육류', '채소류', '곡물', '조미료/양념', '유제품', '냉동식품', '가공된 식자재', '특별 소스'],
        '기타' : ['포장 도구', '일회용품', '기타']
    }

    return(
        <div className="tentstalltab">
            <div className="tentstalltab-category"> 
                <select >
                    <option value="xx">Select your units</option>
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                </select>
            </div>
            <div className="tentstalltab-category-item">

            </div>
        </div>
    );
}

export default TenstallTab;