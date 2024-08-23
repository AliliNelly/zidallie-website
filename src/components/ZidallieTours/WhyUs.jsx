import React from "react";
import { why_us } from "../../data/tours";

function WhyUs() {
  return (
    <div className="text-center max-w-7xl mt-10 lg:mt-32 mb-2">
      <h3 className="font-bold text-3xl  sm:text-4xl text-center">
        Why Travel With Us
      </h3>
      <div className="flex flex-wrap md:items-center text-center">
        <div className="w-full md:w-1/2 px-4  text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-center">
            Why Choose Us
          </h3>
          <ul className="list-disc ml-8 mt-5">
            {why_us.list.map((item) => (
              <li className="my-2" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src={why_us.image} alt="gem" className="inline-block rounded " />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
