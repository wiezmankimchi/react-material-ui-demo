import React, { Component } from "react";
import { Header, Footer } from "./layout";
import Elibrary from "./elibrary";

import { tags, books } from "../store.js";

export default class App extends Component {
  state = {
    books,
    bookSelected: {}
  };

  getBooksbyTags(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  handleTagSelected = tag => {
    this.setState({
      tag
    });
  };

  handleClickedBook = id => {
    this.setState(({ books }) => ({
      bookSelected: books.find(book => book.id === id)
    }));
  };

  render() {
    const books = Object.entries(this.getBooksbyTags(this.state.books, "tag")),
      { bookSelected } = this.state;
    return (
      <div>
        <Header />
        <Elibrary
          bookSelected={this.state.bookSelected}
          books={books}
          tag={this.state.tag}
          onSelect={this.handleClickedBook}
        />
        <Footer
          tags={tags}
          onSelect={this.handleTagSelected}
          tag={this.state.tag}
        />
      </div>
    );
  }
}
