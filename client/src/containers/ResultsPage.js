import React from "react";
import ResultsList from "../components/ResultsList";



const ResultsPage = ({searchResults}) => {
    return (
        <>
        <h4>Resultspage</h4>
        <ResultsList searchResults={searchResults}/>
        </>
    );
};

export default ResultsPage;