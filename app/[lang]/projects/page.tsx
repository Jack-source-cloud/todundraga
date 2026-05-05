export default function ProjectsPage() {
  return (
    <main className="container-custom py-20">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Mining Facility</h2>
          <p className="text-gray-600">
            Industrial construction and engineering project.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Residential Complex</h2>
          <p className="text-gray-600">
            Urban development and residential buildings.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Road Infrastructure</h2>
          <p className="text-gray-600">
            National transportation infrastructure.
          </p>
        </div>
      </div>
    </main>
  )
}