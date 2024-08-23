import { achievements } from "../../data/home";
function Achievements() {
  return (
    <section className="flex flex-col md:mt-28 mt-12 mb-12 md:mb-20 ">
      <p className="font-semibold text-2xl md:text-3xl text-center">
        Our Outstanding Achievements
      </p>
      <div className="mt-10 flex flex-wrap gap-2 lg:gap-6 items-center justify-evenly w-full mx-auto max-w-7xl px-5">
        {achievements.map((item) => (
          <div
            key={item.text}
            className="flex flex-col justify-center items-center bg-secondary px-4 h-[126px] w-[220px] md:h-[140px] rounded-lg justify-self-center">
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9  ml-2">
                {item.stats}
              </p>
            </div>
            <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
