import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getPersonId,
    selectPersonId,
    resetPeopleDetails,
    selectDetailsStatus,
    selectPeopleDetails,
    selectGenresDetails,
    selectPeopleCast,
    selectPeopleCrew
} from "./peopleDetailsSlice";
import PersonInfo from "./PersonInfo";
import PersonMovies from "./PersonMovies";

const Profile = () => {
    const dispatch = useDispatch();
    const { personId } = useParams();

    const status = useSelector(selectDetailsStatus);
    const currentPersonId = useSelector(selectPersonId);
    const personDetails = useSelector(selectPeopleDetails);
    const movieGenres = useSelector(selectGenresDetails);
    const personCast = useSelector(selectPeopleCast);
    const personCrew = useSelector(selectPeopleCrew);

    useEffect(() => {
        if (status !== "success") {
            dispatch(getPersonId(personId));
        }
    }, [dispatch, status, personId]);

    useEffect(() => {
        if (personId !== currentPersonId && currentPersonId !== 0) {
            dispatch(resetPeopleDetails());
        }
    }, [dispatch, personId, currentPersonId]);

    return (
        <>
            <PersonInfo personDetails={personDetails} />
            {personCast.length > 0 &&
                <PersonMovies
                    title="cast"
                    movieGenres={movieGenres}
                    personMovieList={personCast}
                />
            }
            {personCrew.length > 0 &&
                <PersonMovies
                    title="crew"
                    movieGenres={movieGenres}
                    personMovieList={personCrew}
                />
            }
        </>
    )
};

export default Profile