import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Search } from "../../images/searchIcon.svg";
import { NavLink } from "react-router-dom";

export const NavigationBarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  width: 100vw;
  min-height: 94px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 142px;
    place-items: center;
  }
`;

export const NavigationBarWrapper = styled.div`
  margin: 23px auto;
  min-width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px auto 16px;
    max-width: 100%;
    width: auto;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
  }
`;

export const NavigationButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 19px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  gap: 12px;
`;

export const HeaderLogo = styled(Logo)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 17px;
    height: 17px;
  }
`;

export const Heading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-feature-settings: "clig" off, "liga" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 130%;
    letter-spacing: -0.5px;
  }
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    grid-gap: 12px;
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
  text-align: center;
`;

export const LogoNavigationLink = styled(NavLink)`
  padding: 8px 24px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 12px;
  text-decoration: none;

  &.active {
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 8px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  width: 102px;
  height: 48px;
  padding: 8px 24px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 70px;
    height: 34px;
    padding: 8px 12px;
    font-size: 12px;

    &.active {
      border-radius: 29px;
    }
  }
`;

export const SearchContainer = styled.div`
  max-width: 432px;
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    height: 44px;
    padding: 14px 16px;
    gap: 8px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.darkerGrey};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;
