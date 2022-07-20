function JobList(props) {
  const languages = props.job.languages.map((language, index) => {
    return <li key={index}>{language} </li>;
  });

  const tools = props.job.tools.map((tool, index) => {
    return <li key={index}>{tool} </li>;
  });
  return (
    <article>
      <img src={`../${props.job.logo}`} alt='Logo' />
      <div>
        <ul>
          <li>
            <h2>{props.job.company}</h2>
          </li>
          {props.job.new && <li>NEW!</li>}
          {props.job.featured && <li>FEATURED</li>}
        </ul>
        <h1>{props.job.position}</h1>
        <ul>
          <li>{props.job.postedAt}</li>
          <li>{props.job.contract}</li>
          <li>{props.job.location}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{props.job.role}</li>
          <li>{props.job.level}</li>
          {languages}
          {tools}
        </ul>
      </div>
    </article>
  );
}
export default JobList;
