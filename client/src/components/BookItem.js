
import AddButton from "./AddButton";
import styled from 'styled-components'


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

const BookItem = ({book, onBookSelected}) => {

    fetch( `https://openlibrary.org/${book.authors[0].author.key}.json` )
      .then( res => console.log(res.json()))

    return (
        <BookItemContainer>
            <BookImageContainer>
                <img src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "/book-cover-unavailable.svg"} alt={book.title} />
            </BookImageContainer>
            <BookDetailsContainer>
                <div>
                    {/* FIX THIS KELSIE */}
                    <h4>{book.authors ? book.authors[0].name : "Author not available"}</h4> 
                    <h3>{book.title ? book.title : "Title not available"}</h3>
                    <p>{typeof book.description === "string" ? book.description.substring(0, 104) + "..." : "Description not available"}</p>
                </div>
                <AddButton book={book} onBookSelected={onBookSelected}/>
            </BookDetailsContainer>
        </BookItemContainer>
    )
}

export default BookItem;