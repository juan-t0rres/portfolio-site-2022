function Page(props) {
  return (
    <div style={{ ...props.style, paddingBottom: 5 }}>
      <h2 style={{ fontSize: 24 }}>{props.title}</h2>
      <div style={{ marginTop: -10 }}>{props.children}</div>
    </div>
  );
}

export default Page;
