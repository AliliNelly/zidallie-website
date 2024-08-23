import { Link } from "react-router-dom";

function Hero(props) {
  const { image, heading, content, list } = props.hero;

  return (
    <section className="my-6 lg:my-24 max-w-7xl mx-auto px-4 bg-white">
      <div className="px-1 sm:px-2 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        {/* Text Content Section */}
        <div className="sm:text-center lg:text-left w-full lg:w-1/2 mx-auto py-8 lg:py-0 lg:pt-5">
          <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
            <span className="block xl:inline">{heading}</span>
          </h1>
          <p className="mt-3 leading-7 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0">
            {content}
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {list.map((item) => (
              <div className="mt-3 sm:mt-0 sm:ml-3" key={item.text}>
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-primary bg-primary text-base font-medium rounded-md text-gray-800 hover:bg-secondary ">
                  {item.text.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
          {/* End of Button Section */}
        </div>
        {/* End of Text Content Section */}

        {/* Image Section */}
        <div className="w-full lg:w-1/2 max-h-[380px] ">
          <img
            className="w-full object-cover max-h-[380px] rounded-sm "
            src={image}
            alt=""
          />
        </div>
        {/* End of Image Section */}
      </div>
    </section>
  );
}

export default Hero;
