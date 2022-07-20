import '../styles/JobItem.scss';

function JobList(props) {
  const languages = props.job.languages.map((language, index) => {
    return (
      <li className='item-container__tags--element' key={index}>
        {language}{' '}
      </li>
    );
  });

  const tools = props.job.tools.map((tool, index) => {
    return (
      <li className='item-container__tags--element' key={index}>
        {tool}
      </li>
    );
  });
  return (
    <div
      className={`item-container
    ${props.job.featured ? 'featured' : ''}`}
    >
      <img
        className='item-container__image'
        src={`../${props.job.logo}`}
        alt='Logo'
      />
      <div className='item-container__data'>
        <div className='item-container__company'>
          <h2 className='item-container__company--name'>{props.job.company}</h2>
          {props.job.new && (
            <p className='item-container__company--new'>NEW!</p>
          )}
          {props.job.featured && (
            <p className='item-container__company--featured'>FEATURED</p>
          )}
        </div>
        <h1 className='item-container__position'>{props.job.position}</h1>
        <ul className='item-container__info'>
          <li className='item-container__info--item'>{props.job.postedAt}</li>
          <li className='item-container__info--item'>·</li>
          <li className='item-container__info--item'>{props.job.contract}</li>
          <li className='item-container__info--item'>·</li>
          <li className='item-container__info--item'>{props.job.location}</li>
        </ul>
      </div>

      <div className='item-container__filters'>
        <ul className='item-container__tags'>
          <li className='item-container__tags--element'>{props.job.role}</li>
          <li className='item-container__tags--element'>{props.job.level}</li>
          {languages}
          {tools}
        </ul>
      </div>
    </div>
  );
}
export default JobList;
