import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-between">
        <nav className="h-[65px] w-full bg-[#FFFFFF]">
          <Link to="/">Home</Link>
        </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-100 p-4 text-center mt-8 h-max w-full">
        © 2025 FixNear
      </footer>
    </div>
  )
}
