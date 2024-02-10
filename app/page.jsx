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
          <section id='me' className='h-[81vh] grid place-content-center'>
            <div className="container flex  w-[70vw] mx-auto">
              <div className="left flex justify-center items-center w-1/2">
                <Image src='/profile-pic.png' width={384} height={384}/>
              </div>
              <div className="right flex justify-center items-center w-1/2">
                <div className="content text-center">
                  <p className='text-gray-1 font-medium text-[1.5vw]'>Olá, eu sou</p>
                  <h1 className='text-[3vw] font-semibold'>Danilo Lopes</h1>
                  <h2 className='text-gray-1 text-[2vw] font-semibold'>Desenvolvedor Front-end</h2>
                  <div className="contact flex justify-around mt-4">
                    <button className='border-[1px] border-gray-1 w-28 h-10 rounded-xl hover:bg-gray-1 hover:text-white transition-colors'><a href="">Baixar CV</a></button>
                    <button className='border-[1px] border-gray-1 w-28 h-10 rounded-xl hover:bg-gray-1 hover:text-white transition-colors'>GitHub</button>
                    <button className='border-[1px] border-gray-1 w-28 h-10 rounded-xl hover:bg-gray-1 hover:text-white transition-colors'>Linkedin</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}
