import { GrMoreVertical } from "react-icons/gr";
import { BsChevronLeft } from "react-icons/bs";

import { Blog_Posts } from "../../constants";
import Post from "./Post";

const LastPosts = () => {
  return (
    <section className="flex flex-col gap-5" id="last-posts">
      <div
        id="last-posts-header"
        className="w-full flex justify-between items-center"
      >
        <div className="flex items-center text-slate-500">
          <GrMoreVertical className="text-2xl" />
          <h2 className="text-lg font-extrabold">مقالات آموزشی</h2>
        </div>
        <a
          className="flex items-center gap-0.5 text-xs text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-2xl p-2.5 transition-colors duration-300 ease-in-out"
          href="tel:09375656283"
        >
          <span>مشاهده همه مقالات</span>
          <BsChevronLeft className="text-sm" />
        </a>
      </div>
      <div id="last-posts-container" className="grid grid-cols-4 gap-3.5">
        {Blog_Posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default LastPosts;
