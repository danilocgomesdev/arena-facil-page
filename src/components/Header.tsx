import Image from "next/image";
import Link from "next/link";
import Logo from "../app/assets/logo1.png";

export default function Header() {
  return (
    <header id="home">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-orange-700" href="#secao-alvo">
              <span className="sr-only">Home</span>
              <Image src={Logo} alt="Arena Fácil" className=" sm:w-56 w-40" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-orange-500 transition hover:text-orange-500/75"
                    href="#home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-orange-500 transition hover:text-orange-500/75" href="#">
                    Sobre nós
                  </Link>
                </li>

                <li>
                  <Link className="text-orange-500 transition hover:text-orange-500/75" href="#">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-orange-100 px-5 py-2.5 text-sm font-medium text-orange-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-orange-100 p-2 text-orange-600 transition hover:text-orange-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
