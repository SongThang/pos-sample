import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import modules from "../../modules";

interface Props {}

const HomeScreen = (props: Props) => {
  const classes = useStyles();
  return <div className={classes.container}>HomeScreen</div>;
};

export default HomeScreen;

const useStyles = makeStyles({
  container: {
    backgroundColor: modules.WHITE,
  },
});
