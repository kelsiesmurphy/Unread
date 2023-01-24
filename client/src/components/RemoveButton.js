const RemoveButton = ({userBook, onBookRemoved}) => {

    const handleRemove = () => {
        onBookRemoved(userBook)
    }

    return (
        <button className="btn" onClick={handleRemove}>Remove</button>
    )
}

export default RemoveButton;