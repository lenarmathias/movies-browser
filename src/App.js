import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./common/Navigation";
import MoviesTiles from "./features/MoviesTiles";
import { Pagination } from "./common/Pagination";
import MovieDetails from "./features/movie details";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        <Navigation />

        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people"></Route>
          <Route path="/movies">
            <MoviesTiles />
            <Pagination />
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
