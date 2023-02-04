const RemoveButton = ({userBook, onBookRemoved}) => {
    const handleRemove = () => {
        onBookRemoved(userBook)
    }

    return (
        <button className="btn btn-secondary" onClick={handleRemove}>Remove</button>
    )
}

export default RemoveButton;