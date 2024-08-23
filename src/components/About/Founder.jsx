import { founder } from "../../data/about";
function Founder() {
  return (
    <section className="my-20 shadow">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center py-5">
        Meet The Founder
      </h2>
      <div className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 md:pr-5">
            <img
              src={founder.image}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md "
            />
          </div>
          <div className="w-full mt-10 lg:mt-0  lg:w-1/2 md:pl-5">
            {founder.list.map((item, index) => (
              <p key={index} className="mb-2 text-gray-600 text-base leading-8">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
