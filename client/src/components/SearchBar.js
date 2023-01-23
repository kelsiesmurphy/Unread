import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const SearchBar = ({handleSubmitForm}) => {
    const navigate = useNavigate();

    const [searchBarValue, setSearchBarValue] = useState("");

    const handleInput = (event) => {
        setSearchBarValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitForm(searchBarValue.replace(/\s/g, '+'))
        setSearchBarValue("");
        navigate('/books');
    };


    return (

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search"
                name="searchBarInput"
                value={searchBarValue}
                onChange={handleInput}
                data-testid="search-bar"
            />
            <input type="submit" value="Search" data-testid="search-button"/>
        </form>
    );
};

export default SearchBar;