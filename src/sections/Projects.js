import { useState } from "react";
import Page from "../components/Page";
import Tag from "../components/Tag";
import linkIcon from "../assets/link.png";
import github from "../assets/github.png";

const projects = [
  {
    title: "Pixel Chess",
    description:
      "Website to play chess 1v1 against your friends. Created using javascript and web sockets for real time play.",
    technologies: ["side project", "html", "javascript", "socket.io"],
    link: "https://pixel-chess.glitch.me/",
    github: "https://github.com/juan-t0rres/pixelchess",
  },
  {
    title: "Maze Solver",
    description: "Maze solving visualizer using the A* path finding algorithm.",
    technologies: ["side project", "javascript", "p5.js"],
    link: "/maze-solver/index.html",
    github: "https://github.com/juan-t0rres/maze-solver",
  },
  {
    title: "Grub Up",
    description:
      "Proof of concept restaurant pickup ordering system. Created for coursework at my university. Uses an authentication system built from scratch using JSON web tokens.",
    technologies: [
      "coursework",
      "react",
      "express",
      "mongodb",
      "javascript",
      "jwt",
    ],
    github: "https://github.com/juan-t0rres/restaurant-app-client",
  },
  {
    title: "Amazon",
    description:
      "Software engineer intern on a team for product recalls at Amazon. Created a full stack internal tool with the purpose of providing information on products in recall cases.",
    technologies: ["internship", "aws", "react", "typescript", "java"],
    link: "https://www.amazon.com/",
  },
  {
    title: "Meta",
    description:
      "Software engineer intern on a team for Instagram shopping. Created a full stack internal tool with the purpose of providing information on shop collections in Instagram.",
    technologies: ["internship", "react", "hack", "javascript"],
    link: "https://about.facebook.com/meta",
  },
  {
    title: "UKG",
    description:
      "Software engineer intern on a team for payment features at UKG. Worked on and tested accessibility features for the mobile version of UKG's main product, UKGPro.",
    technologies: ["internship", "angular", "javascript", "java"],
    link: "https://www.ukg.com/",
  },
];

function Projects() {
  const [selected, setSelected] = useState(0);

  return (
    <Page title="Projects & Experience">
      <div className="projects">
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
        <div className="selected-project">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ fontFamily: "Rubik" }}>{projects[selected].title}</h3>
            {projects[selected].link && (
              <a target="_blank" href={projects[selected].link}>
                <img
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
              <a target="_blank" href={projects[selected].github}>
                <img
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
          <div style={{ marginTop: -10 }}>
            {projects[selected].technologies.map((tech, index) => (
              <Tag
                title={tech}
                key={tech}
                style={index > 0 ? { marginLeft: 5 } : {}}
              />
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 16 }}>
            {projects[selected].description}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Projects;
