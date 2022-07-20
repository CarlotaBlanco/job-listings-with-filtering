import jobs from '../data/dataJobs.json';
import { useState } from 'react';
import '../styles/App.scss';
import JobList from './JobList';

function App() {
  const [data, setData] = useState(jobs);

  return (
    <div className='App'>
      <header className='header'></header>
      <main>
        <JobList data={data}></JobList>
      </main>
    </div>
  );
}

export default App;
