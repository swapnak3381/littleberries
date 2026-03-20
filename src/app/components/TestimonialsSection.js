export default function TestimonialsSection() {
  return (
    <section className="py-14 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">What Parents Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote className="bg-white rounded-xl shadow p-6 text-gray-700 italic">“Little Berries is a second home for my child. The teachers are caring and the activities are wonderful!”<br /><span className="block mt-2 font-bold text-yellow-600">– Parent A</span></blockquote>
        <blockquote className="bg-white rounded-xl shadow p-6 text-gray-700 italic">“We love the safe and joyful environment. Our child has grown so much here!”<br /><span className="block mt-2 font-bold text-yellow-600">– Parent B</span></blockquote>
      </div>
    </section>
  );
}
