import React, {useState} from "react";


const SearchBar = ({handleSubmitForm}) => {

    const [searchBarInput, setSearchBarInput] = useState("");

    const handleInput = (event) => {
        setSearchBarInput(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitForm({
            searchBarInput: searchBarInput
        })
        setSearchBarInput("");
    };


    return (

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search"
                name="searchBarInput"
                value={searchBarInput}
                onChange={handleInput}
                data-testid="search-bar"
            />
            <input type="submit" value="Search" data-testid="search-button"/>
        </form>
    );
};

export default SearchBar;