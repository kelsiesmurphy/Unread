import React from "react";
import UserBookList from "../components/UserBookList"



const UserPage = ({toReadList, onBookRemoved}) => {
    return (

        <UserBookList toReadList={toReadList} onBookRemoved={onBookRemoved}/>
    );
};

export default UserPage;