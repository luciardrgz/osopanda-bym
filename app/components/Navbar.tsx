"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Popover, Transition } from "@headlessui/react";
import MobileNavbar from "./MobileNavbar";
import NavbarPopover from "./NavbarPopover";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#8fffc7]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">osoPanda</span>
            <img className="h-12 w-auto" src="logo.png" alt="" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[#62bb8e] hover:text-darkgreen transition duration-300"
          >
            Inicio
          </a>
          <NavbarPopover />
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#62bb8e] hover:text-darkgreen transition duration-300"
          >
            Preguntas frecuentes
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#62bb8e] hover:text-darkgreen transition duration-300"
          >
            Contacto
          </a>
        </Popover.Group>
      </nav>

      <MobileNavbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}

export default Header;
