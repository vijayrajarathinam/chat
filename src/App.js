import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

import MainContent from "./components/MainContent";
import PrimaryNav from "./components/PrimaryNav";
import SubMenu from "./components/SubMenu";
import MobileNav from "./components/MobileNav";
import InitialTransition from "./components/InitialTransition";

// const content = {
//   animate: {
//     transition: { staggerChildren: 0.1 },
//   },
// };
const useStyle = makeStyles((theme) => ({
  item: { height: "100vh" },
  itemNavBg: { backgroundColor: "#f4f0eb" },
  AppDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  AppTablet: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  AppMobile: {
    backgroundColor: "#f4f0eb",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

function App() {
  const classes = useStyle();
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  return (
    <React.Fragment>
      <div className={classes.AppDesktop}>
        <Grid container>
          <Grid item xs={1} className={clsx(classes.item, classes.itemNavBg)}>
            <PrimaryNav />
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <SubMenu />
          </Grid>
          <Grid item xs={8} className={clsx(classes.item, classes.itemNavBg)}>
            <MainContent />
          </Grid>
        </Grid>
      </div>
      <div className={classes.AppTablet}>
        <Grid container>
          <Grid item xs={4} className={classes.item}>
            <SubMenu />
          </Grid>
          <Grid item xs={8} className={clsx(classes.item, classes.itemNavBg)}>
            <MainContent />
          </Grid>
        </Grid>
      </div>
      <div className={classes.AppMobile}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              component={(props) => (
                <motion.section exit={{ opacity: 0 }}>
                  {/* {isFirstMount && <InitialTransition />} */}

                  <motion.div initial="initial" animate="animate" variants={content(isFirstMount)}>
                    <MobileNav {...props} />
                  </motion.div>
                </motion.section>
              )}
            />
            <Route
              exact
              path="/user"
              component={(props) => (
                <motion.section exit={{ opacity: 0 }}>
                  <motion.div
                    variants={{
                      animate: {
                        transition: { staggerChildren: 0.1, delayChildren: 2.8 },
                      },
                    }}
                    animate="animate"
                    initial="initial"
                  >
                    <SubMenu {...props} />
                  </motion.div>
                </motion.section>
              )}
            />
            <Route path="/user/:id" component={MainContent} />
          </Switch>
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}

export default App;
