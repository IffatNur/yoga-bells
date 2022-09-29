import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Details from './components/Details/Details';

function App() {
  const [exercises, setExercises] = useState([]);
  useEffect( () =>{
    fetch('activity.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  },[])

  return (
    <div className='bg-light'>
      <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Header></Header>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                      exercises.map(exercise => <Cards key={exercise.id} exercise={exercise}></Cards>)
                    }
                  </div>
                </div>
                <div className="col-6 col-md-4 bg-white">
                  <Details></Details>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
