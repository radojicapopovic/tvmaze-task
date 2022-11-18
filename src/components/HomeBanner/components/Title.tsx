import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { TitleProps } from "../types/TitleProps";

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <Typography
      data-testid="title"
      component="h1"
      variant="h3"
      color="inherit"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default Title;
