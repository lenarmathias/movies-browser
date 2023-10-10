import styled, { css } from "styled-components";
import { ReactComponent as MissingPhotoIcon } from "../../../images/missingProfilePhotoIcon.svg";

const boxShadowColor = ({ theme }) => theme.color.boxShadow;

export const PeopleTileContainer = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 208px;
    height: 346px;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${boxShadowColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 136px;
        height: 245px;
        padding: 8px;
    }
`;

export const PeopleTilePhoto = styled.img`
    width: 177px;
    height: 246px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 120px;
        height: 178px;
    }
`;

export const MissingProfilePhoto = styled(PeopleTilePhoto)`
  background-color: ${({ theme }) => theme.color.silver};
  display: grid;
  align-items: center;
  justify-content: center;

  ${({ $portfolioPhoto }) => $portfolioPhoto && css`
        width: auto;
        height: 100%;
        max-width: auto;
        max-height: 564px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 120px;
        height: 178px;

        ${({ $portfolioPhoto }) => $portfolioPhoto && css`
            width: auto;
            height: 100%;
            max-width: auto;
            max-height: 163px;
        `}
    }
`;

export const MissingProfilePhotoIcon = styled(MissingPhotoIcon)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 48px;
    height: 48px;
  }
`;

export const PeopleTileName = styled.p`
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: ${({ theme }) => theme.color.black};
    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        font-size: 14px;
    }
`;