import './App.css';
import QuizContainer from './components/Container/QuizContainer'
import Result from './components/Results/Results'

import {useAppContext} from './state/index'
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