import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import ResultsList from "../components/ResultsList";
import SectionHeader from "../components/SectionHeader";

const ResultsPage = ({isLoading, searchResults, onBookSelected}) => {
    return (
        <>
            <NavBar/>
            <SectionHeader header={isLoading ? "Loading..." : `${searchResults.length} Search Results`} subheader={isLoading ? "Loading results..." : "Decide what to read next"} isLoading={isLoading}/>
            <ResultsList searchResults={searchResults} onBookSelected={onBookSelected}/>
            <Footer />
        </>
    );
};

export default ResultsPage;