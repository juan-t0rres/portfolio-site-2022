import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import me from "./assets/me.png";

function Home() {
  return (
    <div className="content">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img style={{ width: 160, marginRight: 10 }} src={me} />
        <div>
          <h1>Juan Torres</h1>
          <div style={{ marginTop: -20 }}>
            Welcome to my portfolio!{" "}
            <span style={{ fontSize: 20, marginLeft: 5 }}>👋</span>
          </div>
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
