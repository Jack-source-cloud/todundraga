export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border p-10 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8">Admin Login</h1>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-md"
          />

          <button className="w-full bg-black text-white py-4 rounded-md">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}