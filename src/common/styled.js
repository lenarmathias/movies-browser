import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SmallGreyText = styled.p`
    color: ${({ theme }) => theme.color.darkerGrey};
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    ${({ $boldBlackText }) => $boldBlackText && css`
        font-weight: 600;
        color: ${({ theme }) => theme.color.black};
    `}

    ${({ $portfolioText }) => $portfolioText && css`
        color: ${({ theme }) => theme.color.stormGrey};
        font-size: 18px;
        line-height: 120%;
    `}

    ${({ $portfolioTextBlack }) => $portfolioTextBlack && css`
        color: ${({ theme }) => theme.color.blackSolid};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 13px;
        line-height: 130%;

        ${({ $paginationText }) => $paginationText && css`
            font-size: 10px;
            line-height: 24px;
        `}
    }
`;

export const SmallTile = styled.div`
    height: 36px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.colorDivider};

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: ${({ theme }) => theme.color.black};

    ${({ $pageButton }) => $pageButton && css`
        background-color: ${({ theme }) => theme.color.lightBlue};
        border: none;
        
        &:disabled {
            background-color: ${({ theme }) => theme.color.colorDivider};

            path {
                fill: ${({ theme }) => theme.color.darkerGrey};
            }
        }
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        height: 19px;
        padding: 4px 8px;

        font-size: 10px;
        line-height: 110%;

        ${({ $pageButton }) => $pageButton && css`
            height: 23px;
            padding: 8px 12px;
        `}
    }
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
`;

export const SectionHeading = styled.h2`
    margin-bottom: 24px;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

    ${({ $movieSection }) => $movieSection && css`
        margin-top: 64px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-bottom: 12px;
        font-size: 18px;

        ${({ $movieSection }) => $movieSection && css`
            margin-top: 24px;
            margin-bottom: 16px;
            font-size: 20px;
        `}
    }
`;