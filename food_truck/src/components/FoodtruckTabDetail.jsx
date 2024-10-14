import './FoodtruckTabDetail.css'

const FoodtruckTabDetail = () => {
    const arr = ['커피', '에이드', '술'];

    return(
        <div className="foodtrucktab-detail-list">
            <div className='foodtrucktab-detail-itemlist'>
                {arr.map((item)=>{
                    return(
                        <div key={item} className='foodtrucktab-detail-list-item'>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FoodtruckTabDetail;