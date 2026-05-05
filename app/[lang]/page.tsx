import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="container-custom py-20">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>

        <p className="text-gray-600 leading-8 max-w-3xl">
          Tod Undraga is a modern Mongolian company focused on infrastructure,
          construction, and long-term development projects.
        </p>
      </section>

      <section className="container-custom py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Project One</h3>
            <p className="text-gray-600">
              Modern infrastructure development project.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Project Two</h3>
            <p className="text-gray-600">
              Industrial and commercial construction.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Project Three</h3>
            <p className="text-gray-600">
              Sustainable urban development.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}