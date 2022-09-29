import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Questions from './components/Questions/Questions';
import { getStoredTime } from './components/utilities/Exercisetime';

function App() {
  const [exercises, setExercises] = useState([]);
  let [exerciseTime, setexerciseTime] = useState(0);
  let [breakTime, setbreakTime] = useState(0);

  useEffect( () =>{
    fetch('activity.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  },[]);
  
  useEffect( () =>{
    getStoredTime(exerciseTime, breakTime);
  },[exerciseTime, breakTime]);

  const getExerciseTime = (time) => {
    exerciseTime = exerciseTime + time;
    console.log(exerciseTime);
    setexerciseTime(exerciseTime);
  }
  
  const getBreakTime = (time) =>{
    console.log(time);
    breakTime = time;
    setbreakTime(breakTime);
  }
  getStoredTime(exerciseTime, breakTime);
  return (
    <div className='bg-light'>
      <div className="container">
            <div className="row">
                  <div className="col-md-8">
                    <Header></Header>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {
                        exercises.map(exercise => <Cards key={exercise.id} exercise={exercise} getExerciseTime={getExerciseTime}></Cards>)
                      }
                    </div>
                      <Questions></Questions>
                  </div>
                <div className="col-6 col-md-4 bg-white">
                  <Details exerciseTime={exerciseTime} getBreakTime={getBreakTime} breakTime={breakTime}></Details>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
