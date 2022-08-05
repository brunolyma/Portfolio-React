import { FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

import { ContactForm } from "./ContactForm";

import "./contact.css";

const personalContact = [
  {
    id: "email",
    title: "Email",
    via: "brunoadl88@gmail.com",
    link: "mailto:brunoadl88@gmail.com",
    icon: <FiMail />,
  },
  {
    id: "zap",
    title: "WhatsApp",
    via: "+55 11 95911-9518",
    link: "https://wa.me/+5511959119518",
    icon: <SiWhatsapp />,
  },
];

export function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {personalContact &&
            personalContact.map((contact) => (
              <article key={contact.id} className="contact__option">
                {contact.icon}
                <h5>{contact.title}</h5>
                <h6 className="text-light">{contact.via}</h6>
                <a href={contact.link} target="_blank">
                  Send a message
                </a>
              </article>
            ))}
        </div>

       <ContactForm />
      </div>
    </section>
  );
}
