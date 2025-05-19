"use client";
import hero from "@/app/images/Hero.webp";
import { FaWhatsapp } from "react-icons/fa";
import Nav from "./Nav"; // Importamos el Navbar

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Navbar Transparente */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Nav />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-montserrat">
          <span className="text-[#FFA700]">Logística</span> eficiente y segura
        </h1>

        <p className="text-white text-xl md:text-2xl mb-4 font-roboto">
          Más de 8 años de experiencia en el sector
        </p>
        <p className="text-white text-lg mb-8 font-roboto">
          Tu carga, nuestro compromiso
        </p>

        {/* Botón de servicios */}
        <a
          href="/servicios"
          className="bg-[#FFA700] text-black font-bold py-3 px-8 rounded-full text-lg font-roboto shadow-lg transition-all duration-300 transform hover:bg-[#CC0000] hover:text-white hover:shadow-xl hover:scale-105"
        >
          Conoce mis servicios
        </a>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.link/biqv3m"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </section>
  );
};

export default Hero;
