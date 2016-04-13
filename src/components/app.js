import React from 'react';
import { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-4">
            <hr />
            <h4>List of Books</h4>
            <hr />
            <BookList />
          </div>

          <div className="col-md-8">
            <hr/>
            <h4>Books Details</h4>
            <hr />
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
