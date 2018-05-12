import React from "react";
import { Paper, Tabs, Tab } from "material-ui";

export default props => {
  const index = props.tag
    ? props.tags.findIndex(group => group === props.tag) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) => {
          props.onSelect(index === 0 ? "" : props.tags[index - 1]);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {props.tags.map(tag => <Tab label={tag} />)}
      </Tabs>
    </Paper>
  );
};
