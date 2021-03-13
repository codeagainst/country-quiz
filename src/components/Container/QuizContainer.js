import {useAppContext} from '../../state/index';
import QuizQuestion from '../Question/QuizQuestion';
import QuizAnswers from '../Answers/QuizAnswers';
import QuizImg from '../../assets/undraw_adventure.svg';
import '../Container/QuizContainer.css';

const QuizContainer = () => {
  const {gameEnded, setShowResult} = useAppContext()

  return (
    <div className='quiz_container'>
        <div className='quiz_container__header'>
            <h1>COUNTRY QUIZ</h1>
            <img src={QuizImg} alt=""/>
        </div>

        <QuizQuestion />

        <QuizAnswers />

        {gameEnded &&             
            <div onClick={() => setShowResult(true)} className='quiz_container__footer'>
                <button className='quiz_container__footer__btn'>NEXT</button>
            </div>
        }
    </div>
)
}

export default QuizContainer