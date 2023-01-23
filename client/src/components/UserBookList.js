import UserBookItem from "./UserBookItem"

const UserBookList = ({toReadList, onBookRemoved}) => {

    const userBooksNodes = toReadList.map((userBook, index) => {
        return <li key={index}><UserBookItem userBook={userBook} onBookRemoved={onBookRemoved}/></li>
    })

    return (

      <ul>
        {userBooksNodes}
      </ul> 
    )
}

export default UserBookList;