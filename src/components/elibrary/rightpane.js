import React from "react";
import { Paper, Typography } from "material-ui";

export default props => (
  <Paper style={props.styles.Paper}>
    <Typography variant="display1">Welcome to the eLibrary</Typography>
    <Typography variant="subheading">
      Pick one of the books on the left pane.
    </Typography>
  </Paper>
);
