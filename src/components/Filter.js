function Filter(props) {
  const handleClearTag = (event) => {
    props.clearTag(event.target.id);
  };
  const filterElement = props.filter.map((element, index) => {
    return (
      <li key={index}>
        {element}
        <span id={element} onClick={handleClearTag}>
          X
        </span>
      </li>
    );
  });
  return <ul>{filterElement}</ul>;
}
export default Filter;
