import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { HomeBannerDescriptionProps } from "../types/HomeBannerDescriptionProps";

export const Description: FC<HomeBannerDescriptionProps> = ({
  description,
}) => {
  return (
    <Typography
      data-testid="description"
      variant="h5"
      color="inherit"
      paragraph
    >
      {description}
    </Typography>
  );
};

export default Description;
