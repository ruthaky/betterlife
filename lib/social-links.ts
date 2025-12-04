import { IconType } from "react-icons";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPhone, FaEnvelope} from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";

export type SocialLink = {
  name: string;
  href: string;
  Icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Phone",
    href: "tel:+19713844053",
    Icon: FaPhone,
  },
  {
    name: "Email",
    href: "mailto:betterlife_llc@outlook.com",
    Icon: FaEnvelope,
  },
 
 
];
