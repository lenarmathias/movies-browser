import { Search } from "./Search";
import {
  NavigationBarContainer,
  NavigationBarWrapper,
  NavigationButtonsWrapper,
  HeaderContainer,
  HeaderLogo,
  Heading,
  Navigation,
  NavigationItem,
  LogoNavigationLink,
  StyledNavigationLink,
  SearchContainer,
  SearchIcon,
} from "./styled";

const NavigationBar = () => {

  return (
    <NavigationBarContainer>
      <NavigationBarWrapper>
        <NavigationButtonsWrapper>
          <HeaderContainer>
            <LogoNavigationLink
              to="/movies"
            >
              <HeaderLogo />
              <Heading>
                Movies Browser
              </Heading>
            </LogoNavigationLink>
          </HeaderContainer>
          <Navigation>
            <NavigationItem>
              <StyledNavigationLink
                to="/movies"
              >
                Movies
              </StyledNavigationLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavigationLink
                to="/people"
              >
                People
              </StyledNavigationLink>
            </NavigationItem>
          </Navigation>
        </NavigationButtonsWrapper>
        <SearchContainer>
          <SearchIcon />
          <Search />
        </SearchContainer>
      </NavigationBarWrapper>
    </NavigationBarContainer>
  )
};

export default NavigationBar;