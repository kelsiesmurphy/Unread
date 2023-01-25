import styled from "styled-components"
import BookItem from "./BookItem"

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

const ResultsList = ({searchResults, onBookSelected}) => {

    const resultsNodes = searchResults.map((book, index) => {
        return <li key={index}><BookItem book={book} onBookSelected={onBookSelected} /></li>
    })

    return (
      <StyledUl>
        {resultsNodes}
      </StyledUl> 
    )
}

export default ResultsList;