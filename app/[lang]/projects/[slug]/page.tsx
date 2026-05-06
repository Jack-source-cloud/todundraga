import { getProjectBySlug } from '@/lib/projects'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string; lang: string }
}) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-24">
        Project not found.
      </main>
    )
  }

  return (
    <main>
      <section
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${project.image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-20">
          <div>
            <p className="text-white/70 mb-4">
              {project.location}
            </p>

            <h1 className="text-white text-6xl font-semibold">
              {params.lang === 'mn'
                ? project.title_mn
                : project.title_en}
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xl text-gray-700 leading-10">
          {params.lang === 'mn'
            ? project.description_mn
            : project.description_en}
        </p>
      </section>
    </main>
  )
}