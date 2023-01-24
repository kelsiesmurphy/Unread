import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BookService from "../services/BookService";

const BookPage = () => {

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
                <div>
                    <img src={book.cover_image_url} alt={book.title} />
                </div>
                <div>
                    <h4>{book.author_name}</h4>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                </div>
            <Footer />
        </>
    );
};

export default BookPage;