import Rating from "../../../common/Rating";
import { Details, Poster, Title, Wrapper } from "./styled";

const MovieTopInfo = ({ title }) => {
  return (
    <Wrapper>
      <Poster>
        <Details>
          <Title>{title}</Title>
          <Rating votes={405} rating={7.5} />
        </Details>
      </Poster>
    </Wrapper>
  );
};

export default MovieTopInfo;
