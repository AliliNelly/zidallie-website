import missionImage from "../assets/images/about/mission.png";
import vissionImage from "../assets/images/about/visson.png";
import founderImage from "../assets/images/about/founder.jpeg";
import catheleen from "../assets/images/about/catheleen.jfif";
import erick from "../assets/images/about/Erick.jfif";

const hero = {
  heading: "About Our Company",
  content:
    "At Zidallie, we offer safe and reliable transportation solutions for students, providing peace of mind for both parents and schools. Our services cater to Primary School students, High School students, and Special Needs students, ensuring that every student’s transportation needs are met with care.",
};

const mission = {
  image: missionImage,
  heading: "Our Mission",
  content:
    "Our mission is to empower young minds by ensuring safe & reliable student transportation is accessible for all.",
};

const vission = {
  image: vissionImage,
  heading: "Our Vision",
  content: "We Aspire To Be The Safest Transportation Platform For Students.",
};

const founder = {
  image: founderImage,
  heading: "Meet The Founder",
  list: [
    "Nelly Alili’s dedication to revolutionizing student transportation stems from personal experiences within her family. Growing up alongside her neurodiverse older sister, Nelly witnessed the challenges her mother faced in securing her sister’s education due to unreliable school transportation. This lack of a dedicated system significantly limited her sister’s educational opportunities.",
    "Years later, encountering a similar struggle with her younger sibling, Nelly recognized the persistent issue: schools lacking transportation posed significant barriers to education, particularly when private options were unsafe or inconsistent. Motivated by these experiences, Nelly set out to address this long-standing problem.",
    "Driven by a desire to make a difference, she established a platform providing tailored transportation solutions for students. Her vision is clear: to empower children and teenagers by ensuring seamless access to education and opportunities through dependable transportation services.",
  ],
};

const team = [
  {
    image: founderImage,
    name: "Nelly Alili",
    title: "Founder & CEO at Zidallie",
  },
  {
    image: catheleen,
    name: "Cathleen Imelda",
    title: "Customer Care Executive ",
  },
  {
    image: erick,
    name: "Erick Musuki",
    title: "Tech specialist",
  },
];

export { hero, mission, vission, founder, team };
