export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-red-950 via-black to-yellow-950">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          Haz de tu evento un momento inolvidable
        </h2>

        <p className="text-xl text-zinc-300 mb-10">
          Reserva hoy mismo y recibe atención inmediata.
        </p>

        <a
          href="https://wa.me/523324343414"
          target="_blank"
          className="bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-lg"
        >
          Solicitar Cotización
        </a>

      </div>

    </section>
  );
}