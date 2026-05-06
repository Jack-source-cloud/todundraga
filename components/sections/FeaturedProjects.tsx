import Link from 'next/link'

export default function FeaturedProjects({
  projects,
}: {
  projects: any[]
}) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/en/projects/${project.slug}`}
            >
              <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image_url})`,
                  }}
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title_en}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}