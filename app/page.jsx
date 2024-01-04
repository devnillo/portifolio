import Image from 'next/image'
import "./globals.css"
export default function Home() {
  return (
    <>
        <header className='flex justify-between py-10 px-default  text-3xl'>
          <span>Danilo Lopes</span>
          <nav>
            <ul className='flex gap-5 text-2xl transition-all duration-300'>
              <li className='relative '>
                <a href="" className="transition-all duration-300  before:content-['']  hover:text-gray-500 hover:before:bg-gray-500 before:w-10 before:h-1 before: before:block before:absolute before:-bottom-1 before:duration-300">Sobre</a>
              </li>
              <li className='relative'>
                <a href="" className="transition-all duration-300 before:content-['']  hover:text-gray-500 hover:before:bg-gray-500 before:w-10 before:h-1 before: before:block before:absolute before:-bottom-1 before:duration-300">Tecnologias</a>
              </li>
              <li className='relative'>
                <a href="" className="transition-all duration-300 before:content-['']  hover:text-gray-500 hover:before:bg-gray-500 before:w-10 before:h-1 before: before:block before:absolute before:-bottom-1 before:duration-300">Projetos</a>
              </li>
              <li className='relative'>
                <a href="" className="transition-all duration-300 before:content-['']  hover:text-gray-500 hover:before:bg-gray-500 before:w-10 before:h-1 before: before:block before:absolute before:-bottom-1 before:duration-300 ">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          
        </main>
    </>
  )
}
