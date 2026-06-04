import FadeIn from "../components/FadeIn";
import {
  Music,
  Heart,
  PartyPopper,
  Building2,
  Gift,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "Serenatas",
    icon: Music
  },
  {
    title: "Bodas",
    icon: Heart
  },
  {
    title: "Cumpleaños",
    icon: Gift
  },
  {
    title: "XV Años",
    icon: Sparkles
  },
  {
    title: "Empresariales",
    icon: Building2
  },
  {
    title: "Cualquier tipo de evento",
    icon: PartyPopper
  }
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-28 bg-black"
    >
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-yellow-400 mb-16">
          Nuestros Servicios
        </h2>

        <FadeIn>
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <FadeIn>
              <div
                key={service.title}
                className="
                glass
                gold-shadow
                rounded-3xl
                p-10
                hover:scale-105
                hover:border-yellow-400
                transition-all
                duration-500
                "
              >
                <Icon
                  size={50}
                  className="text-yellow-400 mb-6"
                />

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-zinc-400">
                  Servicio profesional con repertorio amplio y presencia elegante.
                </p>
              </div>
              </FadeIn>
            );
          })}

        </div>
        </FadeIn>
      </div>
      </FadeIn>
    </section>
  );
}