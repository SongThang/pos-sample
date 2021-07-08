import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import modules from "../modules";
import { ButtonBase, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import {
  Award,
  Coffee,
  Compass,
  FileMinus,
  Settings,
  ShoppingBag,
} from "react-feather";
import { manageBusinessMenu } from "../dummy";
interface Props {
  open: boolean;
  close: any;
}

const DialogMenu = (props: Props) => {
  const classes = useStyles();
  return (
    <Modal
      onClose={props.close}
      open={props.open}
      closeAfterTransition
      className={classes.modal}
      hideBackdrop
      disableAutoFocus
      disableEnforceFocus
    >
      <div className={classes.container}>
        <p className={classes.textTitle}>Account Management</p>
        <div className={classes.flexRow}>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <Award />
            </ButtonBase>
            <p className={classes.title}>Account Quality</p>
          </div>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <Compass />
            </ButtonBase>
            <p className={classes.title}>Ads Manager</p>
          </div>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <ShoppingBag />
            </ButtonBase>
            <p className={classes.title}>Commerce Manager</p>
          </div>
        </div>
        <div className={classes.flexRow}>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <Settings />
            </ButtonBase>
            <p className={classes.title}>Business Settings</p>
          </div>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <FileMinus />
            </ButtonBase>
            <p className={classes.title}>Ads Report</p>
          </div>
          <div className={classes.labelContainer}>
            <ButtonBase className={classes.iconStyle}>
              <Coffee />
            </ButtonBase>
            <p className={classes.title}>Event Manager</p>
          </div>
        </div>
        <p className={classes.textTitle}>Manage Business</p>
        {manageBusinessMenu.map((item: any) => {
          return (
            <ButtonBase className={classes.cardMenu}>
              <div className={classes.cardIcon}>{item.icon}</div>
              <p className={classes.textName}>{item.name}</p>
            </ButtonBase>
          );
        })}
      </div>
    </Modal>
  );
};
export default DialogMenu;
const useStyles = makeStyles({
  cardIcon: {
    backgroundColor: "#f8f9fa",
    width: modules.BODY_HORIZONTAL * 1.5,
    height: modules.BODY_HORIZONTAL * 1.5,
    borderRadius: modules.BORDER_RADIUS,
    fontWeight: modules.FONT_SMALL,
    color: modules.BLACK,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMenu: {
    padding: modules.BODY_HORIZONTAL / 4,
    width: modules.VIEW_PORT_WIDTH / 3.6 - modules.BODY_HORIZONTAL,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    borderRadius: modules.BORDER_RADIUS,
    "&:hover": {
      backgroundColor: modules.BACKGROUND_COLOR,
    },
  },
  textName: {
    paddingLeft: modules.BODY_HORIZONTAL / 2,
    fontSize: modules.FONT_H5 + 2,
    fontWeight: modules.FONT_UPPER_MEDIUM,
  },
  container: {
    width: modules.VIEW_PORT_WIDTH / 3.6 - modules.BODY_HORIZONTAL,
    height: modules.VIEW_PORT_HEIGHT / 1.5,
    overflow: "scroll",
    backgroundColor: modules.WHITE,
    borderRadius: modules.BORDER_RADIUS,
    padding: modules.BODY_HORIZONTAL,
    outline: "none",
    boxShadow: "2px 2px 3px -4px rgba(0,0,0,0.25)",
  },
  textTitle: {
    fontSize: modules.FONT_H4,
    fontWeight: modules.FONT_LARGE,
    color: modules.BLACK,
    paddingTop: modules.BODY_HORIZONTAL / 2,
    paddingBottom: modules.BODY_HORIZONTAL,
    paddingLeft: modules.BODY_HORIZONTAL / 2,
  },
  modal: {
    marginLeft: modules.VIEW_PORT_WIDTH / 4.5,
    marginTop: modules.BODY_HORIZONTAL / 2,
  },
  paper: {
    backgroundColor: modules.WHITE,
    border: "2px solid #000",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: modules.BODY_HORIZONTAL,
  },
  labelContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: modules.BODY_HORIZONTAL * 4,
    height: modules.BODY_HORIZONTAL * 4,
  },
  iconStyle: {
    backgroundColor: modules.BUTTON_BACKGROUND,
    padding: modules.BODY_HORIZONTAL / 2,
    borderRadius: modules.BORDER_RADIUS,
  },
  title: {
    paddingTop: modules.BODY_HORIZONTAL / 4,
    fontWeight: modules.FONT_MEDIUM,
    fontSize: modules.FONT_H5,
    color: modules.BLACK,
    textAlign: "center",
  },
});
