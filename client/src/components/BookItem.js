import React from 'react';
import {Link} from 'react-router-dom';
import AddButton from "./AddButton";
import styled from 'styled-components';


const BookItemContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    /* ^ Will wrap to line below if squished  */
    min-height: 292px;
`
const BookImageContainer = styled.div`
    max-width: 404px;
    min-width: 280px;
    background-color: #E4E7EC;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        width: 145px;
        aspect-ratio: 145 / 219;
        box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    }
`
const BookDetailsContainer = styled.div`
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    > h4 {
        font-size: var(--fs-text-sm);
        font-weight: var(--fw-semibold);
        color: var(--clr-grey-700);
    }
    > h3 {
        font-size: var(--fs-text-lg);
        font-weight: var(--fw-semibold);
        color: var(--clr-grey-900);
    }
`

const BookItem = ({book, onBookSelected}) => {

    const bookUrl = `/books/${book._id}`

    return (
        <BookItemContainer>
            <BookImageContainer>
                <img src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"} alt={book.title} />
            </BookImageContainer>
            <BookDetailsContainer>
                <h4>{book.author_name ? book.author_name : "Author not available"}</h4>
                <h3>{book.title ? book.title : "Title not available"}</h3>
                <p>{typeof book.description === "string" ? book.description : "Description not available"}</p>
                <Link to={bookUrl}>expand</Link>
                <AddButton book={book} onBookSelected={onBookSelected}/>
            </BookDetailsContainer>
        </BookItemContainer>
    )
}

export default BookItem;