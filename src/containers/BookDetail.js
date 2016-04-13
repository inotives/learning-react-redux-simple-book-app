import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render () {
    if(!this.props.book) return <div>Select a book to get started</div>
    return (
      <div>
        Book Title: <strong>{this.props.book.title}</strong>
        <br />
        Total Pages: {this.props.book.pages}
        <hr />
        Details:
        <br/>
        {this.props.book.details}
        <hr />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail)
