import { Socials } from "../Header/Socials"
import "./footer.css"

const shortcut = [
  {id: "#", name: "Home"},
  {id: "#about", name: "About"},
  {id: "#experience", name: "Experience"},
  {id: "#services", name: "Services"},
  {id: "#portfolio", name: "Portfolio"},
  {id: "#testimonials", name: "Testimonials"},
  {id: "#contact", name: "Contact"},
]
export function Footer() {
  return (
    <footer>
      <a href="#">Bruno Lima</a>

      <ul className="permalinks">
        {shortcut && shortcut.map((link) => (
          <li key={link.id}><a href={link.id}>{link.name}</a></li>
        ))}
      </ul>
      
      <div className="footer__socials">
        <Socials />
      </div>
    </footer>
  )
}
