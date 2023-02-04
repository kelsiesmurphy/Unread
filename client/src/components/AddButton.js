const AddButton = ({book, onBookSelected}) => {
    const handleClick = () => {
        onBookSelected(book)
    }

    return(
        <button className="btn" onClick={handleClick}>Add to List</button>
    )
}

export default AddButton;