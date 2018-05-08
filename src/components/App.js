import React, { Component } from "react";
import { Header, Footer } from "./layout";
import Elibrary from "./elibrary";

export default class App extends Component {
  state = {
    exercises: [],
    title: ""
  };

  render() {
    return (
      <div>
        <Header />
        <Elibrary />
        <Footer />
      </div>
    );
  }
}
