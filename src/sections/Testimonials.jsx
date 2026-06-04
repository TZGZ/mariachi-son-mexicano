import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    text: "Excelente presentación, hicieron de nuestra boda algo inolvidable."
  },
  {
    name: "José Ramírez",
    text: "Muy puntuales y profesionales. Recomendados al 100%."
  },
  {
    name: "Laura Hernández",
    text: "La serenata fue perfecta, todos quedaron emocionados."
  }
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-yellow-400 mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <p className="text-zinc-300 mb-6">
                "{item.text}"
              </p>

              <h4 className="font-bold">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
