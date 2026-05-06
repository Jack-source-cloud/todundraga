import { getProjects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'

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
          <ProjectCard
            key={project.id}
            title={
              params.lang === 'mn'
                ? project.title_mn
                : project.title_en
            }
            description={
              params.lang === 'mn'
                ? project.description_mn
                : project.description_en
            }
            image={project.image_url}
            location={project.location}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  )
}