import jobs from '../data/dataJobs.json';
import { useState } from 'react';
import '../styles/App.scss';
import JobList from './JobList';
import Filter from './Filter';

function App() {
  const [data, setData] = useState(jobs);
  const [selected, setSelected] = useState([]);

  const handleSaveTag = (value) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value]);
    }
  };

  const filter = data.filter((item) => {
    const tag = [item.role, item.level];
    if (item.languages) {
      tag.push(...item.languages);
    }
    if (item.tools) {
      tag.push(...item.tools);
    }
    return selected.every((filter) => tag.includes(filter));
  });

  return (
    <div className='App'>
      <header className='header'></header>
      <main>
        <Filter filter={selected}></Filter>
        <JobList data={filter} savedValue={handleSaveTag}></JobList>
      </main>
    </div>
  );
}

export default App;
