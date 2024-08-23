import { services } from "../../data/home";

function Services() {
  return (
    <div className="text-center max-w-7xl my-6">
      <div className="flex flex-wrap items-center mt-5 text-center">
        <div className="w-full md:w-1/2 px-4 ">
          <img
            src={services[0].image}
            alt="gem"
            className="rounded object-scale-down  max-h-[300px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h2 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            {services[0].heading}
          </h2>
          <p className="text-base mt-6">{services[0].content}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-5 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={services[1].image}
            alt="project members"
            className="rounded object-scale-down  max-h-[300px] "
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h2 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            {services[1].heading}
          </h2>
          <p className="text-base mt-6">{services[1].content}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-5  text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={services[2].image}
            alt="editor"
            className="rounded object-scale-down  max-h-[300px]"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            {services[2].heading}
          </h3>
          <p className="text-base mt-6">{services[2].content}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
