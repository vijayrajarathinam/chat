import {
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function SubMenu() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" component={Link} to="/user/12345">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography>
              {" — I'll be in your …"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginLeft: "0" }} />
      <ListItem alignItems="flex-start" component={Link} to="/user/245">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginLeft: "0" }} />
      <ListItem alignItems="flex-start" component={Link} to="/user/521">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {" — Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginLeft: "0" }} />
      <ListItem alignItems="flex-start" component={Link} to="/user/254">
        <ListItemAvatar>
          <Avatar alt="Indy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {" — Paris recomm…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginLeft: "0" }} />
      <ListItem alignItems="flex-start" component={Link} to="/user/185">
        <ListItemAvatar>
          <Avatar alt="Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {" — Do you have …"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default SubMenu;
