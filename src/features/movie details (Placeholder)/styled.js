import styled from "styled-components";
import background from "../../images/poster.svg";

export const MovieDetailsContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const MovieDetailsSection = styled.div`
  width: 1368px;
  height: 769px;
  margin: auto;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsDiv = styled.div`
  margin-top: auto;
  font-family: Poppins;
`;

export const MovieDetailsTittle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;
`;

export const MovieDetailsRatingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 126px;
  margin: 0;
`;

export const MovieDetailsRatingStar = styled.div`
  display: grid;
  align-items: center;
  margin-right: 8px;
`;

export const MovieDetailsRate = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.color.white};
  margin-right: 7px;
`;

export const MovieDetailsRateScale = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};
  display: grid;
  align-items: center;
`;

export const MovieDetailsRatesNumber = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};
`;

export const MovieDetailsTileDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const MovieDetailsTileTittle = styled.p`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.color.black};
`;

export const MovieDetailsPhotoTile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 208px;
  height: 346px;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  padding: 16px;
`;

export const MovieDetailsActorsPhoto = styled.img`
  width: 177px;
  height: 246px;
  margin: -6px -1px -27px -1px;
`;

export const MovieDetailsActorsName = styled.p`
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.color.black};
  margin: 39px auto 0px auto;
`;

export const MovieDetailsCharacter = styled.p`
  margin: 8px auto 0px auto;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
`;
