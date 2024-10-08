import './Content.css'
import Itemlist from './Itemlist';

const Content = () => {
    return(
        <div className='content'>
            <div className='itemlist'>
                <div className='itemlist-title'>이런 음식들은 어때요?</div>
                <div className='itemlist-explain'>맛있는 음식들을 직접 만나보세요!!</div>
                <Itemlist />
            </div>
            <div className='itemlist'>
                <div className='itemlist-title'>음식 왕초보들을 위한 레시피!!</div>
                <div className='itemlist-explain'>시중 인기 음식 레시피로 맛있는 요리를 만들어봐요!</div>
                <Itemlist />
            </div>
            <div className='itemlist'>
                <div className='itemlist-title'>다양한 무대 알아보기 {">"} </div>
                <div className='itemlist-explain'>인기 있었던 무대들!!</div>
                <Itemlist />
            </div>
        </div>
    );
};

export default Content;
