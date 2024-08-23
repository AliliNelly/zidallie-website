import { services } from "../../data/parents";

function Services() {
  return (
    <div className="text-center max-w-7xl mb-6">
      <div className="flex flex-wrap md:items-center mt-1 text-center">
        <div className="w-full md:w-1/2 px-4">
          <img
            src={services[0].image}
            alt="gem"
            className="rounded object-scale-down  max-h-[480px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-4  text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-center">
            {services[0].heading}
          </h3>
          <p className="text-base mt-6 ">{services[0].content}</p>
          <ol className="list-decimal leading-7 ml-8 mt-5">
            {services[0].list.map((item) => (
              <li className="my-4" key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-1 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={services[1].image}
            alt="project members"
            className="rounded object-scale-down  max-h-[480px] "
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-center">
            {services[1].heading}
          </h3>
          <p className="text-base mt-6">{services[1].content}</p>
          <ol className="list-decimal leading-7 ml-8 mt-5">
            {services[1].list.map((item) => (
              <li className="my-4" key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Services;
