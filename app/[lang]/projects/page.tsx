import { getProjects } from '@/lib/projects'

export default async function ProjectsPage({
  params,
}: {
  params: { lang: string }
}) {
  const projects = await getProjects()

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p: any) => (
          <div
            key={p.id}
            className="border rounded-xl overflow-hidden"
          >
            <img
              src={p.image_url}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold">
                {params.lang === 'mn'
                  ? p.title_mn
                  : p.title_en}
              </h2>

              <p className="text-gray-600 mt-2">
                {params.lang === 'mn'
                  ? p.description_mn
                  : p.description_en}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                📍 {p.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}