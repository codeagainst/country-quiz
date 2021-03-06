import QuizAnswer from '../Answer/QuizAnswer';
import { useAppContext } from '../../state/index';
import '../Answers/QuizAnswers.css';

const QuizAnswers = () => {
  const {questions} = useAppContext()

  return (
    <div className='quiz_container__answers'>
      {questions.map((question, i) => {
        return <QuizAnswer
                name={question.name}
                isCorrect={question.isCorrect}
                index={i}
                key={question.name + '-' + i}
              />
      })}
    </div>
  )
}

export default QuizAnswers;
