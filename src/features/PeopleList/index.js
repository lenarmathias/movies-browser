import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ItemPeopleList, PeopleListTitle, PeopleList } from "./styled";
import { PeopleListTile } from "../../common/TileList/TilePeople/index";
import { Container } from "../../common/Container";
import {
  selectPeopleList,
  selectStatus,
  selectTotalResult,
  fetchSearchPeopleLoad,
  fetchPeopleListLoad,
} from "./peopleSlice";
import { searchQueryParamName } from "../../common/NavigationBar/Search/searchQueryParamName";
import { Loading } from "../Actions/Loading/loading";
import { NotFound } from "../Actions/NotFound/notFound";
import { Error } from "../Actions/Error/error";

export const PeopleLists = () => {
  const popularPeople = useSelector(selectPeopleList);
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
      dispatch(fetchSearchPeopleLoad(query));
    } else {
      isLoad.current = true;
      dispatch(fetchPeopleListLoad(page));
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
      <PeopleListTitle>
        {!isLoad.current
          ? `Search results for "${query}" (${totalResults})`
          : "Popular People"}
      </PeopleListTitle>
      <PeopleList>
        {popularPeople.map((people) => (
          <ItemPeopleList key={people.id}>
            <PeopleListTile
              id={people.id}
              poster={people.profile_path}
              name={people.name}
            />
          </ItemPeopleList>
        ))}
      </PeopleList>
    </Container>
  );
};
