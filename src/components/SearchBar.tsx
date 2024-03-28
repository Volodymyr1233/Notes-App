import React from "react";
import { IoSearch } from "react-icons/io5";
import "./styles.css";

interface Props {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

const SearchBar = ({searchValue, setSearchValue}: Props) => {
    return (
        <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
            <span className="searchIcon"><IoSearch/></span>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="type to search..." className="input--search"/>
        </form>
    )
}

export default SearchBar;