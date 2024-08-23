import { buses } from "../../data/tours";
function Buses() {
  return (
    <section className="max-w-7xl flex items-center justify-center flex-col mb-16 px-2">
      <h3 className="font-bold text-3xl  sm:text-4xl text-center pt-10 mb-2">
        Our Fleet
      </h3>
      <p className="pb-10">Some of the vehicles in our fleet...</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {buses.map((image, index) => (
          <section>
            <img
              key={index}
              alt={`image-bus-${index}`}
              className="h-auto max-w-full rounded-lg"
              src={image}
            />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Buses;
