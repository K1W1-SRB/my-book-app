import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "./button"
import { ModeToggle } from "./theme-toggle"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "BookCase's", path: "/your-path" },
    { title: "Profile", path: "/your-path" },
  ]

  return (
    <nav className="w-full border-b md:border-0 ">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block w-full">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600">BookApp</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 w-full">
            {menus.map((item, idx) => (
              <li key={idx} className="hover:text-blue-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <li><Link href={'/login'}><Button>Login</Button></Link></li>
            <li><ModeToggle/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
