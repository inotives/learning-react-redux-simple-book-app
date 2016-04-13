import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map( (book) => {
      return (
        <li
          key={book.title}
          // bind action creator to where it will interact with users
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
          </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

// take application state as argument - whole application state object --
// if the state change, container will automatically re-render
function mapStateToProps(state) {
  //whatever return here will show up as props inside booklist
  return {
    books: state.books
  }
}

// anything return from this functiin will end up as props on booklist container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// take this component, take this mapStateToProps & mapDispatchToProps , and make a container out of them
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
