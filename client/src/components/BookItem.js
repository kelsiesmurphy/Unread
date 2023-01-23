const BookItem = ({book}) => {

    return (
        <>
        {/* <img src={book.cover_image_url} alt={book.title} width="100rem"/> */}
        <h4>{book.author_name ? book.author_name : "Author not available"}</h4>
        <h3>{book.title ? book.title : "Title not available"}</h3>
        <p>{typeof book.description === "string" ? book.description : "Description not available"}</p>
        </>
    )
}

export default BookItem;