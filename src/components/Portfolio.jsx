import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    INDUSTRY: "Industry",
    DESIGN: "Freelance",
    BRAND: "Non-Profit",
    PHOTOS: "Education",
  };

  const projectsData = [
    {
      title: "Immigrant and Refugee Community Organization: Portland, OR",
      projectInfo:
        "A landing page and contact form that I created for a local non-profit here in Portland Oregon related to local church contributions to refugees from Africa, Eastern Europe, Afghanistan, Middle East and other regions.  The site is avaiable in 2 languages and uses PHP for the backend.  I do not currently maintain this project but I worked on it for 6 month along with 6 other web developers",
      client: "irco.org",
      technologies: "HTML, CSS3, PHP, JavaScript",
      industry: "Non-Profit, Community Service",
      date: "Jun 26, 2022",
      url: {
        name: "https://irco.org/",
        link: "https://irco.org/",
      },
      thumbImage: "images/projects/refugee1.jpeg",
      sliderImages: [
        "images/projects/refugee2.jpeg",
        "images/projects/refugee3.jpeg", 
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Restaurants Website  ",
      projectInfo:
        "A recently launched website I created with another web developer that allows for carts, updates to the menu, reservations and contact + form information.  It allows for an interactive and dynamic presistent cart using menuify and node.",
      client: "Ruby Clinton",
      technologies: "Node.js, Bootstrap, Menuify",
      industry: "Freelance",
      date: "Jan 2nd 2023",
      url: {
        name: "https://kaiasianstreetfood.menufy.com/",
        link: "https://kaiasianstreetfood.menufy.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/kai3.jpeg",
      sliderImages: [
        "images/projects/kai1.jpeg",
        "images/projects/kai2.jpeg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Interactive Card Game",
      projectInfo:
        "A simple dynamic App that allows you to move and stack playing cards on a grid.  This is accomplished via JavaScript, and scaling to viewpoint, dynamically resizing card.  This was used for a honors section of a Web Development II course in 2019.  A live demo is available",
      client: "Mississippi State University",
      technologies: "HTML, CSS, JavaScript",
      industry: "Education",
      date: "Nov 16, 2019",
      url: {
        name: "https://gentle-vacherin-ea4883.netlify.app/",
        link: "https://gentle-vacherin-ea4883.netlify.app/",
      }, 
      thumbImage: "images/projects/cards.jpeg",
      sliderImages: [  
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Weather App",
      projectInfo:
        "A simple app that uses a Weather API to pull weather data dynamically based on the user's location.  It will then populate an HTML with the current weather information.  This was created as an example of a perfect web API project and designed with a tutorial that I created",
      client: "None",
      technologies: "HTML, CSS, JavaScript",
      industry: "Education",
      date: "July 16, 2021",
      url: {
        name: "https://stellular-chimera-48f344.netlify.app/",
        link: "https://stellular-chimera-48f344.netlify.app/",
      },
      thumbImage: "images/projects/weather.jpeg",
      sliderImages: [
        "images/projects/weather2.jpeg", 
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Contractor and Roofing Website",
      projectInfo:
        "A simple WordPress and PHP page for a local contractor business in the Pacific North West.  Brought to life in a few hours, SEO optimized and receives thousands of views each month. ",
      client: "Leyvas Remodeling LLC",
      technologies: "WordPress, PHP, GoogleForms",
      industry: "Freelance",
      date: "January 5, 2021",
      url: {
        name: "https://leyvasremodeling.com/",
        link: "https://leyvasremodeling.com/",
      },
      thumbImage: "images/projects/leyvas1.jpeg",
      sliderImages: [
        "images/projects/leyvas2.jpeg",
        "images/projects/leyvas3.jpeg",
        "images/projects/leyvas1.jpeg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Dynamic Menu",
      projectInfo:
        "A feature that was implemented in a professional website that I created and maintained.  Although the busniess is now closed, and the website as well, here I presented a simple dynamic menu that I also created a tutorial for.  This site is fully available on my Github for use, and is ready to be styled with CSS bootstrap automatically.  See documentation",
      client: "N/A",
      technologies: "HTML, CSS, JavaScript",
      industry: "Education",
      date: "December 4, 2019",
      url: {
        name: "https://chic-salmiakki-f8ea99.netlify.app/index.html",
        link: "https://chic-salmiakki-f8ea99.netlify.app/index.html",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/rest3.jpeg",
      sliderImages: [
        "images/projects/rest2.jpeg",
        "images/projects/rest1.jpeg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "To-Do List",
      projectInfo:
        "A basic to-do list App that I created for a paid client on Fiverr.  I also used this as tutorial which I have posted to my YouTube channel.  The specific App I was commisioned contained more functionality, using a database and backend.  However this is a great example of how to use CRUD using a simple Array.  Being able to add, remove and update/edit each item",
      client: "Fiverr Customer",
      technologies: "HTML, CSS, JavaScript",
      industry: "Freelance and Education",
      date: "July 16, 2021",
      url: {
        name: "https://cute-rugelach-2a46ba.netlify.app/",
        link: "https://cute-rugelach-2a46ba.netlify.app/",
      },
      thumbImage: "images/projects/todo2.jpeg",
      sliderImages: [
        "images/projects/todo3.jpeg", 
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },{
      title: "Teotepdx Restaurant Website",
      projectInfo:
        "For this project, I was given an existing website and was tasked to implement forms for scedudling and managing reservations, their slots and to update UI and frontend presentation.  The owners are okay with me sharing this active link, but repository is not availble.  Great place to eat at as well if you are in Portland and the website is currently maintained by me ", 
      client: "Teote PDX LLC",
      technologies: "HTML, CSS, Node, Bootstrap, MySQL",
      industry: "Freelance",
      date: "July 16, 2020",
      url: {
        name: "https://www.teotepdx.com/",
        link: "https://www.teotepdx.com/",
      }, 
      thumbImage: "images/projects/teo3.jpeg",
      sliderImages: [
        "images/projects/teo2.jpeg",
        "images/projects/teo1.jpeg",
      ],
      categories: [filters.DESIGN],
    },{
      title: "Mobile App: Coming soon",
      projectInfo:
        "Developing an iOS/Android app that helps to track local businesses by type.  Uses python webscrapper backend and Swift for interface",
      client: "N/A",
      technologies: "Swift, Python, Kotlin, others ",
      industry: "N/A",
      date: "TDE",
      url: {
        name: " ",
        link: " ",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
        "images/projects/project-2.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.INDUSTRY],
    },{
      title: "Countryside Equine Veterinary Service",
      projectInfo:
        "A complete website using Bootstrap, Laravel and Wordpress.  This was done as a non-profit for a local vetieray clinic",
      client: "Randy Lee, DVM",
      technologies: "Wordpress, Laravel, Bootstrap css",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://www.countrysideequineveterinary.com/",
        link: "https://www.countrysideequineveterinary.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/vet1.jpeg",
      sliderImages: [
        "images/projects/vet2.jpeg",
        "images/projects/vet3.jpeg",
        "images/projects/vet4.jpeg",
      ],
      categories: [filters.BRAND],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
