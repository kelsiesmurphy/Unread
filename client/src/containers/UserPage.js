import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import UserBookList from "../components/UserBookList"

const UserPage = ({user, onBookRemoved, onBookRead}) => {
    return (
        <>
            <NavBar id="nav"/>
            <SectionHeader header="Your reading list" subheader="Selected books for you"/>
            <UserBookList user={user} onBookRemoved={onBookRemoved} onBookRead={onBookRead}/>
            <Footer />
        </>
    );
};

export default UserPage;