import React from "react"

const Work = () => {
  const projects = [
    {
      name: "UMBRELLA (Generative Art Algorithm)",
      isLive: true,
      href: "https://jacoberick.github.io/umbrella/",
      src: "umb",
      alt: "UMBRELLA Screenshot",
    },
    {
      name: "Art Portfolio",
      isLive: false,
      href: "https://github.com/jacoberick/gulag-anthem-art",
      src: "art",
      alt: "Art Portfolio Screenshot",
    },
    {
      name: "Seeker",
      isLive: true,
      href: "https://jacoberick.github.io/seeker/",
      src: "seek",
      alt: "Seeker Screenshot",
    },
    {
      name: "Keys",
      isLive: true,
      href: "https://jacoberick.github.io/keys/",
      src: "keys",
      alt: "Keys Screenshot",
    },
    {
      name: "Blog App",
      isLive: false,
      href: "https://github.com/jacoberick/blog-app",
      src: "gulag",
      alt: "Blog App Screenshot",
    },
    {
      name: "Moving Company Website",
      isLive: true,
      href: "https://jacoberick.github.io/Home-Aid-Moving/",
      src: "move",
      alt: "Moving Company Website Screenshot",
    },
    {
      name: "Full Stack App with React and REST API",
      isLive: false,
      href: "https://github.com/jacoberick/Full-Stack-App-with-React-and-a-REST-API",
      src: "fullStackApp",
      alt: "My Full Stack App Screenshot",
    },
    {
      name: "Phrase Hunter Game",
      isLive: true,
      href: "https://jacoberick.github.io/OOP-Game/",
      src: "OOP",
      alt: "Phrase Hunter Game Screenshot",
    },
    {
      name: "List Pagination and Filtering",
      isLive: true,
      href: "https://jacoberick.github.io/List-Pagination-and-Filtering/",
      src: "LPF",
      alt: "List Pagination and Filtering Screenshot",
    },
    {
      name: "Public API Request",
      isLive: true,
      href: "https://jacoberick.github.io/Public-API-Request/",
      src: "PAR",
      alt: "Public API Request Screenshot",
    },
    {
      name: "SQL Library Manager",
      isLive: false,
      href: "https://github.com/jacoberick/Sequel-Library-Manager",
      src: "SQL",
      alt: "SQL Library Manager Screenshot",
    },
  ]

  return (
    <div className="my-work-section">
      <h1 id="myWorkHeader">Some of My Work</h1>
      <div className="portfolio">
        <div className="portfolio__inner">
          {projects.map((p, id) => (
            <a key={id} rel="noopener noreferrer" target="_blank" href={p.href}>
              <img src={`/imgs/${p.src}.png`} alt={p.alt} />
              <p>
                {p.name}
                {p.isLive ? <span className="live">LIVE</span> : false}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
