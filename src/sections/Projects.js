import { useState } from "react";
import Page from "../components/Page";
import Tag from "../components/Tag";
import linkIcon from "../assets/link.png";
import github from "../assets/github.png";
import projects from "./projectList";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Projects() {
  const [selected, setSelected] = useState(0);
  const { height, width } = useWindowDimensions();

  const mobile = width < 900;
  return (
    <Page title="Projects & Experience">
      <div className="projects">
        {!mobile && (
          <ul className="projects-menu">
            {projects.map((project, index) => (
              <li
                key={project.title}
                onClick={() => setSelected(index)}
                style={
                  index === selected
                    ? {
                        borderRadius: 5,
                        backgroundColor: "#5DDB95",
                      }
                    : {}
                }
              >
                {project.title}
              </li>
            ))}
          </ul>
        )}
        <div
          style={
            mobile
              ? {
                  width: "80%",
                  margin: "0 auto 0 auto",
                  display: "flex",
                  alignItems: "center",
                }
              : {}
          }
        >
          {mobile && (
            <a
              onClick={() =>
                setSelected(
                  selected - 1 < 0 ? projects.length - 1 : selected - 1
                )
              }
            >
              &lt;
            </a>
          )}
          <div
            className="selected-project"
            style={mobile ? { height: "100%" } : {}}
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
          </div>
          {mobile && (
            <a onClick={() => setSelected((selected + 1) % projects.length)}>
              &gt;
            </a>
          )}
        </div>
      </div>
    </Page>
  );
}

export default Projects;
