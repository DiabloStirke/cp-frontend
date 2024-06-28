import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Link as NextLink,
} from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navigationItems = [
    {
      title: "Test",
      path: "/test",
    },
    {
      title: "Customers",
      path: "/customers",
    },
    {
      title: "Integrations",
      path: "/integrations",
    },
  ];

  return (
    <NextNavbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link to="/">
            <img className="w-[50px] h-[50px]" src="/ds.webp" alt="logo" />
          </Link>
          <p className="hidden sm:block font-bold text-inherit">
            Diablo Strike Control Panel
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextLink color="foreground" href="/">
            Home
          </NextLink>
        </NavbarItem>
        {navigationItems.map((item, index) => (
          <NavbarItem key={index}>
            <NavLink
              to={item.path}
              className={({ isActive, isPending, isTransitioning }) => {
                let className = "hover:opacity-80 font-bold transition-opacity";
                className += isActive
                  ? " text-blue-500"
                  : isPending || isTransitioning
                    ? " text-gray-500"
                    : "";
                return className;
              }}
            >
              {item.title}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NextNavbar>
  );
}
