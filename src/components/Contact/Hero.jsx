import { Link } from "react-router-dom";

function Hero(props) {
  const { image, heading, content, link } = props.hero;
  // const handleEmail = () => {
  //   window.location.href = "mailto:info@zidallie.co.ke";
  // };

  return (
    <section className="mt-12 max-w-7xl mx-auto px-4 bg-white h-auto  lg:h-fit mb-20">
      <div className="  px-1 sm:px-2  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left w-full lg:w-1/2 mx-auto py-8 lg:py-0 lg:pt-5">
          <h1 className="text-3xl tracking-tight font-extrabold  sm:text-4xl">
            <span className="block xl:inline">{heading}</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0 leading-7 lg:leading-10">
            {content}
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-4 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-1 flex items-center gap-4">
              <div className="mt-1 flex items-center gap-4">
                <Link
                  to={link}
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-primary bg-primary text-base font-medium rounded-md text-gray-800 hover:bg-secondary ">
                  {" "}
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
          {/* End of Button Section */}
        </div>
        {/*   Image Section     */}
        <div
          className={`lg:inset-y-0 lg:right-0 w-full lg:w-1/2 mx-auto h-56 sm:h-72 lg:h-[300px]`}>
          <img
            className={`w-full object-cover h-full rounded-full`}
            src={image}
            alt=""
          />
        </div>
        {/*   End of Image Section     */}
      </div>
    </section>
  );
}

export default Hero;
