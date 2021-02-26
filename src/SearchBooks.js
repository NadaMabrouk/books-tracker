import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
    state = {
        query: '',
        searchResults: []
    }
    
    handleSearchQuery = (e) => {
        const val = e.target.value;
        this.setState(() => ({
            query : val
        }));
        this.searchBooksAPI(val);
    }
    searchBooksAPI = (query) => {
        if(query.length > 0){
        BooksAPI.search(query).then(
            (books) => {
                if(books === undefined || books.error){
                    this.setState({searchResults:[]});
                }else{
                    this.setState(prevState =>({
                      ...prevState,
                        searchResults:books
                    }));
                  }
         }) 
        }else{
            this.setState({searchResults:[]});
        }
    }
    render(){
        const {shelfBooks,updateShelf} = this.props;
        const booksToDisplay = this.state.query.length > 0 ? this.state.searchResults: [];
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link> 
                    <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={this.handleSearchQuery}/>
                </div>

                <div className="search-books-results">
                {booksToDisplay && booksToDisplay.length === 0 ? <p>There's no books to display</p> :
                <ol className="books-grid">
                    {booksToDisplay && !booksToDisplay.error &&     
                        booksToDisplay.map((book) => {
                            let curBook = shelfBooks.find( ele => ele.id === book.id );
                            book.shelf = curBook ? curBook.shelf : 'none';
                            return (
                            <Book key= {book.id} book={book} updateShelf={updateShelf}/>
                            )
                        })
                    } 
                </ol>
                }
                </div>
          </div>
        );
    }
}
SearchBooks.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}
export default SearchBooks;