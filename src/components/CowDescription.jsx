const CowDescription = (props) => {
  if (props.clickedCow !== '') {
    return (
      <>
      <h3>{props.clickedCow}</h3>
      <h3>{props.cowDesc}</h3>
      </>
    )
  } else {
    return (
      <h1>Hello</h1>
    )
  }
}
export default CowDescription