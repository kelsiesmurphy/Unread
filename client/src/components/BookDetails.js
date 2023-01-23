import React from "react";
import AddButton from "./AddButton";


const BookDetails = ({book, onBookSelected}) => {

    return (

        <>
            <div>
                <img src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"} alt={book.title} />
            </div>
            <div>
                <h4>{book.author_name ? book.author_name : "Author not available"}</h4>
                <h3>{book.title ? book.title : "Title not available"}</h3>
                <p>{typeof book.description === "string" ? book.description : "Description not available"}</p>
                <AddButton book={book} onBookSelected={onBookSelected}/>
            </div>
        </>
    );
};

export default BookDetails;