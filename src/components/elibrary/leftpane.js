import React from "react";

import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

export default ({ styles, books, tag, onSelect }) => (
  <Paper style={styles.Paper}>
    {books.map(
      ([tags, books]) =>
        !tag || tag === tags ? (
          <React.Fragment key={tags}>
            <Typography
              variant="title"
              style={{ textTransform: "capitalized" }}
            >
              {tags}
              <List component="ul">
                {books.map(({ title, id }) => (
                  <ListItem button onClick={() => onSelect(id)} key={id}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </React.Fragment>
        ) : null
    )}
  </Paper>
);
