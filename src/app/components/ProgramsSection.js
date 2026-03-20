export default function ProgramsSection() {
  return (
    <section className="py-14 px-4 bg-[#e3f0fa]">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">Playgroup</h3>
          <p className="text-gray-700">Fun-filled activities for toddlers to develop social and motor skills.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">Nursery</h3>
          <p className="text-gray-700">A balanced curriculum blending play, learning, and creativity.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">Kindergarten</h3>
          <p className="text-gray-700">Preparing children for school with foundational skills and confidence.</p>
        </div>
      </div>
    </section>
  );
}
