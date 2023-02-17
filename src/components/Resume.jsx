import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2015-2017",
      title: "Associates Degree: Math & Science",
      place: "Holmes Commnunity College",
      desc: "Core Ciriculum with a focus of physics and mathematics.",
    },
    {
      yearRange: "2017-2021",
      title: "Bachelor Degree: Computer Science",
      place: "Mississippi State University",
      desc: "Honors graduate with a specialization in data science.",
    },
    {
      yearRange: "2022 - 2024",
      title: "Seeking Master Degree: Computer Engineering",
      place: "University of Colardo Boulder",
      desc: "Concentration on Data Science Engineering.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2022",
      title: "Backend JavaScript/Python Developer",
      place: "HealthSmart",
      desc: "Developed and maintained a web application Bootstrap and Django for a hospital management system with a team of 30.  Streamlining the inputting and verification of medical records in DB. ",
    },
    {
      yearRange: "2019-2020",
      title: "Software Engineer Apprentice",
      place: "Delta Airlines",
      desc: "Involved in requirements gathering, analysis and development of the Insurance Portal.  Used AngularJS to implement the MVC pattern to separate presentation components",
    },
    { 
      yearRange: "2017",
      title: "Software Developer Entern",
      place: "Bancorp South",
      desc: "Worked with a small team of other interns as well as 5 industry professional supervisors.  Collaborated with 15+ experts across a range of domains to identify and study data sets to produce visuals and other tools.",
    },
  ];

  const skills = [
    // {
    //   name: "Web Design",
    //   percent: 100,
    // },
    // {
    //   name: "Python: Flask/Django",
    //   percent: 100,
    // },
    // {
    //   name: "JavaScript: TypeScript",
    //   percent: 100,
    // },
    // {
    //   name: "React JS: Angular",
    //   percent: 100,
    // },
    // {
    //   name: "C++",
    //   percent: 100,
    // },
    // {
    //   name: "Bootstrap",
    //   percent: 100,
    // },
    // {
    //   name: "Data Science and Databases",
    //   percent: 100,
    // },{
    //   name: "Linux/Git/Bash",
    //   percent: 100,
    // },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          {/* My Skills */}
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
        
      <h2 >References and more projects available upon request</h2>
      </div>
    </section>
  );
};

export default Resume;
