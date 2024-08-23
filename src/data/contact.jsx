import contactHero from "../assets/images/contact/contact.png";
import image1 from "../assets/images/blogs/phone-min.jpg";

const phoneNumber = "+254741843358";

const hero = {
  image: image1,
  heading: "We'd love to hear from you!",
  link: `https://wa.me/${phoneNumber}`,
  content:
    "Have questions or want to learn more about Zidallie? We'd love to hear from you! You can reach us through email, visit our office, call us, or connect with us on Whatsapp, Instagram, LinkedIn, or Facebook.",
};

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/zidallie",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/zidallie/",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@zidallie",
  },
  {
    name: "whatsapp",
    link: `https://wa.me/${phoneNumber}`,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/zidallie/",
  },
];

export { hero, socials };
