import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import ResultsList from "../components/ResultsList";
import SectionHeader from "../components/SectionHeader";

const ResultsPage = ({searchResults, onBookSelected}) => {
    return (
        <>
            <NavBar/>
            <SectionHeader header={`${searchResults.length} Search Results`} subheader="Decide what to read next"/>
            <ResultsList searchResults={searchResults} onBookSelected={onBookSelected}/>
            <Footer />
        </>
    );
};

export default ResultsPage;