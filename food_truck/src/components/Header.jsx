import "./Header.css"
import brand_logo from '../assets/brand_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import naverblog_logo from '../assets/naverblog_logo.png';
import youtube_logo from '../assets/youtube_logo.png';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
    return(
        <header id="header">
            <div className="header_class">
                <div className="brand_header">
                    <img src={brand_logo} />
                </div>
                <div className="navbar-menu">
                    <div className="navbar-social-media">
                        <img src={instagram_logo} onClick={()=>{window.open("https://www.instagram.com/")}} />
                        <img src={naverblog_logo} onClick={()=>{window.open("https://www.naver.com/")}} />
                        <img src={youtube_logo} onClick={()=>{window.open("https://www.youtube.com/")}} />
                    </div>
                    <div className="navbar-right">
                        <Menu />
                        <Search />
                        <div className="navbar-auth">   
                            <div className="button">
                                로그인
                            </div>
                            <div className="button">
                                회원가입
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
                        
        </header>
    );
};

export default Header;