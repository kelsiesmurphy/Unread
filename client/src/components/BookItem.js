import AddButton from "./AddButton";

const BookItem = ({book, onBookSelected}) => {

    return (
        <>
        <img src={book.cover_image_url} alt={book.title} width="100rem"/>
        <h4>{book.author_name}</h4>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <AddButton book={book} onBookSelected={onBookSelected}/>
        </>
    )
}

export default BookItem;