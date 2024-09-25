"use client";
import { useThemeStore } from "@/stores/themeStore";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../app/assets/logo-dark.png";
import LogoLight from "../app/assets/logo-light.png";

export const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link rel="noreferrer noopener" href="/" className="font-bold text-xl flex">
            <Image
              src={theme === "system" ? LogoDark : theme === "dark" ? LogoDark : LogoLight}
              alt="Arena Fácil"
              className="sm:w-56 w-40"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Home</h3>

          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Github
            </a>
          </div>

          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Sobre nós</h3>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              História
            </a>
          </div>

          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Informações
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contato</h3>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              E-mail
            </a>
          </div>

          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Whatsapp
            </a>
          </div>
        </div>
      </section>
      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Copyright{" "}
          <a
            rel="noreferrer noopener"
            href="https://www.arenafacil.com.br/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Arena Fácil
          </a>
        </h3>
      </section>
    </footer>
  );
};
