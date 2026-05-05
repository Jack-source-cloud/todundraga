export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center bg-gray-100">
      <div className="container-custom">
        <h1 className="text-5xl font-bold max-w-2xl leading-tight">
          Building Mongolia's Future
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Professional construction and infrastructure development company.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-4 rounded-md">
          View Projects
        </button>
      </div>
    </section>
  )
}