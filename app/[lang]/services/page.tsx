export default function ServicesPage() {
  return (
    <main className="container-custom py-20">
      <h1 className="text-5xl font-bold mb-12">Services</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Construction</h2>
          <p className="text-gray-600">
            Commercial and industrial construction services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Infrastructure</h2>
          <p className="text-gray-600">
            Roads, utilities, and public infrastructure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Development</h2>
          <p className="text-gray-600">
            Real estate and urban development projects.
          </p>
        </div>
      </div>
    </main>
  )
}