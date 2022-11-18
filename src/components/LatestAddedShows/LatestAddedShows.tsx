import React, { FC } from "react";
import { makeStyles, createStyles, Theme, Grid } from "@material-ui/core";
import { LatestAddedShowsProps } from "./types/LatestAddedShowsProps";
import { LatestAddedShowTitle } from "./components/LatestAddedShowTitle";
import { LatestAddedShowPending } from "./components/LatestAddedShowPending";
import { LatestAddedShow } from "./components/LatestAddedShow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export const LatestAddedShows: FC<LatestAddedShowsProps> = ({ episodes }) => {
  const classes = useStyles();

  return (
    <div data-testid="latestaddedshows-container" className={classes.root}>
      <LatestAddedShowTitle />

      <Grid container spacing={3} data-testid="episodes-container">
        {!episodes && <LatestAddedShowPending />}
        {episodes?.map((episode) => (
          <LatestAddedShow key={episode.id} episode={episode} />
        ))}
      </Grid>
    </div>
  );
};

export default LatestAddedShows;
