import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  // useRouteMatch returns a special object with information about
  // the currently matched route
  const match = useRouteMatch();
  

  return (
    <div>
      <MoviesList movies={movies} />
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <Route exact path={match.url}>
      <MovieShow movies={movies} />
        <h3>Pick a movie</h3>
      </Route>
      <Route exact path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;