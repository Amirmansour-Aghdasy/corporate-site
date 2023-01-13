import { GrMoreVertical } from "react-icons/gr";

import { Call_Center } from "../../assets";

import { SocialItems } from "../../constants";

const ContactUs = () => {
  return (
    <section id="contact-us" className="flex flex-col gap-5">
      <div
        id="contact-us-header"
        className="w-full flex justify-between items-center"
      >
        <div className="flex items-center text-slate-500">
          <GrMoreVertical className="text-2xl" />
          <h2 className="text-lg font-extrabold">راه های ارتباطی</h2>
        </div>
        <a
          className="text-xs text-white hover:text-slate-900 bg-yellow-500 rounded-2xl px-3 py-2.5 transition-colors duration-300 ease-in-out"
          href="tel:09375656283"
        >
          تماس بگیرید
        </a>
      </div>
      <div className="flex items-center gap-3" id="contact-us-container">
        <div className="w-1/2 flex flex-col items-center gap-7">
          <div
            className="w-7/12 flex items-center justify-between gap-7"
            id="social-icons"
          >
            {SocialItems.map((item, index) => (
              <a
                href={item.link}
                className="rounded-2xl p-3 bg-slate-200 text-slate-500 text-3xl hover:text-yellow-500 shadow shadow-slate-300 hover:shadow-md transition-all duration-300 ease-in-out"
                title=""
                key={index}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div
            className="w-7/12 flex flex-col gap-6 text-justify"
            id="description"
          >
            <h2 className="text-lg text-slate-500">
              کیفیت امری تبلیغاتی نیست تلاش میکنیم در عمل آن را اثبات کنیم
            </h2>
            <p className="text-base text-slate-400">
              لورمکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در شصت و سه از، و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
              درصد گذشته حال و آیند دنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </p>

            <button className="relative px-4 py-2.5 ml-auto text-base bg-yellow-500 hover:bg-yellow-300 rounded-2xl transition-colors duration-300 ease-in-out before:content-[''] before:w-full before:h-full before:absolute before:rounded-2xl before:bg-yellow-200 before:-right-2 hover:before:right-0 before:-top-2 hover:before:top-0 before:transition-all before:duration-300 before:ease-in-out before:-z-10">
              <a href="tel:09375656283"> دریافت مشاوره</a>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-9/12 mx-auto"
            src={Call_Center}
            alt="تماس برای پشتیبانی | مشاوره رایگان"
            title="تماس برای پشتیبانی | مشاوره رایگان"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
