import { nanoid } from "@reduxjs/toolkit";
import MovieTile from "../../../common/Tiles/MovieTile";
import { MovieListOrganizer } from "../../MovieList/styled";
import { SectionHeading } from "../../../common/styled";

const PersonMovies = ({ title, personMovieList, movieGenres }) => {
    const moviesNumber = personMovieList.length;

    return (
        <>
            <SectionHeading $movieSection>
                Movies - {title} ({moviesNumber})
            </SectionHeading>
            <MovieListOrganizer>
                {personMovieList.map((movie) => (
                    <MovieTile
                        key={nanoid()}
                        movie={movie}
                        movieGenres={movieGenres}
                    />
                ))}
            </MovieListOrganizer>
        </>
    )
};

export default PersonMovies;