import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Socials } from "../Header/Socials";
import "./footer.css";

const shortcut = [
  { id: "#about", name: "About" },
  { id: "#experience", name: "Experience" },
  { id: "#services", name: "Services" },
  { id: "#portfolio", name: "Portfolio" },
  { id: "#testimonials", name: "Testimonials" },
  { id: "#contact", name: "Contact" },
];
export function Footer() {
  return (
    <footer>
      <a className="footer__logo" href="#">
        BRUNOLIMA
      </a>

      <ul className="permalinks">
        {shortcut &&
          shortcut.map((link) => (
            <li key={link.id}>
              <a href={link.id}>{link.name}</a>
            </li>
          ))}
      </ul>

      <div className="footer__socials">
        <Socials />
      </div>

      <small className="footer__copy">
        &copy; LIMA dev. All rights reserved.
      </small>
    </footer>
  );
}
