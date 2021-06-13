import React from "react";
import { Badge, Grid, makeStyles, Typography } from "@material-ui/core";
import { BookmarkBorderOutlined, InboxOutlined, MailOutlined, MessageOutlined } from "@material-ui/icons";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  navMenuContainer: {},
  navMenuItem: {
    padding: "1.5rem 3.5rem",
    fontSize: "2rem",
    cursor: "pointer",
  },
  active: {
    backgroundColor: "#fff",
  },
}));

function PrimaryNav() {
  const classes = useStyle();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center" className={classes.navMenuContainer}>
      <Grid item className={classes.navMenuItem}>
        <Badge color="error" badgeContent={3}>
          <MailOutlined />
        </Badge>
      </Grid>
      <Grid item className={classes.navMenuItem}>
        <InboxOutlined />
      </Grid>
      <Grid item className={clsx(classes.navMenuItem, classes.active)}>
        <MessageOutlined />
      </Grid>
      <Grid item className={clsx(classes.navMenuItem)}>
        <BookmarkBorderOutlined />
      </Grid>
    </Grid>
  );
}

export default PrimaryNav;
