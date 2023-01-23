import React from "react";
import { useParams } from "react-router-dom";


const BookDetails = ({book}) => {

    const {id} = useParams(book._id)

    return (

        <>
            <div>
                <img src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"} alt={book.title} />
            </div>
            <div>
                <h4>{book.author_name ? book.author_name : "Author not available"}</h4>
                <h3>{book.title ? book.title : "Title not available"}</h3>
                <p>{typeof book.description === "string" ? book.description : "Description not available"}</p>
            </div>
        </>
    );
};

export default BookDetails;