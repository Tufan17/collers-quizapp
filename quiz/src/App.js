import './App.css';
import Preloader from "./components/Preloader";
import QuizApp from './components/Quiz.jsx';

function App() {
  return (
    <div >
      <Preloader/>
      <QuizApp/>
    </div>
  );
}

export default App;
