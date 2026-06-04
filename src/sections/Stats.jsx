import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold text-yellow-400">
            <CountUp end={5} duration={10} />+
          </h2>
          <p>Años de experiencia</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-400">
            <CountUp end={500} duration={6} />+
          </h2>
          <p>Eventos realizados</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-400">
            <CountUp end={300} duration={6} />+
          </h2>
          <p>Clientes satisfechos</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-yellow-400">
            24/7
          </h2>
          <p>Atención inmediata</p>
        </div>

      </div>
    </section>
  );
}