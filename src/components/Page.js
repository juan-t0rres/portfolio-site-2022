function Page(props) {
  return (
    <div style={{ ...props.style, paddingBottom: 10 }}>
      <h2>{props.title}</h2>
      <div style={{ marginTop: -10 }}>{props.children}</div>
    </div>
  );
}

export default Page;
