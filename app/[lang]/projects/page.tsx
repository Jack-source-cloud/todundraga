import { getProjects } from '@/lib/projects'

export default async function ProjectsPage({
  params,
}: {
  params: { lang: string }
}) {
  const projects = await getProjects()

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-semibold mb-16">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="rounded-3xl overflow-hidden bg-white shadow-sm"
          >
            {project.image_url && (
              <img
                src={project.image_url}
                alt={project.title_en}
                className="w-full h-72 object-cover"
              />
            )}

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                {params.lang === 'mn'
                  ? project.title_mn || project.title_en
                  : project.title_en}
              </h2>

              <p className="text-zinc-600 mb-6">
                {params.lang === 'mn'
                  ? project.description_mn ||
                    project.description_en
                  : project.description_en}
              </p>

              <p className="text-sm text-zinc-500">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}