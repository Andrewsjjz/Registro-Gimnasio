import { Link, Outlet } from "react-router-dom";


export default function Header() {
  return (
<>
    <div >
    <header className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <Link to='/'>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Formulario de asistencia Atenas Gym
          </h1>
          </Link>

  
          <p className="mt-1.5 text-sm text-gray-500">
            Lleva un control mas detallado de los inscritos
          </p>
        </div>
  
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

        <Link to="/agregar" 
        className="relative inline-flex items-center justify-center text-center px-12 py-3 overflow-hidden 
        text-lg font-medium text-white border-2 border-orange-200 rounded-full 
        hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-orange-950 opacity-100 
        group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 
        transform translate-x-full group-hover:translate-x-0 ease">
<svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <defs>
        <style />
      </defs>
      <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
      <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
    </svg>
</span>
<span className="relative">Agregar clientes</span>
</Link>
        </div>
      </div>

    </header>
    </div>
    </>
  )
}
