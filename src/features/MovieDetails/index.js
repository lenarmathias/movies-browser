import { MovieDetailsWrapper } from "./styled";
import MovieTopInfo from "./MovieTopInfo";
import MoviePeople from "./MoviePeople";

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsWrapper>
        <MovieTopInfo title="Mulan Longer Title" />
        <MoviePeople />
        <MoviePeople />
      </MovieDetailsWrapper>
    </>
  );
};

export default MovieDetails;
