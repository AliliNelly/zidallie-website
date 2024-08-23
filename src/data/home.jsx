import heroImage from "../assets/images/home/home-hero.jpg";
import safetyImage from "../assets/images/home/safe-image.png";
import techImage from "../assets/images/home/tech-image.png";
import customImage from "../assets/images/home/custom-image.png";
import testImageOne from "../assets/images/home/rose.jpg";
import testImageTwo from "../assets/images/home/noah.jpeg";
import testImageThree from "../assets/images/home/jayce.png";
import image1 from "../assets/images/blogs/3.jpg";

import founderCeo from "../assets/videos/founder-ceo.mp4";

const videos = [
  {
    video: founderCeo,
  },
];

const hero = {
  heading: "Safe and Reliable Student Transportation.",
  content:
    "At Zidallie, we offer safe and reliable transportation solutions for students, providing peace of mind for both parents and schools.Our services cater to Primary School students, High School students, and Special Needs students, ensuring that every student's transportation needs are met with care.",
  image: image1,
  list: [
    {
      text: "School Signup",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeh2xXD5KIM8t9bIaY6IyVHV5ZW3LT1NkGxnTGO8mh7q8XO1A/viewform",
    },
    {
      text: "Parents Signup",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfkRSgEHgsINzWOs-7-Ii4Tf_ZeCabRdxHAqP4joVh_eEi8pw/viewform",
    },
  ],
};

const achievements = [
  {
    stats: "100K+",
    text: "Rides Completed",
  },
  {
    stats: "25K+",
    text: "Students Served",
  },
  {
    stats: "15+",
    text: "Schools Served",
  },
];

const why_us = {
  heading: "WHY CHOOSE US",
  content:
    "Our sole mission is to empower young minds. We are doing this through student transportation because we’ve experienced firsthand how the lack of safe, reliable, and exclusive transportation poses a barrier to their education and access to opportunities.",
};

const services = [
  {
    image: safetyImage,
    heading: "Safety Priority",
    content:
      "At Zidallie, safety is more than just a priority; it’s our core value. We are committed to providing the safest transportation experience for students, which is why we continually invest in advanced safety technologies and stringent driver training programs.From the moment students board our vehicles to the time they arrive at their destination, we ensure every journey is safe, reliable, and worry-free.",
  },
  {
    image: techImage,
    heading: "Technology Integration",
    content:
      "At Zidallie, we seamlessly integrate technology to enhance the student transportation experience. Our innovative approach includes a user-friendly app for parents to track their child’s journey in real-time, ensuring transparency and peace of mind.Additionally, our advanced routing software optimizes routes for efficiency, reducing travel time and environmental impact.",
  },
  {
    image: customImage,
    heading: "Customized Solutions",
    content:
      "At Zidallie, we understand that every school and student has unique transportation needs. That’s why we offer customized solutions tailored to fit specific requirements.Whether it’s designing specialized routes for students with varying schedules or providing additional assistance for special needs students, we work closely with schools and parents to create transportation solutions that are safe, reliable, and convenient.What Schools and Parents Are Saying About ",
  },
];

const testimonials = [
  {
    image: testImageOne,
    heading: "It is very diverse and it includes everybody",
    content:
      "Zidallie has provided an excellent service for my school. Zidallie has taken care of my neurodiverse pupils and served them with dignity and honor. ",
    name: "Madam Rose Koros / Diamond Therapy Centre",
  },
  {
    image: testImageTwo,
    heading: "The best experience ever",
    content:
      "Thank you for your service, my son Noa really loves the driver assigned to his rides.I highly recommend these service to schools. ",
    name: "Mama Noa / Parent at Oshwal academy",
  },
  {
    image: testImageThree,
    heading: "Very Reliable Services",
    content:
      "Thank you for taking care of my daughter. Before Zidallie we were really struggling with transport to his dance classes. You have served us well. ",
    name: "Mama Jayce",
  },
];

const contact = {
  contact_text: "Contact Us",
  address: "Gamaliel Hse , Old Ruaka Rd, Ruaka, Nairobi Kenya",
  emails: "info@zidallie.co.ke / Zidallie@gmail.com",
  number: "0741843358",
};

const footer = {
  text: "©Copyright 2024 @Zidallie Technologies",
};

export {
  footer,
  contact,
  testimonials,
  videos,
  services,
  hero,
  why_us,
  achievements,
};
