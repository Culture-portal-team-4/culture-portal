import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
  map: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center"
  },
  title: {
    marginBottom: 10,
  }
}));

export default style;
