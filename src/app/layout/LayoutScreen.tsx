import React from "react";
import { makeStyles } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import modules from "../modules";
import SideBar from "./SideBar";
interface Props {}
const LayoutScreen = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutScreen;

const useStyles = makeStyles({
  container: {
    height: modules.VIEW_PORT_HEIGHT,
    backgroundColor: modules.BACKGROUND_COLOR,
    display: "flex",
  },
  outlet: {
    backgroundColor: modules.WHITE,
    height: modules.VIEW_PORT_HEIGHT - modules.BODY_HORIZONTAL,
    margin: modules.BODY_HORIZONTAL / 2,
    borderRadius: modules.BORDER_RADIUS,
    padding: modules.BODY_HORIZONTAL / 2,
  },
});
