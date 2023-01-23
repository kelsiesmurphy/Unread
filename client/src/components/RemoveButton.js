const RemoveButton = ({userBook, onBookRemoved}) => {

    const handleRemove = () => {
        onBookRemoved(userBook)
    }

    return (
        <button onClick={handleRemove}>Delete</button>
    )
}

export default RemoveButton;