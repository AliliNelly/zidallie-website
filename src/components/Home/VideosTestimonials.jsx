import { videos } from "../../data/home";
import ReactPlayer from "react-player";

function VideosTestimonials() {
  return (
    <section className="my-20 mx-2 -z-50 ">
      <h1 className="my-16 tracking-tight  font-semibold text-2xl md:text-3xl text-center">
        About Our Company
      </h1>

      <div className="flex items-center gap-12 lg:gap-6 justify-evenly flex-wrap ">
        {videos.map((item) => (
          <div className="rounded-lg shadow-lg bg-white max-w-lg">
            <ReactPlayer
              url={item.video}
              className="react-player"
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideosTestimonials;
