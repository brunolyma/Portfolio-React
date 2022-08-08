import { DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import "./experience.css";
import { useState } from "react";
import { ScrollReveal } from "../../containers/ScrollReveal";

interface Description {
  lang: string;
  desc: string;
}

const skillsLanguages = [
  {
    id: "html",
    icon: <DiHtml5 color="#F25320" />,
    lang: "HTML",
    level: "Experienced",
    desc: " (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
  },
  {
    id: "css",
    icon: <DiCss3 color="#27A0D4" />,
    lang: "CSS",
    level: "Intermediate",
    desc: ` (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML).da`,
  },
  {
    id: "js",
    icon: <DiJsBadge color="#EAD41C" />,
    lang: "JavaScript",
    level: "Intermediate",
    desc: " (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web,ta",
  },
  {
    id: "ts",
    icon: <SiTypescript color="#0074C2" />,
    lang: "TypeScript",
    level: "Beginner",
    desc: " é uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente.",
  },
  {
    id: "react",
    icon: <SiReact color="#55CFF0" />,
    lang: "React",
    level: "Beginner",
    desc: " faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.",
  },
  {
    id: "tailwind",
    icon: <SiTailwindcss color="#419FAA" />,
    lang: "Tailwind",
    level: "Beginner",
    desc: " é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.",
  },
];

// console.log(skillsLanguages.indexOf())

export function Experience() {
  const [details, setDetails] = useState<Description>({
    lang: skillsLanguages[4].lang,
    desc: skillsLanguages[4].desc,
  });

  const handleIndex = (name: string) => {
    const indexOfTech = skillsLanguages.findIndex((item) => item.id === name);
    const detailsTech = skillsLanguages[indexOfTech];
    return setDetails(detailsTech);
  };

  return (
    <ScrollReveal id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h4>FrontEnd Development</h4>
          <div className="experience__content">
            {skillsLanguages &&
              skillsLanguages.map((skill) => (
                <article
                  key={skill.lang}
                  className="experience__details"
                  onMouseOver={() => handleIndex(skill.id)}
                >
                  <div>
                    {skill.icon}
                    <h6> {skill.lang}</h6>
                  </div>
                  <small className="text-light">{skill.level}</small>
                </article>
              ))}
          </div>
        </div>
      </div>
      <div className="container experience__container mobile">
        <div className="experience__description ">
          <p>
            <span>{details.lang}</span>
            {details.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
