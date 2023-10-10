import styled from "styled-components";

export const MovieListOrganizer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletWide}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;