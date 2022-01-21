import { AnswerObject } from "../App";
import styled from "styled-components";

type Correct = {
  correct: boolean;
  userClicked: boolean;
};
const Wrapper = styled.div`
  p {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div<Correct>`
  button {
    padding: 1em;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: ${({ correct, userClicked }) =>
      correct
        ? "green"
        : !correct && userClicked
        ? "red"
        : "rgb(53, 150, 241)"};
    width: 100%;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props) => {
  return (
    <Wrapper>
      <p className="number">
        Question:{questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default QuestionCard;
