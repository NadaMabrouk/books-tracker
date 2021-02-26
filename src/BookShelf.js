import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types'
class BookShelf extends Component {
    
    render(){
        const {title,books,updateShelf} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((element) => (
                            <li key={element.id}>
                                <Book book={element} updateShelf={updateShelf}/>
                            </li>
                        ))
                    }
                </ol>
                </div>
                 
            </div>
        );
    }
}
BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}
export default BookShelf;