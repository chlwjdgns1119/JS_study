import "./Header.css"
import brand_logo from '../assets/brand_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import naverblog_logo from '../assets/naverblog_logo.png';
import youtube_logo from '../assets/youtube_logo.png';

const Header = () => {
    return(
        <header id="header">
            <div className="brand_header">
                <img src={brand_logo} />
            </div>
            <div className="navbar-menu">
                <div className="navbar-left">
                    <img src={instagram_logo} />
                    <img src={naverblog_logo} />
                    <img src={youtube_logo} />
                </div>
                <div className="navbar-center">
                    푸드트럭, 행사, 장터, 커뮤니티 페이지
                </div>
                <div className="navbar-right">
                    <div className="search-bar">
                        검색바
                    </div>
                    <div className="button">
                        로그인
                    </div>
                    <div className="button">
                        회원가입
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
