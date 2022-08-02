import { DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import {} from "react-icons/";

const skillsLanguages = [
  { icon: <DiHtml5 />, lang: "HTML", level: "Experienced", desc: "" },
  { icon: <DiCss3 />, lang: "CSS", level: "Intermediate", desc: "" },
  { icon: <DiJsBadge />, lang: "JavaScript", level: "Intermediate", desc: "" },
  { icon: <SiTypescript />, lang: "TypeScript", level: "Beginner", desc: "" },
  { icon: <SiReact />, lang: "React", level: "Beginner", desc: "" },
  { icon: <SiTailwindcss />, lang: "Tailwind", level: "Beginner", desc: "" },
];

export function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experince__content">
            {skillsLanguages &&
              skillsLanguages.map((skill) => (
                <article key={skill.lang} className="experience__details">
                  {skill.icon}
                  <h4>{skill.lang}</h4>
                  <small className="text-light">{skill.level}</small>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
