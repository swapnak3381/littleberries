export default function ContactSection() {
  return (
    <section id="contact" className="py-14 px-4 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h2>
      <p className="text-center text-gray-700 mb-6">Ready to join the Little Berries family? Reach out to us for admissions or any queries!</p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300" />
        <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300" rows={4}></textarea>
        <button type="submit" className="px-8 py-3 rounded-full bg-yellow-400 text-purple-900 font-bold shadow hover:bg-yellow-300 transition">Send Message</button>
      </form>
    </section>
  );
}
