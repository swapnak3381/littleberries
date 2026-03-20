export default function GallerySection() {
  return (
    <section className="py-14 px-4 bg-[#e3f0fa]">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Gallery</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-40 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Image 1</div>
        <div className="w-40 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Image 2</div>
        <div className="w-40 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Image 3</div>
      </div>
      <div className="text-center mt-4">
        <a href="/gallery" className="text-yellow-600 font-semibold hover:underline">View Full Gallery</a>
      </div>
    </section>
  );
}
