import { ReactNode, useState } from "react";

export default function SearchableLayout({children}: {children:ReactNode}){
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력해주세요..."/>
                <button>검색</button>
            </div>
            {children}
        </div>
    )
}