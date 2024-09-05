import "./Header.css"
import brand_logo from '../assets/brand_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import naverblog_logo from '../assets/naverblog_logo.png';
import youtube_logo from '../assets/youtube_logo.png';
import Rental from './Rental';
import Festival from './Festival';
import Market from './Market';
import Community from './Community';
import Search from './Search';
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButon";

const Header = () => {
    return(
        <header id="header">
            <div className="header_class">
                <img src={brand_logo} />
                <div className="navbar-left">
                    <div className="navbar-social-media">
                        <img src={instagram_logo} onClick={()=>{window.open("https://www.instagram.com/")}} />
                        <img src={naverblog_logo} onClick={()=>{window.open("https://www.naver.com/")}} />
                        <img src={youtube_logo} onClick={()=>{window.open("https://www.youtube.com/")}} />
                    </div>
                    <div className="navbar-right">
                        <Rental />
                        <Festival />
                        <Market />
                        <Community />
                        <Search />
                        <div className="navbar-auth">   
                            <LoginButton />
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>        
                        
        </header>
    );
};

export default Header;
