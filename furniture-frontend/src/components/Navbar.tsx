import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

interface INavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  logoText?: string;
  links: INavItem[];
}

const Navbar = ({ logoText, links }: NavbarProps) => {
  return (
    <nav className="max-w-screen-2xl mx-auto flex items-center  shadow justify-between px-8 py-4 fixed top-0 right-0 left-0 z-10 bg-white">
      <h1 className="text-[#054C73] font-bold text-4xl md:text-4xl">{logoText}</h1>
      <ul className="md:flex gap-8 hidden text-2xl md:text-lg font-bold">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="md:hidden text-4xl">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <ul >
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
