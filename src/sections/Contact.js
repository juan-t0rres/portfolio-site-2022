import Page from "../components/Page";

function Contact() {
  return (
    <Page title="Contact">
      <p>
        You can reach me by email at{" "}
        <a
          style={{ color: "#3d3d3d", textDecoration: "none" }}
          href="mailto:juanditb@gmail.com"
        >
          <b>juanditb@gmail.com</b>
        </a>{" "}
        or through discord at <b>huan#1657</b>
      </p>
      <p style={{ marginTop: -12 }}>
        Feel free to message me about anything{" "}
        <span style={{ fontSize: 20 }}>😉</span>
      </p>
    </Page>
  );
}

export default Contact;
