import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {

  constructor(){


    super();
      this.state = {
        books: [],
        searchField: '',
      };
    }
    componentDidMount(){
      const library = {
        "book":[
          {
            "title":"Harry Potter and the Philosopher's Stone", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
            'isbn':"0-7475-3269-9"
          },
          {
            "title":"Harry Potter and the Chamber of Secrets", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
            'isbn':"0-7475-3849-2"
          },
          {
            "title":"Harry Potter and the Prisoner of Azkaban", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
            'isbn':"0-7475-4215-5"
          },
          {
            "title":"Harry Potter and the Goblet of Fire", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
            'isbn':"0-7475-4624-X"
          },
          {
            "title":"Harry Potter and the Order of the Phoenix", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
            'isbn':"0-7475-5100-6"
          },
          {
            "title":"Harry Potter and the Half-Blood Prince", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
            'isbn':"0-7475-8108-8"
          },
          {
            "title":"Harry Potter and the Deathly Hallows", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
            'isbn':"0-545-01022-5"
          },
          {
            "title":"The Hobbit", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
            'isbn':"1827184"
          },
          {
            "title":"The Lord of the Rings", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
            'isbn':"1487587"
          },
          {
            "title":"A Game of Thrones", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
            'isbn':"0-553-10354-7"
          },
          {
            "title":"A Clash of Kings", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg',
            'isbn':"0-553-10803-4"
          },
          {
            "title":"A Storm of Swords", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/2/24/AStormOfSwords.jpg',
            'isbn':"0-553-10663-5"
          },
          {
            "title":"A Feast for Crows", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/a/a3/AFeastForCrows.jpg',
            'isbn':"0-553-80150-3"
          },
          {
            "title":"A Dance with Dragons", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg',
            'isbn':"978-0553801477"
          },
          {
            "title":"The Lies of Locke Lamora", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/b/b1/Locke_Lamora.jpg',
            'isbn':"0-553-80467-7"
          },
          {
            "title":"Red Seas Under Red Skies", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/a/ad/Red_Seas_Under_Red_Skies.jpg',
            'isbn':"0553804685"
          },
          {
            "title":"The Republic of Thieves", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/3/32/Republic_of_Thieves_by_Scott_Lynch_Cover.jpg',
            'isbn':"9780553804690"
          },
          {
            "title":"Storm Front", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/2/2b/Storm_Front.png',
            'isbn':"0-451-45781-1"
          },
          {
            "title":"Fool Moon", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/f/fd/Fool_Moon.jpg',
            'isbn':"0-451-45812-5"
          },
          {
            "title":"Grave Peril", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/f/ff/Grave_Peril.jpg',
            'isbn':"0-451-45844-3"
          },
          {
            "title":"Summer Knight", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/9/94/Summer_Knight.jpg',
            'isbn':"0-451-45892-3"
          },
          {
            "title":"Death Masks", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/c/c7/Death_Masks.jpg',
            'isbn':"0-451-45940-7"
          },
          {
            "title":"Blood Rites", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/b/b3/Blood_Rites.jpg',
            'isbn':"0-451-45987-3"
          },
          {
            "title":"Proven Guilty", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/d/d8/Proven_Guilty.jpg',
            'isbn':"0-451-46085-5"
          },
          {
            "title":"White Night", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/e/e4/White_Night_-_Jim_Butcher.jpg',
            'isbn':"0-451-46155-X"
          },
          {
            "title":"Small Favor", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/4/49/Smallfavor-400.jpg',
            'isbn':"978-0-451-46200-8"
          },
          {
            "title":"Turn Coat", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/6/6b/Turncoat-400.jpg',
            'isbn':"0-451-46256-4"
          },
          {
            "title":"Changes", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/d/d5/Changes_Hardcover_106-300.jpg',
            'isbn':"0-451-46317-X"
          },
          {
            "title":"Ghost Story", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/5/56/Ghost_Story_Butcher.jpg',
            'isbn':"0-451-46379-X"
          },
          {
            "title":"Cold Days", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/e/eb/Cold_Days_Hardcover.jpg',
            'isbn':"978-0-451-46440-8"
          },
          {
            "title":"Skin Game", 
            imgurl:'https://upload.wikimedia.org/wikipedia/en/3/3f/Skin_game_cover.jpg',
            'isbn':"978-0-451-46439-2"
          }
        ]
      }
      this.setState({
        books: library.book
      });
    }

    handleChange = e => {
      this.setState({searchField: e.target.value})
    }

  render(){
    const { books, searchField } = this.state;
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <h1>Books List</h1>
      <SearchBox placeholder='Search Books by Title' 
          handleChange={this.handleChange}/>
          <p><br></br></p>
        <CardList books = {filteredBooks}>
        </CardList>
      </div>
    );
  }
}
export default App;
