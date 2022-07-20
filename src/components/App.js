import jobs from '../data/dataJobs.json';
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState(jobs);
  console.log(jobs);
  return (
    <div className='App'>
      <header className='header'></header>
      <main></main>
    </div>
  );
}

export default App;
