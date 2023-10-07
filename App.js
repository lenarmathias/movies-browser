import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { PeopleLists } from "./features/PeopleList";
import { PeopleDetails } from "./features/PeopleDetails";
import MovieDetails from "./features/movie details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />{" "}
          <Route path="/movies" component={MovieList} />
          <Route path="/people/:id" component={PeopleDetails} />{" "}
          <Route path="/people" component={PeopleLists} />
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
