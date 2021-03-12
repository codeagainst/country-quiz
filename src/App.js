import './App.css';
import QuizContainer from './components/QuizContainer'
import Result from './components/Result'

import {useAppContext} from './state'
//refactor schedule to May when completed Typescript course
function App() {

  const {showResult} = useAppContext()

  return (
    <div className='app'>
      
      {!showResult ? 
      
        <QuizContainer /> :

        <Result />
      }

      <footer>
        CodeAgainst&nbsp;<a href="https://devchallenges.io/">@DevChalenges.io</a>
      </footer>
    </div>
  );
}

export default App;