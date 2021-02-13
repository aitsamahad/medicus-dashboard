import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Footer() {
  let history = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mobileFooter}>
        <span> © 2021 Medicus.</span>
        <ul>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}
