import { Link } from "react-router";

const links = [
  { name: "home", path: "/#home", number: "00" },
  { name: "expertise", path: "/#expertise", number: "01" },
  { name: "work", path: "/#work", number: "02" },
  { name: "experience", path: "/#experience", number: "03" },
  { name: "references", path: "/#references", number: "04" },
  { name: "contact", path: "/#contact", number: "05" },
  { name: "games", path: "/games", number: "06" },
];

export const Navbar = () => (
  <div className="navbar bg-base-100 fixed z-10">
    <div className="navbar-start">
      <Link className="btn btn-ghost text-xl" to="/#home">
        Jon Jackson
      </Link>
    </div>
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
            >
              <span className="text-xs font-mono mr-2">{link.number}</span>
              // {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="navbar-end"></div>
  </div>
);
