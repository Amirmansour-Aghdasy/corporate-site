import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

const Post = ({ post: { image, title } }) => {
  return (
    <div
      id="post"
      className="group relative p-3 rounded-2xl overflow-hidden shadow-md shadow-slate-200 bg-slate-200 before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-1 before:bg-yellow-500"
    >
      <div className="w-full rounded-2xl overflow-hidden" id="card-header">
        <Link className="relative flex items-center justify-center" to="block">
          <img
            className="w-full h-44 contrast-25 group-hover:grayscale transition-all duration-300 ease-in-out"
            src={image}
            alt=""
            title=""
          />
          <div className="flex justify-center items-center absolute rounded-2xl w-0 h-0 border-0 group-hover:w-11/12 group-hover:h-5/6 group-hover:border-2 group-hover:border-yellow-500 transition-all duration-300 ease-in-out">
            <Link className="group relative opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto before:content-[''] before:absolute before:top-0 before:left-0 before:w-5/12 hover:before:w-full before:h-0.5 before:bg-yellow-600 after:content-[''] after:absolute after:top-0 after:left-0 after:w-0.5 after:h-3/6 hover:after:h-full after:bg-yellow-600 before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out">
              <i className="block w-full h-full py-2.5 px-3.5 text-xs text-white whitespace-nowrap ease-in-out before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-5/12 before:hover:w-full before:h-0.5 before:bg-yellow-600 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0.5 after:h-3/6 after:hover:h-full after:bg-yellow-600 before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out">
                مشاهده مقاله
              </i>
            </Link>
          </div>
        </Link>
      </div>
      <div className="w-full mt-3" id="card-body">
        <Link
          to=""
          className="text-sm text-slate-500 hover:text-yellow-600 transition-colors duration-300 ease-in-out flex items-center gap-2"
        >
          <FaBookReader />
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Post;
