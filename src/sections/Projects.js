import { useState } from "react";
import Page from "../components/Page";
import Tag from "../components/Tag";
import linkIcon from "../assets/link.png";
import github from "../assets/github.png";
import projects from "./projectList";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion } from "framer-motion";

function Projects() {
  const [selected, setSelected] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const { width } = useWindowDimensions();

  const mobile = width < 900;
  return (
    <Page title="Projects & Experience">
      <div className="projects">
        {!mobile && (
          <ul className="projects-menu">
            {projects.map((project, index) => (
              <motion.li
                whileInView={{
                  backgroundColor: index === selected ? "#5DDB95" : "#fff",
                }}
                whileHover={{ backgroundColor: "#5DDB95" }}
                whileTap={{ scale: 0.9 }}
                key={project.title}
                onClick={() => {
                  setSelected(index);
                  setOpacity(0);
                  setTimeout(() => setOpacity(1), 100);
                }}
              >
                {project.title}
              </motion.li>
            ))}
          </ul>
        )}
        <div
          style={
            mobile
              ? {
                  width: "100%",
                  margin: "0 auto 0 auto",
                  display: "flex",
                  alignItems: "center",
                }
              : {}
          }
        >
          {mobile && (
            <button
              onClick={() => {
                setSelected(
                  selected - 1 < 0 ? projects.length - 1 : selected - 1
                );
              }}
            >
              &lt;
            </button>
          )}
          <motion.div
            className="selected-project"
            style={mobile ? { height: "100%" } : {}}
            animate={{ opacity }}
            transition={{ duration: opacity ? 0.2 : 0 }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ fontFamily: "Rubik" }}>
                {projects[selected].title}
              </h3>
              {projects[selected].link && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projects[selected].link}
                >
                  <img
                    alt="link"
                    style={{
                      width: 22,
                      height: 22,
                      marginLeft: 5,
                      marginTop: 2,
                    }}
                    src={linkIcon}
                  />
                </a>
              )}
              {projects[selected].github && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projects[selected].github}
                >
                  <img
                    alt="github"
                    style={{
                      width: 22,
                      height: 22,
                      marginLeft: 5,
                      marginTop: 2,
                    }}
                    src={github}
                  />
                </a>
              )}
            </div>
            <div
              style={{
                marginTop: -10,
                display: "flex",
                flexWrap: "wrap",
                columnGap: "5px",
                rowGap: "5px",
              }}
            >
              {projects[selected].technologies.map((tech, index) => (
                <Tag title={tech} key={tech} />
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 16 }}>
              {projects[selected].description}
            </div>
          </motion.div>
          {mobile && (
            <button
              onClick={() => setSelected((selected + 1) % projects.length)}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </Page>
  );
}

export default Projects;
