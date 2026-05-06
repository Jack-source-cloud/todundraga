type Props = {
  title: string
  description: string
  image: string
  location: string
}

export default function ProjectCard({
  title,
  description,
  image,
  location,
}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-white">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-3">
          {location}
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-gray-600 leading-7">
          {description}
        </p>
      </div>
    </div>
  )
}