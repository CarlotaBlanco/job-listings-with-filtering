import JobItem from './JobItem';
import '../styles/JobList.scss';

function JobList(props) {
  const jobListElements = props.data.map((job) => {
    return (
      <li key={job.id} className='results_list__items'>
        <JobItem savedValue={props.savedValue} job={job}></JobItem>
      </li>
    );
  });
  return <ul className='results_list'>{jobListElements}</ul>;
}

export default JobList;
