import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { products, callsToAction } from "../consts/products";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";


const MobileNavbarPopover = () => {
  return (
    <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-darkgreen">
                      Creaciones
                      <ChevronDownIcon
                        className={cn(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
  )
}

export default MobileNavbarPopover