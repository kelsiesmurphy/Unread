import UserBookItem from "./UserBookItem"
import styled from "styled-components"

const StyledUl = styled.ul`
  padding: 42px 1rem;
  > li {
    margin: 64px auto;
    max-width: 866px;
    list-style: none;
    border: 1px solid #EAECF0;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  }
`

const UserBookList = ({user, readState, onBookRemoved, onBookRead, onBookUnread}) => {
    const unreadUserBooksNodes = user.unreadBooks.map((userBook, index) => {
        return <li key={index}><UserBookItem readState={readState} userBook={userBook} onBookRemoved={onBookRemoved} onBookRead={onBookRead} onBookUnread={onBookUnread}/></li>
    })
    const readUserBooksNodes = user.readBooks.map((userBook, index) => {
      return <li key={index}><UserBookItem readState={readState} userBook={userBook} onBookRemoved={onBookRemoved} onBookRead={onBookRead} onBookUnread={onBookUnread}/></li>
    })

    return (
      <StyledUl>
        {readState === "read" ? readUserBooksNodes : unreadUserBooksNodes}
      </StyledUl> 
    )
}

export default UserBookList;