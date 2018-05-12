import React from "react";

import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

export default props => (
  <Paper style={props.styles.Paper}>
    {props.books.map(
      ([tags, books]) =>
        !props.tag || props.tag === tags ? (
          <React.Fragment>
            <Typography
              variant="title"
              style={{ textTransform: "capitalized" }}
            >
              {tags}
              <List component="ul">
                {books.map(book => (
                  <ListItem button>
                    <ListItemText primary={book.title} />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </React.Fragment>
        ) : null
    )}
  </Paper>
);
