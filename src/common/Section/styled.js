import styled from "styled-components";

export const BottomContainer = styled.div`
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-top: 32px;
    }
`;