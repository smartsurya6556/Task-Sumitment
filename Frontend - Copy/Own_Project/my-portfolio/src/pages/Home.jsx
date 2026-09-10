import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <h1>Hi, I'm Surya</h1>

        <div className="card">
          <div id="typing" className="typing">
            Full Stack Java Developer | Learning & Building Projects
          </div>
        </div>

        <div className="intro-box">

          <h2>📘 Full Stack Java Learning Roadmap</h2>

          <ol>

            <li>
              <strong>Computer Fundamentals</strong>
              <ul>
                <li>What is Data?</li>
                <li>What is Information?</li>
                <li>What is Computer?</li>
                <li>History of Computer</li>
                <li>Characteristics of Computer</li>
                <li>Types of Computer</li>
                <li>Applications of Computer</li>
                <li>Advantages & Disadvantages</li>
              </ul>
            </li>

            <li>
              <strong>Basic Computer Components</strong>
              <ul>
                <li>Hardware</li>
                <li>Software</li>
                <li>CPU</li>
                <li>Memory</li>
                <li>Input Devices</li>
                <li>Output Devices</li>
                <li>Storage Devices</li>
              </ul>
            </li>

            <li>
              <strong>Programming Basics</strong>
              <ul>
                <li>What is Program?</li>
                <li>Programming Language</li>
                <li>Variables</li>
                <li>Data Types</li>
                <li>Operators</li>
                <li>Input & Output</li>
                <li>Conditions</li>
                <li>Loops</li>
                <li>Functions</li>
              </ul>
            </li>

            <li>
              <strong>Object-Oriented Programming (OOP)</strong>
              <ul>
                <li>Class</li>
                <li>Object</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Encapsulation</li>
                <li>Abstraction</li>
              </ul>
            </li>

            <li>
              <strong>Data Structures & Algorithms</strong>
              <ul>
                <li>Arrays</li>
                <li>Strings</li>
                <li>Linked List</li>
                <li>Stack</li>
                <li>Queue</li>
                <li>Tree</li>
                <li>Sorting</li>
                <li>Searching</li>
                <li>Big O Notation</li>
              </ul>
            </li>

            <li>
              <strong>Database</strong>
              <ul>
                <li>SQL</li>
                <li>CRUD Operations</li>
                <li>Primary Key</li>
                <li>Foreign Key</li>
                <li>Joins</li>
                <li>Normalization</li>
              </ul>
            </li>

            <li>
              <strong>Version Control</strong>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Clone</li>
                <li>Commit</li>
                <li>Push</li>
                <li>Pull</li>
                <li>Branch</li>
              </ul>
            </li>

            <li>
              <strong>Web Development</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
              </ul>
            </li>

            <li>
              <strong>Development Tools</strong>
              <ul>
                <li>VS Code</li>
                <li>Terminal</li>
                <li>Debugging</li>
                <li>Browser Developer Tools</li>
              </ul>
            </li>

            <li>
              <strong>Java Full Stack</strong>
              <ul>
                <li>Java</li>
                <li>JDBC</li>
                <li>Servlets & JSP</li>
                <li>Spring Boot</li>
                <li>REST API</li>
                <li>React</li>
                <li>Projects</li>
                <li>Interview Preparation</li>
              </ul>
            </li>

          </ol>

        </div>

        <a
          href="/SURYA.Resume.pdf"
          download="Surya-Resume.pdf"
          className="btn-download"
        >
          ⬇ Download Resume
        </a>

      </section>

      <div id="fx"></div>

    </>
  );
}

export default Home;