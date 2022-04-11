import Page from "../components/Page";

function About() {
  return (
    <Page title="About" style={{ lineHeight: 1.2 }}>
      <p>
        Hi! My name is Juan Torres and I'm a developer. I'm in my senior year
        studying computer science at the University of Central Florida. I will
        be working for Meta starting this upcoming Fall (2022). My favorite area
        of development is the web, you can find examples of what I have worked
        on above. I have experience in both front end and back end development.
      </p>
      <p>
        My favorite technologies to work with are React and Firebase but I also
        have experience using other stacks like MERN. I am also knowledgable in
        several AWS services such as Lambda, S3, EC2, and Route53.
      </p>
    </Page>
  );
}

export default About;
