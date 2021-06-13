import React from "react";
import { Button, Menu, MenuItem, IconButton, Badge, makeStyles } from "@material-ui/core";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  ArchiveOutlined,
  EmojiEmotionsOutlined,
  MoreVertOutlined,
  PinDropOutlined,
  StarBorderOutlined,
  TimelapseOutlined,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
    // borderLeft: "1px solid #ccc",
  },
  titleBar: {
    height: "4.5em",
    flex: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottom: "1px solid #ccc",
    borderLeft: "1px solid #ccc",
    padding: theme.spacing(0, 3),
  },
  heading: {
    display: "flex",
    flexDirection: "column",
  },
  p: {
    marginTop: "calc(0.25rem * calc(1 - 1))",
    marginBottom: "calc(0.25rem * 1)",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& svg, button": {
      padding: theme.spacing(0, 1),
      cursor: "pointer",
      "&:last-child": {
        padding: theme.spacing(0, 0, 0, 0.35),
      },
    },
  },
  content: {
    overflowY: "auto",
    flex: "1 1 auto",
    padding: theme.spacing(4),
    height: "4rem",
  },
  inputBar: {
    height: theme.spacing(15),
    flex: "none",
    padding: theme.spacing(4),
  },
  inputField: {
    height: "100%",
    width: "100%",
    outline: "none",
    borderRadius: "1rem",
    padding: theme.spacing(1),
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #cccccc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      border: "1px solid blue",
      boxShadow: "0px 0px 5px #ADD8E6",
    },
  },
  messageSectionLeft: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "0.5rem",
    alignItems: "flex-start",
    marginTop: "calc(0.25rem * calc(1 - 2))",
    marginBottom: "calc(0.25rem * 2)",
    "& :not(:first-child)": {
      marginTop: "calc(0.25rem * calc(4 - 2))",
    },
  },

  messageSectionRight: {
    display: "flex",
    flexDirection: "row-reverse",
    marginLeft: "0.5rem",
    alignItems: "flex-start",
    marginTop: "calc(0.25rem * calc(1 - 2))",
    marginBottom: "calc(0.25rem * 2)",
    "& :not(:first-child)": {
      marginTop: "calc(0.25rem * calc(4 - 2))",
    },
  },
  messageLeft: {
    height: "auto",
    borderBottomLeftRadius: "0.8em",
    borderTopRightRadius: "0.8em",
    borderBottomRightRadius: "0.8em",
    padding: theme.spacing(1),
    boxShadow: "0px 0px 5px #cccccc",
    backgroundColor: "#fff",
    marginLeft: "1em",
  },
  messageRight: {
    height: "auto",
    borderTopLeftRadius: "0.8em",
    borderBottomLeftRadius: "0.8em",
    borderBottomRightRadius: "0.8em",
    padding: theme.spacing(1),
    boxShadow: "0px 0px 5px #cccccc",
    backgroundColor: "#e2f4ff",
    marginRight: "1em",
  },

  fs1: { fontSize: "2em" },
  pxa: { paddingLeft: "1em", paddingRight: "1em", paddingBottom: "0.5em", borderBottom: "2px solid blue" },
  px: { paddingLeft: "1em", paddingRight: "1em", paddingBottom: "0.5em" },
  messageContent: {
    display: "flex",
    flexDirection: "column",
    // marginTop: "calc(0.25rem * calc(1 - 2))",
    // marginBottom: "calc(0.25rem * 2)",
  },
  time: { marginLeft: "2em", fontSize: "0.8em", color: "grey" },
  inputFieldTop: {
    display: "flex",
    height: "25%",
    borderBottom: "1px solid #ccc",
    alignItems: "center",
    color: "#777",
    // justifyContent: "space-evenly",
  },
  inputFieldMid: { height: "50%", width: "100%", border: "none", padding: "0.5 rem", "&:focus": { outline: "none" } },
  inputFieldBot: { display: "flex", height: "25%", alignItems: "center", justifyContent: "space-between" },
  inputFieldBotL: { display: "flex", alignItems: "center", justifyContent: "space-between", color: "#777" },
  inputFieldBotLI: { padding: theme.spacing(0, 1) },
  inputFieldBotR: {},
}));

function MainContent() {
  const classes = useStyle();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <div className={classes.titleBar}>
        <div className={classes.heading}>
          <strong className={classes.p}>User 1</strong>
          <p className={classes.p}>last seen 10 mins ago</p>
        </div>
        <div className={classes.right}>
          <TimelapseOutlined />
          <StarBorderOutlined />
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            padding={0}
          >
            <MoreVertOutlined />
          </IconButton>
        </div>
        {renderMobileMenu}
      </div>
      <div className={classes.content}>
        <div className={classes.messageSectionLeft}>
          <AccountCircle className={classes.fs1} />
          <div className={classes.messageContent}>
            <div className={classes.messageLeft}>Hi!.</div>
            {/* <div className={classes.time}>2 mins ago</div> */}
          </div>
        </div>
        <div className={classes.messageSectionLeft}>
          <AccountCircle className={classes.fs1} />
          <div className={classes.messageContent}>
            <div className={classes.messageLeft}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.21
            </div>
            <div className={classes.time}>2 mins ago</div>
          </div>
        </div>
        <div className={classes.messageSectionRight}>
          <AccountCircle className={classes.fs1} />
          <div className={classes.messageContent}>
            <div className={classes.messageRight}>Thanks for the update</div>
            <div className={classes.time}>2 mins ago</div>
          </div>
        </div>
      </div>
      <div className={classes.inputBar}>
        <div className={classes.inputField}>
          <div className={classes.inputFieldTop}>
            <div className={classes.pxa}>Chat</div>
            <div className={classes.px}>Files</div>
          </div>

          <textarea className={classes.inputFieldMid} placeholder="Type your reply ..." />
          <div className={classes.inputFieldBot}>
            <div className={classes.inputFieldBotL}>
              <ArchiveOutlined className={classes.inputFieldBotLI} />
              <EmojiEmotionsOutlined className={classes.inputFieldBotLI} />
              <PinDropOutlined className={classes.inputFieldBotLI} />
            </div>
            <div className={classes.inputFieldBotR}>
              <Button variant="contained" color="primary" size="small">
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
