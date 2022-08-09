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
            Since I was little, I was curious to know how and why things work,
            from simple things to the most fascinating, and, in this, the use of
            technology attracted me. Decide to focus on programming, something
            that is in the daily life of the world and constantly evolving. Just
            like me, who seeks personal and professional improvement, now I hunt
            for bugs and look for best practices. <br /> Focused on JavaScript,
            initially on the frontend, but in pursuit of FullStack. I enjoy
            games and books, photography and cinema and I love music and
            traveling!🎸🏖️📽️📸📖🤓🚀
          </p>
          <a className="btn btn-primary" href="#contact">
            Let's talk
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
