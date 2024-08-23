function WhyUs(props) {
  const { heading, content } = props.text;
  return (
    <div className="flex  justify-center items-center mb-16 lg:mb-4">
      <div className="text-center max-w-6xl mx-4">
        <h1 className="my-6 tracking-tight  font-semibold text-2xl md:text-3xl">
          {heading}
        </h1>
        <div>
          <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
