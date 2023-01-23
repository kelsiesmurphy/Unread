const AddButton = ({book, onBookSelected}) => {

    const handleClick = () => {
        onBookSelected(book)
    }

    return(
        <button onClick={handleClick}>Add to List</button>
    )
}

export default AddButton;