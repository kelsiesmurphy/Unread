import RemoveButton from "./RemoveButton";
import styled from 'styled-components'
import {Link} from 'react-router-dom';


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
    justify-content: space-between;
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
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

const UserBookItem = ({userBook, onBookRemoved}) => {

    const bookUrl = `http://localhost:3000/books/${userBook._id}`

    return (
        <BookItemContainer>
            <BookImageContainer>
                <img src={userBook.covers ? `https://covers.openlibrary.org/b/id/${userBook.covers[0]}-L.jpg` : "/book-cover-unavailable.svg"} alt={userBook.title} />
            </BookImageContainer>
            <BookDetailsContainer>
                <div>
                    <h4>{userBook.author_name ? userBook.author_name : "Author not available"}</h4>
                    <h3>{userBook.title ? userBook.title : "Title not available"}</h3>
                    <p>{typeof userBook.description === "string" ? userBook.description : "Description not available"}</p>
                    <Link to={bookUrl}>expand</Link>
                </div>
                <RemoveButton userBook={userBook} onBookRemoved={onBookRemoved}/>
            </BookDetailsContainer>
        </BookItemContainer>
    )
}

export default UserBookItem;