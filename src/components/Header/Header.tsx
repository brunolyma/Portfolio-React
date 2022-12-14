import { CTA } from "./CTA";
import Me from "../../assets/me-2.webp";
import { Socials } from "./Socials";

import "./header.css";

export function Header() {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bruno Lima</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <div className="header__socials">
          <Socials />
        </div>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
