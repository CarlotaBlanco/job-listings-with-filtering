function Filter(props) {
  const filterElement = props.filter.map((element, index) => {
    return (
      <li key={index}>
        {element} <span>X</span>
      </li>
    );
  });
  return <ul>{filterElement}</ul>;
}
export default Filter;
