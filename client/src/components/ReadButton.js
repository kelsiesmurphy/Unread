const ReadButton = ({userBook, onBookRead}) => {

    const handleMarkRead = () => {
        onBookRead(userBook)
    }

    return (
        <button className="btn" onClick={handleMarkRead}>Mark as Read</button>
    )
}

export default ReadButton;