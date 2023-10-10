import { ReactComponent as StarIcon } from "../../images/shape-star.svg";
import styled, { css } from "styled-components";

export const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    justify-content: start;
    align-items: baseline;
    grid-template-columns: auto auto;
    grid-gap: 8px;
  }

  ${({ $movieTileDetails }) =>
    $movieTileDetails &&
    css`
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-top: 10px;
        grid-gap: 0;
      }
    `}
`;

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  align-items: baseline;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 4px;
  }

  ${({ $movieTileDetails }) => $movieTileDetails && css`
      grid-gap: 12px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-gap: 12px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        grid-gap: 8px;
      }
    `}
`;

export const Star = styled(StarIcon)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 16px;
    width: 16px;
  }

  ${({ $movieTileDetails }) =>
    $movieTileDetails &&
    css`
      height: 24px;
      width: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 20px;
        width: 20px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        height: 16px;
        width: 16px;
      }
    `}
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
  }

  ${({ $movieTileDetails }) =>
    $movieTileDetails &&
    css`
      align-self: center;
      font-size: 16px;
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 13px;
      }
    `}
`;

export const MaxRate = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
  }
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
  }

  ${({ $movieTileDetails }) =>
    $movieTileDetails &&
    css`
      align-self: center;
      margin-top: 0;
      font-size: 16px;
      color: ${({ theme }) => theme.color.darkerGrey};
      font-weight: 400;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 13px;
      }
    `}
`;
