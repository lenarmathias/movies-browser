import { all } from "redux-saga/effects";

import { watchFetchMovieDetails } from "./features/MovieDetails/movieDetailsSaga";
import { watchFetchMoviesList } from "./features/MovieList/movieListSaga";
import { watchFetchPeopleDetails } from "./features/Profile/peopleDetailsSaga";
import { watchFetchPeopleList } from "./features/People/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieDetails(),
        watchFetchMoviesList(),
        watchFetchPeopleDetails(),
        watchFetchPeopleList()
    ]);
}