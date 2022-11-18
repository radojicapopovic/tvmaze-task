import React from "react";
import { Container } from "@material-ui/core";
import { HomePageConstants } from "../../constants/HomePage.constants";
import { HomeBanner } from "../../components/HomeBanner/HomeBanner";
import { LatestAddedShows } from "../../components/LatestAddedShows/LatestAddedShows";
import useFetchTVMazeShowsApi from "../../hooks/useFetchTVMazeShowsApi";

export const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useFetchTVMazeShowsApi();

  return (
    <Container maxWidth="lg">
      <HomeBanner
        title={HomePageConstants.title}
        description={HomePageConstants.description}
      />
      <div>
        {isLoading && <div>Loading Shows...</div>}
        {isError && <div>Failed to Load Shows!!!</div>}
        <LatestAddedShows episodes={data} />
      </div>
    </Container>
  );
};

export default HomePage;
