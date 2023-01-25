import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BookService from "../services/BookService";
import RemoveButton from "../components/RemoveButton";
import styled from "styled-components";
import ReadButton from "../components/ReadButton";

const BookItemContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    /* ^ Will wrap to line below if squished  */
    min-height: 292px;
`
const BookImageContainer = styled.div`
    max-width: 604px;
    min-width: 580px;
    height: 550px;
    background-color: #E4E7EC;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        width: 260px;
        aspect-ratio: 140 / 220;
        box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    }
`
const BookDetailsContainer = styled.div`
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-right: 5rem;
    }
    > div > h4 {
        font-size: var(--fs-text-sm);
        font-weight: var(--fw-semibold);
        color: var(--clr-grey-700);
    }
    > div > h3 {
        font-size: var(--fs-text-lg);
        font-weight: var(--fw-semibold);
        color: var(--clr-grey-900);
    }
`
const ButtonsContainer = styled.div`
    padding-top: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;
`

const BookPage = ({userBook, onBookRemoved}) => {

    const {id} = useParams()

    const [urlId, setUrlId] = useState(id)
    const [book, setBook] = useState({})

    useEffect(() => {
        BookService.getSingleBook(urlId)
            .then(result => setBook(result))
    }, [urlId])

    return (
        <>
            <NavBar id="nav"/>
            <BookItemContainer>
                <BookDetailsContainer>
                    <div>
                        <h4>{book.author_name}</h4>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                    </div>
                    <ButtonsContainer>
                        <RemoveButton className="btn-5" userBook={userBook} onBookRemoved={onBookRemoved}/>
                        <ReadButton>Mark as read</ReadButton>
                    </ButtonsContainer>
                </BookDetailsContainer>
                <BookImageContainer>
                    <img src={book.cover_image_url} alt={book.title} />
                </BookImageContainer>
                </BookItemContainer>
            <Footer />
        </>
    );
};

export default BookPage;