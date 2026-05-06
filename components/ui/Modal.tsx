export default function Modal({
  open,
  children,
  onClose,
}: {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <button onClick={onClose} className="mb-4 text-sm text-gray-500">
          Close
        </button>

        {children}
      </div>
    </div>
  )
}