import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BookDetails from "../components/BookDetails";

const BookPage = () => {

    return (
        <>
            <NavBar id="nav"/>
            <h4>Bookpage</h4>
            <BookDetails/>
            <Footer />
        </>
    );
};

export default BookPage;