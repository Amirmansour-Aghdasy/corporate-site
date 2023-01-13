import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import { NavbarItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex justify-between items-center rounded-2xl bg-slate-200 px-3">
      <ul className="h-full flex items-center gap-4 list-none">
        {NavbarItems.map((item, index) => (
          <li key={index} className="flex h-full">
            <Link
              to={item.path}
              className="h-full flex items-center gap-1 text-sm relative text-slate-600 before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0 hover:before:h-1 before:rounded-t-sm before:transition-all duration-300 ease-in-out before:bg-slate-500"
            >
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="h-full flex items-center gap-7">
        <div className="w-96 h-4/6 flex items-center relative rounded-2xl overflow-hidden bg-slate-50">
          <input
            className="w-full h-full outline-none bg-transparent p-3 placeholder:text-xs placeholder:text-slate-500 text-slate-500 text-xs "
            placeholder="جستجو بین خدمات، مقالات و محصولات"
            type="text"
            name=""
            id=""
          />
          <span className="h-5/6 flex items-center absolute left-1.5 rounded-xl bg-slate-200 text-slate-500 px-2 text-xl cursor-pointer">
            <BiSearchAlt />
          </span>
        </div>
        <div className="h-4/6 flex rounded-2xl text-sm overflow-hidden bg-green-300">
          <button className="active:outline-none">
            <Link className="px-5" to="/auth?login">
              ورود
            </Link>
          </button>
          <button className="active:outline-none rounded-r-2xl bg-green-500">
            <Link className="px-4" to="/auth?register">
              عضویت
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
