import {
  Phone,
  MapPin,
  Music2,
  Facebook,
  Instagram
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      bg-gradient-to-b
      from-zinc-950
      to-black
      border-t
      border-yellow-500/20
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <Music2
              size={40}
              className="text-yellow-400 mb-4"
            />

            <h3 className="text-2xl font-bold mb-4">
              Mariachi El Son Mexicano
            </h3>

            <p className="text-zinc-400">
              Tradición, elegancia y pasión para cada evento.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">
              Contacto
            </h4>

            <p className="flex gap-2 mb-3">
              <Phone size={18} />
              33 2434 3414
            </p>

            <p className="flex gap-2">
              <MapPin size={18} />
              Guadalajara, Jalisco
            </p>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">
              Redes Sociales
            </h4>

            <div className="flex gap-4">
              <Facebook />
              <Instagram />
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 text-center text-zinc-500">
          © {new Date().getFullYear()} Mariachi El Son Mexicano
        </div>

      </div>
    </footer>
  );
}