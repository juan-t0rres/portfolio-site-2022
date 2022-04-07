function Page(props) {
  return (
    <div className="page" style={props.style}>
      <h2>{props.title}</h2>
      <div style={{ marginTop: -10 }}>{props.children}</div>
    </div>
  );
}

export default Page;
