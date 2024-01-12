import { Link } from "react-router-dom"
import logo from "../assets/logo3.svg"

export default function Error() {
    return (
        <html className="h-full">
  <body className="flex h-full">
    <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
      <header className="mb-auto flex justify-center z-50 w-full py-4 my-10">
        <nav className="px-4 sm:px-6 lg:px-8 n" aria-label="Global">
          <Link className="flex-none text-xl font-semibold sm:text-3xl" to="/" aria-label="Brand"><img src={logo} alt="niko auer logo" className="h-80"/></Link>
        </nav>
      </header>

      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9x">404</h1>
        <h1 className="block text-2xl font-bold text-white"></h1>
        <p className="mt-3 text-gray-600">Oops, something went wrong.</p>
        <p className="text-gray-600">Sorry, we couldn't find your page.</p>
        <button type="button" className="py-3 my-5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  <Link to="/">Home</Link>
</button>
      </div>
      

      <footer className="mt-auto text-center py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">All rights reservered to Niko Auer</p>
        </div>
      </footer>
    </div>
  </body>
</html>
    )
}