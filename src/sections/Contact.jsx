import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("name");
    const date = formData.get("date");
    const time = formData.get("time");
    const message = formData.get("message");

    try {
      await emailjs.sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        form.current,
        "PUBLIC_KEY"
      );
    } catch (error) {
      console.error(error);
    }

    const whatsappMessage = `
Hola Mariachi El Son Mexicano.

Mi nombre es: ${name}

Fecha de Evento: ${date}

Horario de Evento: ${time}

Información del evento:
${message}
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/523324343414?text=${encodedMessage}`,
      "_blank"
    );

    form.current.reset();
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          text-center
          font-bold
          text-yellow-400
          mb-14
          "
        >
          Solicita una Cotización
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Atención inmediata
            </h3>

            <p className="text-zinc-400 mb-8">
              Serenatas, bodas, cumpleaños,
              pedidas de mano, aniversarios y eventos especiales.
            </p>

            <div className="space-y-4">
              <p className="flex gap-3">
                <Phone />
                33 2434 3414
              </p>

              <p className="flex gap-3">
                <MapPin />
                Guadalajara, Jalisco
              </p>

              <a
                href="https://wa.me/523324343414"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                mt-4
                bg-green-600
                px-5
                py-3
                rounded-full
                font-bold
                "
              >
                <MessageCircle size={20} />
                WhatsApp Directo
              </a>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass p-6 sm:p-10 rounded-3xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="
              w-full
              mb-4
              p-4
              rounded-xl
              bg-zinc-900
              "
            />

            <input
              type="date"
              name="date"
              placeholder="Fecha del Evento"
              required
              className="
              w-full
              mb-4
              p-4
              rounded-xl
              bg-zinc-900
              "
            />

            <input
              type="time"
              name="time"
              placeholder="Horario del Evento"
              required
              className="
              w-full
              mb-4
              p-4
              rounded-xl
              bg-zinc-900
              "
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Describe tu evento"
              required
              className="
              w-full
              mb-6
              p-4
              rounded-xl
              bg-zinc-900
              "
            />

            <button
              type="submit"
              className="
              w-full
              bg-yellow-400
              text-black
              py-4
              rounded-full
              font-bold
              hover:scale-105
              transition
              "
            >
              Enviar y Abrir WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}