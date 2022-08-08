import { ScrollReveal } from "../../containers/ScrollReveal";

import Me from "../../assets/me-about.jpg";

import { FaAward } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { TiFolderOpen } from "react-icons/ti";

import {} from "./about.css";

const aboutCarrer = [
  {
    icon: <FaAward className="about__icon" />,
    title: "Experience",
    desc: "0-1 Year Working",
  },
  {
    icon: <IoPeople className="about__icon" />,
    title: "Clients",
    desc: "0 For Now",
  },
  {
    icon: <TiFolderOpen className="about__icon" />,
    title: "Projects",
    desc: "4+ Completed",
  },
];

export function About() {
  return (
    <ScrollReveal id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutCarrer &&
              aboutCarrer.map((info, index) => (
                <article key={index} className="about__card">
                  {info.icon}
                  <h5>{info.title}</h5>
                  <small>{info.desc}</small>
                </article>
              ))}
          </div>

          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
            ampola pa arma uma pindureta.
          </p>
          <a className="btn btn-primary" href="#contact">
            Let's talk
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
