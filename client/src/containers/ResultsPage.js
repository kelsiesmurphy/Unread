import React from "react";
import ResultsList from "../components/ResultsList";



const ResultsPage = ({searchResults, onBookSelected}) => {
    return (

        <>
        <h4>Resultspage</h4>
        <ResultsList searchResults={searchResults} onBookSelected={onBookSelected}/>
        </>
    );
};

export default ResultsPage;