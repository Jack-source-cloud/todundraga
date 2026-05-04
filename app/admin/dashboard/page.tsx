// app/admin/dashboard/page.tsx
export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="p-6 border">Pages</div>
        <div className="p-6 border">Services</div>
        <div className="p-6 border">Projects</div>
      </div>
    </div>
  );
}