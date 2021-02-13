import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  stretch: {
    maxWidth: "1440px",
    width: "100%",
    alignSelf: "center",
  },
  menuButton: {
    marginRight: theme.spacing(8),
    // marginLeft: theme.spacing(2),
    color: "black !important",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    cursor: "pointer",
    letterSpacing: "8px !important",
    mixBlendMode: "difference",
    background: "#fff !important",
    borderRadius: "4px !important",
    paddingLeft: "10px !important",

    "& >div": {
      marginTop: "10px !important",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.05),
    // "&:hover": {
    // 	backgroundColor: fade(theme.palette.common.black, 0.25),
    // },
    marginLeft: 15,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(15),
      width: "auto",
      maxWidth: "100%",
    },
    flexGrow: 1,
    border: "2px solid #C2C2C2",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  inputRoot: {
    color: "#7F7F7F",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    color: "#7F7F7F",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: "black",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logoMobile: {
    display: "flex",
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
    marginLeft: theme.spacing(11),
  },
  menuColor: {
    background: "#FFF !important",
    color: "black !important",
  },
  menuHeadings: {
    fontSize: 15,
  },
  addToCartBtn: {
    color: "#fff !important",
    background: "#45BEE2 !important",
    maxHeight: "40px",
    marginTop: 5,
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      "& >span": {
        "& >svg": {
          fontSize: 15,
          marginRight: 2,
        },
      },
      fontSize: 12,
    },
  },
  formControl: {
    // minWidth: 120,
  },
}));

export default useStyles;
