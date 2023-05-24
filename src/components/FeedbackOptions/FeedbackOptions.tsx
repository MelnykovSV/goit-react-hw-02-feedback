import { IFeedbackOptionsProps } from '../../interfaces';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ responseHandler }: IFeedbackOptionsProps) => {
  return (
    <Container>
      <button
        type="button"
        className="button-good"
        name="good"
        onClick={responseHandler}
      >
        Good
      </button>
      <button
        type="button"
        className="button-neutral"
        name="neutral"
        onClick={responseHandler}
      >
        Neutral
      </button>
      <button
        type="button"
        className="button-bad"
        name="bad"
        onClick={responseHandler}
      >
        Bad
      </button>
    </Container>
  );
};
