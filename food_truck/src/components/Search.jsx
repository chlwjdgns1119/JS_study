import "./Search.css"
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    return(
        <div className="searchbar">
            <input type="text"/>
            <IoMdSearch className="search-icon" />
        </div>
    );
};

export default Search;