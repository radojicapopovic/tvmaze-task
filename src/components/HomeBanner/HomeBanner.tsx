import React, { FC } from "react";
import { Paper, Grid } from "@material-ui/core";
import { HomeBannerProps } from "./types/HomeBannerProps";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import useStyles from "./HomeBanner.styles";

export const HomeBanner: FC<HomeBannerProps> = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.banner} data-testid="homebanner">
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.bannerContent}>
            <Title title={title} />
            <Description description={description} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeBanner;
