import RemoveButton from "./RemoveButton";

const UserBookItem = ({userBook, onBookRemoved}) => {

    return (
        <>
        <img src={userBook.cover_image_url} alt={userBook.title} width="100rem"/>
        <h4>{userBook.author_name}</h4>
        <h3>{userBook.title}</h3>
        <p>{userBook.description}</p>
        <RemoveButton userBook={userBook} onBookRemoved={onBookRemoved}/>
        </>
    )
}

export default UserBookItem;