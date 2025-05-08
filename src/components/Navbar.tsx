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
            to="expertise"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">01</span>// expertise
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">02</span>// work
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">03</span>// experience
          </Link>
        </li>
        <li>
          <Link
            to="references"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">04</span>// references
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">05</span>// contact
          </Link>
        </li>
        <li>
          <RouterLink
            to="games"
            className="hover:cursor-pointer hover:text-teal-200 text-lg transform transition duration-500 hover:scale-125 hover:bg-teal-800 flex justify-center items-center"
          >
            <span className="text-xs font-mono mr-2">06</span>// play a game!
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div className="navbar-end"></div>
  </div>
);
