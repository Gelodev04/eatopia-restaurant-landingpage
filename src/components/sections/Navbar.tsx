import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import CustomNavbarComponent from "../ui/CustomNavbar";
import { useNavbarScroll } from "../ui/CustomNavbar";
import { FacebookIcon } from "../svgicons/navbaricons";
import { InstagramIcon } from "../svgicons/navbaricons";
import { TiktokIcon } from "../svgicons/navbaricons";


interface NavbarProps {
  className?: string;
  shouldHideOnScroll?: boolean;
  isBlurred?: boolean; // Explicitly type isBlurred as boolean
}

export const BurgerIcon = () => {
  return (
    <svg
      className="w-[40px]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 6H20M4 12H14M4 18H9"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};





export default function CustomNavbar() {
  return (
    <CustomNavbarComponent>
      <h1 className=" text-3xl font-semibold tracking-widest">Eatopia</h1>

      <ul className="flex items-center gap-5">
        <li className="flex items-center gap-4">
          <InstagramIcon />
          <TiktokIcon />
          <FacebookIcon />
          
        </li>
        <li>
          <NavbarMenuToggle className=""></NavbarMenuToggle>
        </li>
      </ul>
    </CustomNavbarComponent>
  );
}
