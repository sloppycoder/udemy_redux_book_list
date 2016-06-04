import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to see details.</div>;
    }

    return (
      <div>
        <h3>Book details: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.currentBook
  };
}

export default connect(mapStateToProps)(BookDetail);
