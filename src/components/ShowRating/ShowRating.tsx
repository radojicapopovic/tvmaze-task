import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ShowRatingProps } from "./types/ShowRatingProps";

export const ShowRating: FC<ShowRatingProps> = ({ rating: { average } }) => {
  return (
    <Box
      component="fieldset"
      mb={3}
      borderColor="transparent"
      data-testid="show-rating"
    >
      <Rating name="read-only" value={average} readOnly />
    </Box>
  );
};

export default ShowRating;
