import styled from "styled-components";

export const PeopleList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        gap: 16px;
    }
`;