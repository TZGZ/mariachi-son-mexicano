import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import Particles from "../components/Particles";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-yellow-900/20
          via-transparent
          to-red-900/20
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          z-10
          text-center
          px-4
          sm:px-6
          max-w-5xl
        "
      >
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-8xl
            font-black
            text-yellow-400
            mb-6
            leading-tight
          "
        >
          Mariachi El Son Mexicano
        </h1>

        <p
          className="
            text-base
            sm:text-lg
            md:text-2xl
            text-gray-200
            mb-10
          "
        >
          Serenatas, bodas, cumpleaños y eventos inolvidables en Guadalajara.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/523324343414"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-yellow-400
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              w-full
              md:w-auto
            "
          >
            Cotizar por WhatsApp
          </a>

          <a
            href="#servicios"
            className="
              border
              border-yellow-400
              px-8
              py-4
              rounded-full
              w-full
              md:w-auto
            "
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>

      <Particles />
    </section>
  );
}