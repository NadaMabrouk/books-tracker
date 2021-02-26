import React,{Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component{
    
    constructor(props){
        super(props);
        this.state= {
            options: [
                {value:'currentlyReading',label:'Currently Reading'},
                {value:'wantToRead',label:'Want To Read'},
                {value:'read',label:'Read'},
                {value:'none',label:'None'}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e) => {
        this.props.updateShelf(this.props.book,e.target.value);
    } 
    render(){
        const {book} = this.props;
        return(
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.handleChange}>
                <option value='move' disabled>Move To ...</option>
                {this.state.options.map((op) => (
                    <option key={op.value} value={op.value} >{op.label}</option>
                ))}
                </select>
            </div>
        )
    }
}
BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default BookShelfChanger;