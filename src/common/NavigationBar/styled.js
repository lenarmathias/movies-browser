import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Search } from "../../images/searchIcon.svg"
import { NavLink } from "react-router-dom";

export const NavigationBarContainer = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100vw;
    height: 94px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: grid;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 142px;
        grid-template-columns: 1fr;
        place-items: center;
    }
`;

export const NavigationBarWrapper = styled.div`
    margin: 23px auto;
    width: 1368px;
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(2, max-content) auto max-content;
    grid-gap: 80px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0;
        width: auto;
        grid-template-columns: repeat(2, max-content);
        grid-template-areas:
            "header navigation"
            "search search"
        ;
        grid-gap: 24px;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    gap: 12px;
`;

export const HeaderLogo = styled(Logo)`
    width: 40px;
    height: 40px;
    grid-area: header;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 17px;
        height: 17px;
    }
`;

export const Heading = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.color.white};
    font-feature-settings: 'clig' off, 'liga' off;
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
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 12px;
        grid-area: navigation;
    }
`;

export const NavigationItem = styled.li`
    width: 102px;
    list-style: none;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 70px;
    }
`;

export const StyledNavigationLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

  &.active {
    display: inline-flex;
    height: 48px;
    padding: 8px 24px;
    align-items: center;
    gap: 10px;
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        color: ${({ theme }) => theme.color.white};
        font-size: 12px;

        &.active {
            display: inline-flex;
            padding: 8px 12px;
            align-items: center;
            border-radius: 29px;
        }
    }
`;

export const SearchContainer = styled.div`
    width: 432px;
    height: 48px;
    padding: 12px 24px;
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 33px;
    background: ${({ theme }) => theme.color.white};
    grid-column: 4;
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 288px;
        height: 44px;
        padding: 14px 16px;
        gap: 8px;
        grid-area: search;
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