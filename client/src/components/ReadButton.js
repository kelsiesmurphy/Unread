const ReadButton = ({userBook, readState, onBookRead, onBookUnread}) => {
    const handleToggle = () => {
        if(readState === "read"){
            onBookUnread(userBook)
        } else if (readState === "unread") {
            onBookRead(userBook)
        }
    }

    return (
        <button className="btn" onClick={handleToggle}>{readState === "read" ? "Mark as Unread" : "Mark as Read"}</button>
    )
}

export default ReadButton;