"use client";
import NavLink from "@/app/components/NavLink";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <NavLink
              href="/3d-models"
              className={pathname === "/3d-models" ? "is-active" : undefined}
            >
              3D Models
            </NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <NavLink
              href="/about"
              className={pathname === "/about" ? "is-active" : undefined}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
