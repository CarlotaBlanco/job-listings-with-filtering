import '../styles/Filter.scss';

function Filter(props) {
  const handleClearTag = (event) => {
    props.clearTag(event.target.id);
  };

  const filterElement = props.filter.map((element, index) => {
    return (
      <li className='selected_tags_container__li' key={index}>
        <span className='selected_tags_container__li--element'>{element}</span>
        <span
          className='selected_tags_container__close'
          id={element}
          onClick={handleClearTag}
        >
          X
        </span>
      </li>
    );
  });

  if (filterElement.length > 0) {
    return (
      <ul className='selected_tags_container'>
        <div className='selected_tags_container__div'>{filterElement}</div>
        <li
          className='selected_tags_container__clear'
          onClick={props.handleResetSelected}
        >
          Clear
        </li>
      </ul>
    );
  }
}
export default Filter;
