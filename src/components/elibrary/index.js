import React from "react";
import { Grid, Paper } from "material-ui";

import Leftpane from "./leftpane";
import Rightpane from "./rightpane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ books, tag, onSelect, bookSelected }) => (
  <Grid container spacing={8}>
    <Grid item sm>
      <Leftpane styles={styles} books={books} tag={tag} onSelect={onSelect} />
    </Grid>

    <Grid item sm>
      <Rightpane styles={styles} bookSelected={bookSelected} />
    </Grid>
  </Grid>
);
