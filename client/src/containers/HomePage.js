import React from "react";

const HomePage = ({handleSubmitForm}) => {

    return (
        <>
        <h4>Homepage</h4>
        <SearchBar handleSubmitForm={handleSubmitForm}/>
        </>
    );
};

export default HomePage;