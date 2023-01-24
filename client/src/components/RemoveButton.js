const RemoveButton = ({userBook, onBookRemoved}) => {

    const handleRemove = () => {
        onBookRemoved(userBook)
    }

    return (
        <button className="btn" onClick={handleRemove}>Delete</button>
    )
}

export default RemoveButton;