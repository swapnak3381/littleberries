export default function HeroSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#e3f0fa] via-yellow-100 to-blue-100 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Welcome to Little Berries Playschool</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">A joyful place where little minds learn, play, and grow with love and care 🌈</p>
      <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-purple-900 font-bold shadow hover:bg-yellow-300 transition">Enroll Now</a>
    </section>
  );
}
