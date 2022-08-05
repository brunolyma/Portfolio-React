import CineRankCover from "../../assets/cinerank-portfolio.webp";
import FinanControlCover from "../../assets/financial-control-portfolio.webp";
import QrCodeCover from "../../assets/qrcode-generator.webp";

import "./portfolio.css";

const portfolioItems = [
  {
    id: "cinerank",
    title: "CineRank",
    githubURL: "https://github.com/brunolyma/CineRank-React",
    demoVercel: "https://cinerank.vercel.app/",
    cover: CineRankCover,
  },
  {
    id: "qrcode",
    title: "QR-Code Generator",
    githubURL: "https://github.com/brunolyma/QRcode-Generator",
    demoVercel: "https://qr-code-generator-peach-phi.vercel.app/",
    cover: QrCodeCover,
  },
  {
    id: "financialControl",
    title: "Financial Control",
    githubURL: "https://github.com/brunolyma/Financial-Control-React",
    demoVercel: "https://financial-control-six.vercel.app/",
    cover: FinanControlCover,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems &&
          portfolioItems.map((project) => (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.cover} alt={project.title + " cover"} />
              </div>
              <h4>{project.title}</h4>
              <div className="portfolio__item-cta">
                <a href={project.githubURL} target="_blank" className="btn">
                  Github
                </a>
                <a
                  href={project.demoVercel}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
