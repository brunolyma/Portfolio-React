import { BiCheck } from "react-icons/bi";
import { ScrollReveal } from "../../containers/ScrollReveal";

import "./services.css";

const services = [
  {
    id: "web",
    area: "Web Development",
    offer: ["Mobile-first", "Responsive", "Clean Code", "UI/UX"],
  },
];

export function Services() {
  return (
    <ScrollReveal id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services &&
          services.map((service) => (
            <article key={service.id} className="service">
              <div className="service__head">
                <h3>{service.area}</h3>
              </div>

              <ul className="service__list">
                {service.offer.map((job, index) => (
                  <li key={index}>
                    <BiCheck size={25} className="service__list-icon" />{" "}
                    <p>{job}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </ScrollReveal>
  );
}
