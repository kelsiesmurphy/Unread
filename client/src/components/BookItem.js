const BookItem = ({book}) => {

    return (
        <>
        <img src={book.cover_image_url} alt={book.title} width="100rem"/>
        <h4>{book.author_name}</h4>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        </>
    )
}

export default BookItem;