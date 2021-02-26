import React, {Component} from "react";
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {

render(){
    const {book,updateShelf} = this.props;
    const url = book.hasOwnProperty('imageLinks') ? book.imageLinks.smallThumbnail: '';
    
    return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <BookShelfChanger book={book} updateShelf={updateShelf}/>
          </div>
            <div className="book-title">{book.title}</div>
            {book.authors && 
            <div className="book-authors">
                { book.authors.length === 1 ? book.authors[0] : book.authors.map(author => <span key={author}>{author},</span>)}
                </div>}
        </div>
        );
    
}
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
} 
export default Book;