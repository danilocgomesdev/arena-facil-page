"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import { useThemeStore } from "@/stores/themeStore";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useTheme
import LogoLight from "../app/assets/logo.png"; // Logo for light mode
import LogoDark from "../app/assets/logo1.png"; // Logo for dark mode
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#sobre-nos",
    label: "Sobre nós",
  },
  {
    href: "#contato",
    label: "Contato",
  },
];

export const Navbar = () => {
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          {/* Logo (sempre à esquerda) */}
          <NavigationMenuItem className="font-bold flex">
            <Link rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              <Image
                src={theme === "system" ? LogoDark : theme === "dark" ? LogoDark : LogoLight}
                alt="Arena Fácil"
                className="sm:w-56 w-40"
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <Image
                    src={theme === "system" ? LogoDark : theme === "dark" ? LogoDark : LogoLight}
                    alt="Arena Fácil"
                    className="sm:w-56 w-40 justify-center"
                  />
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-4 w-full">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`${buttonVariants({ variant: "ghost" })} w-full text-center`}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className={`w-full border ${buttonVariants({
                      variant: "default",
                    })} text-center`}
                  >
                    Login
                  </Link>
                  <Link
                    rel="noreferrer noopener"
                    href="#"
                    className={`border ${buttonVariants({ variant: "ghost" })} w-full text-center`}
                  >
                    Registre
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 items-center ml-auto">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            <Link
              rel="noreferrer noopener"
              href="#"
              className={`border ${buttonVariants({ variant: "default" })} ml-4`}
            >
              Login
            </Link>
            <Link
              rel="noreferrer noopener"
              href="#"
              className={`border ${buttonVariants({ variant: "ghost" })}`}
            >
              Registre
            </Link>
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
