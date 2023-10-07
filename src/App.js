import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./common/NavigationBar";
import Section from "./common/Section";
import MoviesTiles from "./features/MoviesTiles";
import People from "./features/People";
import Pagination from "./common/Pagination";
import MovieDetails from "./features/movie details";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        <NavigationBar />

        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people">
            <Section
              title="Popular people"
              content={<People />}
              extraContent={<Pagination />}
            />
          </Route>
          <Route path="/movies">
            <Section
              title="Popular movies"
              content={<MoviesTiles />}
              extraContent={<Pagination />}
            />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
