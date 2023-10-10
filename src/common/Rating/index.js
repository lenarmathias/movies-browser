import { MaxRate, Rate, Star, Votes, RatingWrapper, Container } from "./styled";

const Rating = ({ rating, votes, $movieTileDetails }) => {
  const ratingDotReplaceWithComma = (rating) => {
    const ratingString = rating.toString();
    const modifiedRating = ratingString.replace(/\./g, ',');
    return modifiedRating;
  };

  return (
    <Container $movieTileDetails={$movieTileDetails}>
      <RatingWrapper $movieTileDetails={$movieTileDetails}>
        <Star $movieTileDetails={$movieTileDetails} />
        <Rate $movieTileDetails={$movieTileDetails}>
          {ratingDotReplaceWithComma(rating)}
        </Rate>
        {!$movieTileDetails && <MaxRate>/10</MaxRate>}
      </RatingWrapper>
      <Votes $movieTileDetails={$movieTileDetails}>
        {votes} votes
      </Votes>
    </Container>
  );
};

export default Rating;
