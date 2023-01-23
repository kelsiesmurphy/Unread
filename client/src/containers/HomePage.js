import React from "react";
import SearchBar from "../components/SearchBar";

const HomePage = ({handleSubmitForm}) => {

    return (
        <>
        <h4>Homepage</h4>
        <SearchBar handleSubmitForm={handleSubmitForm}/>
        </>
    );
};

export default HomePage;