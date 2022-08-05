import { BiCheck } from "react-icons/bi";

import "./services.css";

const services = [
  {
    id: "web",
    area: "Web Development",
    offer: [
      "Mussum Ipsum",
      "cacilds vidis litro abertis.",
      "Mauris nec dolor in eros commodo tempor.",
    ],
  },
];

export function Services() {
  return (
    <section id="services">
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
    </section>
  );
}
