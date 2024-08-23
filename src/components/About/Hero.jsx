import { hero } from "../../data/about";
function Hero() {
  const { heading, content } = hero;
  return (
    <div className="flex  justify-center items-center">
      <div className="max-w-6xl mx-5 md:mx-10">
        <h1 className="my-6 text-3xl font-bold tracking-tight  md:text-4xl text-left md:text-center">
          {heading}
        </h1>
        <div>
          <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 leading-8 text-left md:text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
