import { Link, NavLink } from "react-router";
import Logo from '../assets/Logo.png';
export default function Navbar() {
  const linkClass = ({ isActive }) =>`text-sm transition-colors ${isActive ? "text-orange-400" : "text-gray-300 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-40 bg-[#0b0e14]/90 backdrop-blur border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <img src={Logo} alt="" />
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink to="/" className={linkClass} end>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={linkClass}>Explore Movies</NavLink>
          </li>
        </ul>

        <Link
          to="/movies"
          className="rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 sm:px-5 transition-colors"
        >
          Movies
        </Link>
      </nav>
    </header>
  );
}