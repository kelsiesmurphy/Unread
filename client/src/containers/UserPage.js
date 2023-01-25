import React, {useState} from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import UserBookList from "../components/UserBookList"


const UserPage = ({user, onBookRemoved, onBookRead}) => {

    const [readState, setReadState] = useState("unread")
  
    const handleReadState = (toggleValue) => {
        setReadState(toggleValue)
    };

    return (
        <>
            <NavBar id="nav"/>
            <SectionHeader header="Your reading list" subheader="Selected books for you"/>
            <div className="option-pill">
                <button onClick={() => handleReadState('read')} id={readState === "read" ? "active" : ""}>Read</button>
                <button onClick={() => handleReadState('unread')} id={readState === "unread" ? "active" : ""}>Unread</button>
            </div>
            <UserBookList user={user} readState={readState} onBookRemoved={onBookRemoved} onBookRead={onBookRead}/>
            <Footer />
        </>
    );
};

export default UserPage;