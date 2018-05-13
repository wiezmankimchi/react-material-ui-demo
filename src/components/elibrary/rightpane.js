import React from "react";
import { Paper, Typography } from "material-ui";

export default ({
  styles,
  bookSelected: {
    title = "Welcome to the eLibrary",
    author = "Pick one of the books on the left pane.",
    publisher,
    rating
  }
}) => (
  <Paper style={styles.Paper}>
    <Typography variant="display1">{title}</Typography>
    <Typography variant="subheading">
      {author}
      <br />
      {publisher}
      <br />
      {rating}
    </Typography>
  </Paper>
);
