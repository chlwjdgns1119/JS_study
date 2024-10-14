import './FoodtruckTabDetail.css'

const FoodtruckTabDetail = () => {
    const arr = ['커피', '에이드', '술'];

    return(
        <div className="foodtrucktab-detil-list">
            {arr.map((item)=>{
                return(
                    <div key={item} className='foodtrucktab-detil-list-item'>
                        {item}
                    </div>
                )
            })}
        </div>
    );
}

export default FoodtruckTabDetail;