import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router";

export const Navbar = () => (
  <div className="navbar bg-base-100 fixed z-10">
    <div className="navbar-start">
      <RouterLink className="btn btn-ghost text-xl" to="/">
        Jon Jackson
      </RouterLink>
    </div>
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">00</span>// home
            </RouterLink>
          </Link>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">01</span>// expertise
            </RouterLink>
          </Link>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">02</span>// work
            </RouterLink>
          </Link>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">03</span>// experience
            </RouterLink>
          </Link>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">04</span>// contact
            </RouterLink>
          </Link>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <RouterLink to="/">
              <span className="text-xs font-mono mr-2">05</span>// play a game!
            </RouterLink>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="navbar-end"></div>
  </div>
);
