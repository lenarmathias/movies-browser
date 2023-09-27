import {
    NavigationBarContainer,
    NavigationBarWrapper,
    HeaderContainer,
    HeaderLogo,
    Heading,
    Navigation,
    NavigationItem,
    StyledNavigationLink,
    SearchContainer,
    SearchIcon,
    SearchInput
} from "./styled";

const NavigationBar = () => (
    <NavigationBarContainer>
        <NavigationBarWrapper>
            <HeaderContainer>
                <HeaderLogo />
                <Heading>
                    Movies Browser
                </Heading>
            </HeaderContainer>
            <Navigation>
                <NavigationItem>
                    <StyledNavigationLink to="/movies">
                        Movies
                    </StyledNavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledNavigationLink to="/people">
                        People
                    </StyledNavigationLink>
                </NavigationItem>
            </Navigation>
            <SearchContainer>
                <SearchIcon />
                <SearchInput
                    placeholder="Search for movies..."
                />
            </SearchContainer>
        </NavigationBarWrapper>
    </NavigationBarContainer>
);

export default NavigationBar;