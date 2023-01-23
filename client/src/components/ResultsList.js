import BookItem from "./BookItem"


const ResultsList = ({searchResults, onBookSelected}) => {

    const resultsNodes = searchResults.map((book, index) => {
        return <li key={index}><BookItem book={book} onBookSelected={onBookSelected}/></li>
    })

    return (
      <ul>
        {resultsNodes}
      </ul> 
    )
}

export default ResultsList;