import React, { Component } from "react";
import { Header, Footer } from "./layout";
import Elibrary from "./elibrary";

import { tags, books } from "../store.js";

export default class App extends Component {
  state = {
    books
  };

  getBooksByTag() {
    return Object.entries(this.state.books.reduce((books, book) => {
      const { tag } = books;
      books[tag] = books[tag] ? [...books[tag], book] : [book];

      return books;
    }, {})
    )
  }

  render() {
    console.log(this.getBooksByTag());
    return (
      <div>
        <Header />
        <Elibrary />
        <Footer tags={tags} />
      </div>
    );
  }
}
