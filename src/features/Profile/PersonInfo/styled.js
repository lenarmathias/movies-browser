import styled, { css } from "styled-components";

export const BigTile = styled.div`
    width: 100%;
    height: 100%;
    min-height: 644;
    padding: 40px;
    background-color: ${({ theme }) => theme.color.white};
    display: grid;
    grid-template-areas: 
        "photo info"
        "photo bio";
    grid-gap: 24px 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletWide}) {
        grid-template-areas: 
            "photo info"
            "bio bio";
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        padding: 16px;
        grid-gap: 16px;
    }
`;

export const GridContainer = styled.div`
    grid-area: photo;
`;

export const ProfilePhoto = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 564px;
    min-width: 116px;
    min-height: 163px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.verySmallMobile}) {
        width: 116px;
    }
`;

export const SubSectionTitle = styled.h2`
    margin: 0;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 14px;
        font-weight: 500;
        line-height: 130%;
    }
`;

export const FlexBoxContainer = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;

    ${({ $smallGap }) => $smallGap && css`
        gap: 8px;
    `}

    ${({ $rowDirection }) => $rowDirection && css`
        flex-direction: row;
        gap: 10px;
    `}
`;

export const BiographyText = styled.p`
    grid-area: bio;
    margin: 0;
    max-width: 100%;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {   
        font-size: 14px;
    }
`;