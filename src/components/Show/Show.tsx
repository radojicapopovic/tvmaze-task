import React, { FC } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import IShow from "../../interfaces/Show";
// import { ShowIcon } from "./components/ShowIcon";
import { ShowInfo } from "./components/ShowInfo";
import { ShowDescription } from "./components/ShowDescription";
import { ShowRating } from "../ShowRating/ShowRating";
import ShowCast from "../../interfaces/ShowCast";
import { useStyles } from "./Show.styles";

type ShowProps = { show: IShow; cast?: ShowCast[] };

export const Show: FC<ShowProps> = ({
  show: { name, summary, status, image, network, schedule, genres, rating },
  cast,
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            component="img"
            alt={name}
            image={image?.medium}
            title={name}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <ShowRating rating={rating} />
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <ShowDescription description={summary} />
            </CardContent>
          </div>
        </Card>
        <div>
          <Card>
            <ShowInfo
              streamOn={network.name}
              schedule={schedule}
              status={status}
              genres={genres}
              cast={cast}
            />
          </Card>
        </div>
      </Paper>
    </Container>
  );
};

export default Show;
