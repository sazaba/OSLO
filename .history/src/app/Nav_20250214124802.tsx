import Link from "next/link";
import { useState } from "react";
import logo from "@/app/images/logooslo.webp";
import Image from "next/image";

const Nav = () => {
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  return (
    <nav className="bg-transparent shadow-none font-roboto fixed w-full top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y enlaces principales */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={logo} alt="Logo" className="h-12 w-12" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 font-montserrat"
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 font-montserrat"
                >
                  Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 font-montserrat"
                >
                  Servicios
                </Link>
                <Link
                  href="/contacto"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 font-montserrat"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>

          {/* Botón para menú móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuAbierto ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 p-4 absolute w-full top-16 left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 font-montserrat"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 font-montserrat"
            >
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 font-montserrat"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 font-montserrat"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
