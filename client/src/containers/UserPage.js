import React from "react";
import ReadButton from "../components/ReadButton";
import RemoveButton from "../components/RemoveButton";
import UserBookList from "../components/UserBookList";
import UserListFilter from "../components/UserListFilter";

const UserPage = () => {

    return (

        <>
        <h4>Userpage</h4>
        <UserListFilter/>
        <UserBookList/>
        </>
    );
};

export default UserPage;