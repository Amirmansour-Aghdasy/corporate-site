import { Link } from "react-router-dom";

import { Blog_Posts, FooterAccessColumns } from "../constants";

const Footer = () => {
  return (
    <footer
      className="w-full p-3 flex items-start bg-slate-200 rounded-2xl"
      id="footer"
    >
      <div className="w-1/2 flex justify-between">
        {FooterAccessColumns.map((col, index) => (
          <div key={index} className="w-4/12 text-green-500">
            <h4 className="text-base">{col.title}</h4>
            <ul className="pr-2.5 mt-1.5">
              {col.links.map((item, num) => (
                <li key={num}>
                  <Link
                    to=""
                    className="block text-sm text-slate-500 hover:text-yellow-600 hover:mr-2.5 transition-all duration-300 ease-in-out py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-4/12 text-green-500">
          <h4 className="text-base">آخرین مقالات</h4>
          <ul className="flex flex-col gap-2 pr-2.5 mt-1.5">
            {Blog_Posts.slice(0, 3).map((item, index) => (
              <li
                className="group rounded-2xl p-1 bg-slate-50 hover:bg-slate-100 transition-colors duration-300 ease-in-out shadow-md shadow-slate-300"
                key={index}
              >
                <Link to="" className="flex items-center text-slate-500 py-0.5">
                  <div className="w-3/12 rounded-2xl overflow-hidden">
                    <img className="h-12" src={item.image} alt="" title="" />
                  </div>
                  <h5 className="text-xs mr-2 text-slate-500 group-hover:text-green-500 transition-colors duration-300 ease-in-out">
                    {item.title}
                  </h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-5">
        <div className="w-7/12 mx-auto text-right">
          <h4 className="text-sm text-slate-500">عضویت در خبرنامه</h4>
          <form
            className="w-full flex rounded-2xl overflow-hidden mt-3 shadow-md shadow-slate-300"
            action=""
            method="post"
          >
            <input
              placeholder="شماره موبایل"
              className="w-10/12 p-3 bg-slate-50 outline-none placeholder:text-sm placeholder:text-slate-500 text-slate-500"
              type="text"
              name=""
              id=""
            />
            <input
              className="w-2/12 px-5 py-3 bg-green-400 outline-none"
              type="submit"
              value="ثبت"
            />
          </form>
          <div className="w-full flex justify-between gap-7 mt-5">
            <div className="h-36 w-4/12 flex justify-center items-center rounded-2xl shadow-md shadow-slate-300 bg-slate-50">
              <span className="text-slate-500 text-sm">مجوز ها</span>
            </div>
            <div className="h-36 w-4/12 flex justify-center items-center rounded-2xl shadow-md shadow-slate-300 bg-slate-50">
              <span className="text-slate-500 text-sm">مجوز ها</span>
            </div>
            <div className="h-36 w-4/12 flex justify-center items-center rounded-2xl shadow-md shadow-slate-300 bg-slate-50">
              <span className="text-slate-500 text-sm">مجوز ها</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
