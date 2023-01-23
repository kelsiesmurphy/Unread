import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';

const MainContainer = () => {


    const DummySearchResults = [
        {
          "title": "The Lord of the Rings",
          "author_name": "J.R.R. Tolkien",
          "is_read": true,
          "cover_image_url": "https://covers.openlibrary.org/b/id/12003171-L.jpg",
          "description": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell, by chance, into the hands of the hobbit, Bilbo Baggins.\r\n\r\nFrom his fastness in the Dark Tower of Mordor, Sauron's power spread far and wide. He gathered all the Great Rings to him, but ever he searched far and wide for the One Ring that would complete his dominion.\r\n\r\nOn his eleventy-first birthday Bilbo disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest --- to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. THE LORD OF THE RINGS tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard, Merry, Pippin, and Sam, Gimli the Dwarf, Legolas the Elf, Boromir of Gondor, and a tall, mysterious stranger called Strider.\r\n--back cover"
        },
        {
          "title": "Lord of the Flies",
          "author_name": "William Golding",
          "is_read": false,
          "cover_image_url": "https://covers.openlibrary.org/b/id/12723923-L.jpg",
          "description": "Lord of the Flies is a 1954 novel by Nobel Prize–winning British author William Golding. The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves. Themes include the tension between groupthink and individuality, between rational and emotional reactions, and between morality and immorality."
        },
        {
          "title": "The Great Gatsby",
          "author_name": "F. Scott Fitzgerald",
          "is_read": true,
          "cover_image_url": "https://covers.openlibrary.org/b/id/8432047-L.jpg",
          "description": "Here is a novel, glamorous, ironical, compassionate – a marvelous fusion into unity of the curious incongruities of the life of the period – which reveals a hero like no other – one who could live at no other time and in no other place. But he will live as a character, we surmise, as long as the memory of any reader lasts.\r\n\r\nThere was something gorgeous about him, some heightened sensitivity to the promises of life... It was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again.\r\n\r\nIt is the story of this Jay Gatsby who came so mysteriously to West Egg, of his sumptuous entertainments, and of his love for Daisy Buchanan – a story that ranges from pure lyrical beauty to sheer brutal realism, and is infused with a sense of the strangeness of human circumstance in a heedless universe."
        },
        {
          "title": "Harry Potter and the Philosopher's Stone",
          "author_name": "J. K. Rowling",
          "is_read": false,
          "cover_image_url": "https://covers.openlibrary.org/b/id/12902949-L.jpg",
          "description": "When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry.\r\n\r\nThey are swiftly confiscated by his aunt and uncle.\r\n\r\nThen, on Harry’s eleventh birthday, a strange man bursts in with some important news: Harry Potter is a wizard and has been awarded a place to study at Hogwarts.\r\n\r\nAnd so the first of the Harry Potter adventures is set to begin."
        },
      ];

      const handleSubmitForm = (searchBarInput) => { 
        
        console.log(searchBarInput);
      }
      const [searchResults, setSearchResults] = useState(DummySearchResults)

    return (
        <>
        <Router>
            <NavBar id="nav"/>
            <Routes>
                <Route path='/' element={ <HomePage handleSubmitForm={handleSubmitForm}/> } />
                <Route path='/books' element={ <ResultsPage/> } />
                <Route path='/' element={ <HomePage/> } />
                <Route path='/books' element={ <ResultsPage searchResults={searchResults}/> } />
                <Route path='/user' element={ <UserPage/> } />
                <Route path='/book' element={ <BookPage/> } /> 
            </Routes>
        </Router>
        </>
    ); // path for books needs fixed, should be books/{id}
};


export default MainContainer;