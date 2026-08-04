const Profiles = (props) => {
  const { name, position, id,getId } = props;
  console.log(props);

//   function onClickHandler(e) {
//     console.log(e.id);
//   }

  function onClickHandler() {
    // console.log("Clicked id:", id);
    getId(id);
  }

  return (
    <article>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h2>{position}</h2>
      <button onClick={onClickHandler}>Click me</button>
    </article>
  );
};

export default Profiles;
