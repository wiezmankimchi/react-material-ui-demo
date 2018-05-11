import React from "react";
import { Paper, Tabs, Tab } from "material-ui";

export default ({ tags }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {tags.map(tag => <Tab label={tag} />)}
    </Tabs>
  </Paper>
);
