import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import "./navbar.css";

const iconsBar = [
  { id: "#", icon: <AiOutlineHome /> },
  { id: "#about", icon: <AiOutlineUser /> },
  { id: "#experience", icon: <BiBook /> },
  { id: "#services", icon: <RiServiceLine /> },
  { id: "#contact", icon: <BiMessageSquareDetail /> },
];

export function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {iconsBar &&
        iconsBar.map((item, index) => (
          <a
            key={index}
            className={activeNav === item.id ? "active" : ""}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
          >
            {item.icon}
          </a>
        ))}
    </nav>
  );
}
