import {
  ShoppingBagIcon,
  SparklesIcon,
  HeartIcon,
  SunIcon,
  DevicePhoneMobileIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";

export const products = [
  {
    name: "Bolsos",
    description: "Playeros, materos, etc.",
    href: "#",
    icon: ShoppingBagIcon,
  },
  {
    name: "Mochilas",
    description: "Para la escuela, el trabajo, etc.",
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Accesorios para el día a día",
    description: "Portalentes, portaauriculares, etc.",
    href: "#",
    icon: HeartIcon,
  },
  {
    name: "Verano",
    description: "Lonas, bolsillos para reposeras, etc.",
    href: "#",
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
