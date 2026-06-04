export default function Particles() {

  const particles = Array.from(
    { length: 20 },
    (_, i) => i
  );

  return (
    <div className="absolute inset-0 overflow-hidden">

      {particles.map((item) => (
        <span
          key={item}
          className="
          absolute
          w-2
          h-2
          rounded-full
          bg-yellow-400/30
          animate-pulse
          "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

    </div>
  );
}