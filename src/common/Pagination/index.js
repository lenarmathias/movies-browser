import {
  PaginationContainer,
  PageButtonsContainer,
  PageVectorIcon,
  ButtonContent,
  MobileHide,
  MiddleContainer,
} from "./styled";
import { SmallTile, SmallGreyText } from "../../common/styled.js";

const Pagination = () => {
  return (
    <PaginationContainer>
      <PageButtonsContainer>
        <SmallTile $pageButton as="button" disabled>
          <ButtonContent>
            <PageVectorIcon $previousPage />
            <PageVectorIcon $previousPage $mobileOnly />
            <MobileHide>First</MobileHide>
          </ButtonContent>
        </SmallTile>
        <SmallTile $pageButton as="button" disabled>
          <ButtonContent>
            <PageVectorIcon $previousPage />
            <MobileHide>Previous</MobileHide>
          </ButtonContent>
        </SmallTile>
      </PageButtonsContainer>
      <MiddleContainer>
        <SmallGreyText>Page</SmallGreyText>
        <SmallGreyText $boldBlackText>1</SmallGreyText>
        <SmallGreyText>of</SmallGreyText>
        <SmallGreyText $boldBlackText>500</SmallGreyText>
      </MiddleContainer>
      <PageButtonsContainer>
        <SmallTile $pageButton as="button">
          <ButtonContent>
            <MobileHide>Next</MobileHide>
            <PageVectorIcon />
          </ButtonContent>
        </SmallTile>
        <SmallTile $pageButton as="button">
          <ButtonContent>
            <MobileHide>Last</MobileHide>
            <PageVectorIcon $mobileOnly />
            <PageVectorIcon />
          </ButtonContent>
        </SmallTile>
      </PageButtonsContainer>
    </PaginationContainer>
  );
};

export default Pagination;
