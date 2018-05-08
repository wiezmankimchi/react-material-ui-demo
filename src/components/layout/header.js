import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "material-ui";

export default props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          ebookLibrary
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
