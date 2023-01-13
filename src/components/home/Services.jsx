import { Link } from "react-router-dom";

import { GrMoreVertical } from "react-icons/gr";
import { BsChevronLeft } from "react-icons/bs";

import Service from "./Service";
import { ServicesItems } from "../../constants";

const Services = () => {
  return (
    <section className="flex flex-col gap-5" id="services">
      <div
        id="services-header"
        className="w-full flex justify-between items-center"
      >
        <div className="flex items-center text-slate-500">
          <GrMoreVertical className="text-2xl" />
          <h2 className="text-lg font-extrabold">خدمات ما</h2>
        </div>
        <a
          className="flex items-center gap-0.5 text-xs text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-2xl p-2.5 transition-colors duration-300 ease-in-out"
          href="tel:09375656283"
        >
          <span>دریافت مشاوره رایگان</span>
          <BsChevronLeft className="text-sm" />
        </a>
      </div>
      <div id="services-container" className="grid grid-cols-6 gap-3.5">
        {ServicesItems.map((item, index) => (
          <Service key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
