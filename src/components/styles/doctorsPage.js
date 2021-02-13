import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    left: 0,
    bottom: 0,
    width: "100%",
    background: "#2F2F2F !important",
    color: "#fff",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block !important",
    },
  },
  desktop: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "hidden !important",
    },
  },
  stretch: {
    maxWidth: "1440px",
    width: "100%",
    margin: "0 auto",
  },
  footerLogo: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  footerHeading: {
    marginTop: theme.spacing(3),
    color: "#E3E3E3",
    "& >h5": {
      color: "#D3D3D3",
      fontWeight: 400,
      cursor: "pointer",
    },
  },
  downloadAppBtn: {
    "& >img": {
      paddingLeft: 8,
    },
  },
  mobileFooter: {
    zIndex: 1,
    height: 100,
    background: "rgb(47, 47, 47) !important",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
    color: "#fff",

    bottom: 0,
    left: 0,
    width: "100%",
    "& > ul > li": {
      display: "inline",
      marginRight: theme.spacing(10),
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        display: "inline-block",
        marginRight: theme.spacing(2),
      },
    },
    "& >span": {
      color: "rgb(153, 153, 153)",
    },
  },
}));

export default useStyles;
