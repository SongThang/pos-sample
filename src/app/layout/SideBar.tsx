import * as React from "react";
import { ButtonBase, makeStyles } from "@material-ui/core";
import modules from "../modules";
import { Apps } from "@material-ui/icons";
import { _styles } from "../assets/styles/_styles";
import DialogMenu from "../components/DialogMenu";

interface Props {}

export default (props: Props) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className={classes.sideBarContainer}>
      <div className={classes.flexRow}>
        <p className={classes.title}>Ascending</p>
        <ButtonBase
          onClick={() => setMenuOpen(!menuOpen)}
          className={classes.btn}
        >
          <Apps fontSize="default" />
        </ButtonBase>
      </div>
      <DialogMenu open={menuOpen} close={() => setMenuOpen(false)} />
    </div>
  );
};

const useStyles = makeStyles({
  sideBarContainer: {
    backgroundColor: modules.WHITE,
    height: modules.VIEW_PORT_HEIGHT - modules.BODY_HORIZONTAL,
    width: modules.VIEW_PORT_WIDTH / 5,
    padding: modules.BODY_HORIZONTAL / 2,
    overflow: "scroll",
    position: "relative",
    boxShadow: "2px 2px 3px -4px rgba(0,0,0,0.25)",
  },
  title: {
    fontSize: modules.FONT_H3,
    color: modules.TITLE,
    textTransform: "uppercase",
    letterSpacing: modules.BODY_HORIZONTAL / 7,
  },
  flexRow: {
    ..._styles.row,
    justifyContent: "space-between",
  },
  btn: {
    width: modules.BODY_HORIZONTAL * 2,
    height: modules.BODY_HORIZONTAL * 2,
    padding: 0,
    color: modules.BLACK,
    borderRadius: modules.BORDER_RADIUS / 2,
    backgroundColor: modules.BACKGROUND_COLOR,
    "&:hover": {
      backgroundColor: modules.BACKGROUND_COLOR,
    },
  },
});
