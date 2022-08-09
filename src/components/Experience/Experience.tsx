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
    desc: " semantic practices to structure the code with explicit tags like header, section, footer, h1-h6, main, aside, form, caption..., also practices for better indexing in search engines (SEO) like meta:author, meta: description, meta:robots/nofollow/index, meta:property...",
  },
  {
    id: "css",
    icon: <DiCss3 color="#27A0D4" />,
    lang: "CSS",
    level: "Intermediate",
    desc: " Mobile-first adept, flexbox, grid layout, specificity, At-rules (@media, @key-frames, @import, @font-face..), good understanding and use of devTools",
  },
  {
    id: "js",
    icon: <DiJsBadge color="#EAD41C" />,
    lang: "JS/ES6+",
    level: "Intermediate",
    desc: " primitive types, data structure, conditionals, repetitions, arrow/anonymous function, high-order-function, classes(constructor, super, methods, inheritance, get/set), exceptions, throw, try, catch, finally. Array/object(splice, unshift, pop, spread..., map, forEach, includes, filter, find), DOM manipulation, events. Template String, destructuring, JSON, NPM/Yarn, modularization, promises, async/await, fetch/axios...",
  },
  {
    id: "ts",
    icon: <SiTypescript color="#0074C2" />,
    lang: "TypeScript",
    level: "Beginner",
    desc: "",
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
            <span>{details.lang}:</span>
            {details.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
