import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-2xl font-bold text-yellow-400">
          Mariachi El Son Mexicano
        </h1>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#inicio" className="hover:text-yellow-400 transition">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-yellow-400 transition">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-yellow-400 transition">
            Galería
          </a>
          <a href="#contacto" className="hover:text-yellow-400 transition">
            Contacto
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden
          bg-black/95
          backdrop-blur-xl
          px-8
          py-6
          flex
          flex-col
          text-lg
          "
        >
          <a
            href="#inicio"
            onClick={closeMenu}
            className="py-4 border-b border-yellow-400/20"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={closeMenu}
            className="py-4 border-b border-yellow-400/20"
          >
            Servicios
          </a>

          <a
            href="#galeria"
            onClick={closeMenu}
            className="py-4 border-b border-yellow-400/20"
          >
            Galería
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className="py-4"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}