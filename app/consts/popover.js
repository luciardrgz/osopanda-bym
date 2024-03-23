import {
  ShoppingBagIcon,
  SparklesIcon,
  HeartIcon,
  SunIcon,
  DevicePhoneMobileIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";

export const menuProducts = [
  {
    name: "Bolsos",
    description: "Playeros, materos, etc.",
    href: "/categories/bolsos",
    icon: ShoppingBagIcon,
  },
  {
    name: "Mochilas",
    description: "Para la escuela, el trabajo, etc.",
    href: "/categories/mochilas",
    icon: SparklesIcon,
  },
  {
    name: "Accesorios para el día a día",
    description: "Portalentes, portaauriculares, etc.",
    href: "/categories/accesorios",
    icon: HeartIcon,
  },
  {
    name: "Verano",
    description: "Lonas, bolsillos para reposeras, etc..",
    href: "/categories/accesorios",
    icon: SunIcon,
  },
];

export const callsToAction = [
  { name: "Ver todo", href: "/products", icon: ListBulletIcon },
  {
    name: "Ver en Instagram",
    href: "https://www.instagram.com/osopanda.bym/",
    icon: DevicePhoneMobileIcon,
  },
];
