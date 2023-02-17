import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Graphic Design",
      desc: "I have experience in using Adobe and Microsoft Suite for stlyish and dynamic graphics",
      icon: "fas fa-palette",
    },
    {
      name: "Web Design",
      desc: "I have taken over 20 hours worth of university credits in Web Design and designed several commerical and non-profit web design assets",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "I have experience designing and implementing user friend, dynamic and scalable UI designs",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "App Design & Develop",
      desc: "I am certified in both Swift iOS and Kotlin/Java Android Development.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Data Science",
      desc: "I have utilized both SQL and non-SQL data bases using both Python and server side languages.  I have also taken several graduate level courses in Data Science",
      icon: "fas fa-chart-area",
    },
    {
      name: "SEO Marketing",
      desc: "I offer affordable and fast turn-around for SEO.  I have used these skills to have increased web hits by 300% for several of my clients",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
