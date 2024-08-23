import { blogs } from "../../data/blogs";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border w-[350px] h-[350px] rounded shadow-md hover:shadow-teal-400 flex flex-col justify-between leading-normal">
            <Link to={blog.link} target="_blank">
              <img
                src={blog.image}
                className="w-full mb-3 h-[350px] object-cover rounded"
                alt={blog.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
