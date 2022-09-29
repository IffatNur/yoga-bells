
import './App.css';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Questions from './components/Questions/Questions';
import { getBreakStoredTime, setBreakStoredTime } from './components/utilities/Exercisetime';
import Footer from './components/Footer/Footer';


function App() {
  const [exercises, setExercises] = useState([]);
  let [exerciseTime, setexerciseTime] = useState(0);
  let [breakTime, setbreakTime] = useState(0);

  useEffect( () =>{
    fetch('activity.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  },[]);
  
  useEffect( ()=>{
    const storedTime  = getBreakStoredTime();
    setbreakTime(storedTime.time);
  },[breakTime])

  const getExerciseTime = (time) => {
    exerciseTime = exerciseTime + time;
    console.log(exerciseTime);
    setexerciseTime(exerciseTime);
  }
  
  const getBreakTime = (time) =>{
    breakTime = time;
    setbreakTime(breakTime);
    setBreakStoredTime(breakTime);
  }
  
  return (
    <div className='bg-light'>
      <div className="container">
            <div className="row">
                  <div className="col-md-8">
                    <Header></Header>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                      {
                        exercises.map(exercise => <Cards key={exercise.id} exercise={exercise} getExerciseTime={getExerciseTime}></Cards>)
                      }
                    </div>
                      <Questions></Questions>
                  </div>
                <div className="col-12 col-md-4 bg-white">
                  <Details exerciseTime={exerciseTime} getBreakTime={getBreakTime} breakTime={breakTime} ></Details>
                </div>
            </div>
        </div>
            <Footer></Footer>
    </div>
  );
}

export default App;
