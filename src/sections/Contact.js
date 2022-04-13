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
    </Page>
  );
}

export default Contact;
