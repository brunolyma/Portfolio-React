import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/brunolimajs" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/brunolyma" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com/brunolimaph/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}
