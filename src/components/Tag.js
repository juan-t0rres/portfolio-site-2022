const colorMap = {
  angular: "#e87b7d",
  internship: "#d0a4eb",
  coursework: "#DAB88B",
  react: "#61DAFB",
  javascript: "#FCDC00",
  express: "#EEEEEE",
  hack: "#bababa",
  aws: "#EB912E",
  typescript: "#60A7F6",
  java: "#ff6b6e",
  "side project": "#adbcff",
  html: "#FC6F2E",
  "socket.io": "#46E2C0",
  "p5.js": "#ff5c8b",
  mongodb: "#12A952",
  jwt: "#06F1E6",
};

function Tag(props) {
  return (
    <div style={{ ...props.style, display: "inline-block" }}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: 10,
          padding: 4,
          fontSize: 11,
          fontWeight: "bolder",
          color: "black",
          backgroundColor: colorMap[props.title],
        }}
      >
        {props.title}
      </div>
    </div>
  );
}

export default Tag;
