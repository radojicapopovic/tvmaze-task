import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePageConstants } from "../../constants/HomePage.constants";
import { HomeBanner } from "./HomeBanner";

describe("HomeBanner", () => {
  test("renders HomeBanner", () => {
    render(
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
    );
    const component = screen.getByTestId("homebanner");
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
    );
    const component = screen.getByTestId("title");
    expect(component).toBeInTheDocument();
  });

  test("renders description", () => {
    render(
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
    );
    const component = screen.getByTestId("description");
    expect(component).toBeInTheDocument();
  });
});
