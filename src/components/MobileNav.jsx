import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { NavLink } from "react-router-dom";
import { Chat } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    // maxWidth: 360,
    backgroundColor: "#f4f0eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& a ": {
      textDecoration: "none",
      color: "#555",
    },
  },
  rootItem: {
    boxShadow: "0px 0px 5px #ccc",
    borderRadius: "1em",
    backgroundColor: "white",
    width: "90vw",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    " & svg": {
      margin: "0 1em",
    },
  },
}));

export default function MobileNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to="/user">
        <div className={classes.rootItem}>
          <Chat />
          <p> Messages </p>
        </div>
      </NavLink>
      <NavLink to="/user">
        <div className={classes.rootItem}>
          <SendIcon />
          <p> Sent mail </p>
        </div>
      </NavLink>
      <NavLink to="/user">
        <div className={classes.rootItem}>
          <DraftsIcon />
          <p> Drafts</p>
        </div>
      </NavLink>
      <NavLink to="/user">
        <div className={classes.rootItem}>
          <InboxIcon />
          <p> Inbox </p>
        </div>
      </NavLink>
    </div>
  );
}
