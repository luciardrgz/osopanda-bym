import React from "react";
import { menuProducts, callsToAction } from "../consts/popover";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const NavbarPopover = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none text-[#62bb8e] hover:text-darkgreen transition duration-300">
        Creaciones
        <ChevronDownIcon
          className="h-5 w-5 flex-none"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute bg-mediumgreen -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
          <div>
            {menuProducts.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#8fffc7]"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-darkgreen">
                  <item.icon
                    className="h-6 w-6 text-darkgreen group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-extrabold text-darkgreen"
                  >
                    {item.name}
                    <span className="absolute inset-0 " />
                  </a>
                  <p className="-mt-1 text-gray-800 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-darkgreen hover:text-gray-100 hover:bg-darkgreen"
              >
                <item.icon
                  className="h-5 w-5 flex-none"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavbarPopover;
