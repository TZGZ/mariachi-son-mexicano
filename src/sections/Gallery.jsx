import { useRef } from "react";

const videos = [
  "/video/Video1.mp4",
  "/video/Video2.mp4",
  "/video/Video3.mp4",
  "/video/Video4.mp4",

];

export default function Gallery() {
  const videoRefs = useRef([]);

  const handleVideoClick = (clickedIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === clickedIndex) {
        video.muted = !video.muted;
      } else {
        video.muted = true;
      }
    });
  };

  return (
    <section
      id="galeria"
      className="py-28 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-yellow-400 mb-16">
          Galería de Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {videos.map((video, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-yellow-500/20
                group
              "
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => handleVideoClick(index)}
                className="
                  w-full
                  h-[350px]
                  object-cover
                  cursor-pointer
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  bg-black/70
                  text-white
                  px-3
                  py-2
                  rounded-full
                  text-sm
                  pointer-events-none
                "
              >
                Click para 🔊/🔇
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}