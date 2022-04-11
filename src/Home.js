import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import me from "./assets/me.png";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { motion } from "framer-motion";

function Home() {
  const { height } = useWindowDimensions();
  return (
    <div className="content">
      <div style={{ display: "flex", alignItems: "center" }}>
        <motion.img
          alt="logo"
          style={{ width: 160, marginRight: 10, marginTop: height }}
          animate={{ marginTop: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 50 }}
          src={me}
        />
        <motion.div
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <h1>Juan Torres</h1>
          <div style={{ marginTop: -20 }}>
            Welcome to my portfolio!{" "}
            <span style={{ fontSize: 20, marginLeft: 5 }}>👋</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{ marginTop: height }}
        animate={{ marginTop: 0 }}
        transition={{ delay: 2, duration: 3, type: "spring", stiffness: 30 }}
      >
        <Projects />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
