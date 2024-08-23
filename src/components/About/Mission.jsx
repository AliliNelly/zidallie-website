import { mission, vission } from "../../data/about";

function Mission() {
  return (
    <div className="text-center max-w-7xl my-10">
      <div className="flex flex-wrap items-center mt-5 text-center justify-center gap-12">
        <div className=" px-4 h-64">
          <img
            src={mission.image}
            alt="gem"
            className="inline-block rounded h-full"
          />
        </div>
        <div className=" px-4 text-center md:text-left lg:pl-12 md:order-first">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-center">
            {mission.heading}
          </h3>
          <p className="text-base max-w-96 text-center">{mission.content}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center text-center justify-center gap-12">
        <div className=" px-4 h-64 ">
          <img
            src={vission.image}
            alt="project members"
            className="inline-block rounded h-full"
          />
        </div>
        <div className="px-4  text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-center ">
            {vission.heading}
          </h3>
          <p className="text-base mt-6 max-w-96 text-center">
            {vission.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
