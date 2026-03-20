"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}