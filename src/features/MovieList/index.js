import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList/TileMovie";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import {
  selectStatus,
  selectMoviesList,
  fetchMoviesListLoad,
  fetchSearchMoviesLoad,
  selectTotalResult,
} from "../MovieList/movieListSlice";
import { Loading } from "../Actions/Loading/loading";
import { Error } from "../Actions/Error/error";
import { NotFound } from "../Actions/NotFound/notFound";
import { searchQueryParamName } from "../../common/NavigationBar/Search/searchQueryParamName";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const page = useSelector();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const totalResults = useSelector(selectTotalResult);
  const isLoad = useRef(true);

  useEffect(() => {
    if (query !== "" && query !== null) {
      isLoad.current=false;
      dispatch(fetchSearchMoviesLoad(query));
    } else {
      isLoad.current = true;
      dispatch(fetchMoviesListLoad(page));
    }
  }, [dispatch, query, page]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" ? (
    <Loading query={query} />
  ) : totalResults === 0 ? (
    <NotFound query={query} />
  ) : (
    <Container>
      <MovieListTitle>
        {!isLoad.current
          ? `Search results for "${query}" (${totalResults})`
          : "Popular Movies"}
      </MovieListTitle>
      <MoviesList>
        {popularMovies.map((movie) => (
          <ItemMoviesList key={movie.id}>
            <TileList
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              vote={movie.vote_average}
              votes={movie.vote_count}
              genres={movie.genre_ids}
            />
          </ItemMoviesList>
        ))}
      </MoviesList>
    </Container>
  );
};

export default MovieList;
