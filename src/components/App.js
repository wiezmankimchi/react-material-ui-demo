import React, { Component } from "react";
import { Header, Footer } from "./layout";
import Elibrary from "./elibrary";

import { tags, books } from "../store.js";

export default class App extends Component {
  state = {
    books
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

  render() {
    const books = Object.entries(this.getBooksbyTags(this.state.books, "tag"));
    return (
      <div>
        <Header />
        <Elibrary books={books} tag={this.state.tag} />
        <Footer
          tags={tags}
          onSelect={this.handleTagSelected}
          tag={this.state.tag}
        />
      </div>
    );
  }
}
