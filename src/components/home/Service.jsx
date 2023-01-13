import { Link } from "react-router-dom";

const Service = ({ item: { title, subTitle, iconPath, bodyText } }) => {
  return (
    <div
      className="rounded-b-2xl rounded-tl-2xl shadow-md shadow-slate-300 hover:shadow-slate-400 transition-shadow duration-300 ease-in-out bg-slate-100 border border-slate-200 relative before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-l before:w-8/12 before:hover:w-10/12 before:h-1 before:bg-yellow-500 after:content-[''] after:absolute after:top-0 after:-right-1 after:rounded-b after:w-1 after:h-4/6 after:hover:h-5/6 after:bg-yellow-500 before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out"
      id="service-card"
    >
      <Link className="block w-full h-full p-2.5" to="">
        <div className="flex flex-col items-center" id="service-card-head">
          <img className="w-5/12" src={iconPath} alt={title} title={title} />
          <h3 className="text-sm text-slate-500 mt-2">{title}</h3>
          <h4 className="text-xs text-slate-400 mt-2.5 text-center">
            {subTitle}
          </h4>
        </div>
        <hr className="mt-2" />
        <div className="w-full mt-2" id="service-card-body">
          <p className="text-xs text-justify text-slate-500">
            {bodyText.substr(0, 85)} ...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Service;
