import BookItem from "./BookItem"


const ResultsList = ({searchResults}) => {

    const resultsNodes = searchResults.map((book, index) => {
        return <li key={index}><BookItem book={book}/></li>
    })

    return (
      <ul>
        {resultsNodes}
      </ul> 
    )
}

export default ResultsList