import Image from "next/image";
import logo from '@/assets/logo.svg'
import hammer from '@/assets/hammer.svg'
import twitter from '@/assets/twitter.svg'
import instagram from '@/assets/instagram.svg'
import tiktok from '@/assets/tiktok.svg'
import telegram from '@/assets/telegram.svg'
import whatsapp from '@/assets/whatsapp.svg'

export default function Home() {
  return (
    <header className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/jdcWPyZV/pattern.png')] bg-cover"></div>
      <main className="relative z-10 flex flex-col justify-center items-center w-screen h-screen px-5 text-center bg-gradient-to-b from-[#FF89AC] via-[#ff89accb] to-[#ff89ac00]">

        {/* LOGO */}
        <div className="flex justify-center pt-2 md:px-0 px-10">
          <Image
              alt="Logo do Sáficas.com.br"
              src={logo}
              width={400}
              height={120}
          />
        </div>
        
        {/* construção */}
        <div className="flex justify-center pt-10">
          <div className="bg-[#EDEDED] py-1 px-6 border-2 border-stone-900 rounded-3xl">
            <p className="text-[#181818] text-4xl font-glass text-center p-1">nosso site está<br/>em construção!</p>
          </div>
          <style>
            {`
              @keyframes hammerAnimation {
                0% {
                  transform: rotate(0deg);
                }
                20% {
                  transform: rotate(10deg);
                }
                50% {
                  transform: rotate(0deg);
                }
                80% {
                  transform: rotate(-10deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }
            
              .hammer-svg {
                animation: hammerAnimation 1s linear infinite;
                transform-origin: bottom center;
            `}
          </style>
          <Image
            alt="Martelo"
            src={hammer}
            width={100}
            height={100} // Ajuste a altura conforme necessário
            className="hammer-svg absolute ml-56 mt-16"
          />
        </div> 

        {/* redes */}
        <div>
          <div className="flex justify-center pt-20">
            <div className="bg-[#EDEDED] xl:py-1 xl:px-6 mx-2 border-2 border-stone-900 rounded-3xl">
              <p className="text-[#181818] md:text-4xl text-3xl p-1 font-glass text-center">enquanto isso, nos acompanhe nas redes sociais</p>
            </div>
          </div>
          <div className="flex justify-center py-5 gap-2 md:px-0 px-5">
            <a href="https://twitter.com/saficascombr" target="_blank" title="Twitter" className="bg-[#EDEDED] rounded-full h-14 w-14 sm:h-20 sm:w-20 text-black p-3 border-2 border-stone-900 place-content-center">
              <Image
                alt="Twitter"
                src={twitter}
                className="p-1 sm:hover:transform sm:hover:scale-110 sm:hover:opacity-80 sm:duration-300 sm:ease-in-out"
              />
            </a>
            <a href="https://instagram.com/saficas.com.br" target="_blank" title="Instagram" className="bg-[#EDEDED] rounded-full h-14 w-14 sm:h-20 sm:w-20 text-black p-3 border-2 border-stone-900 place-content-center">
              <Image
                alt="Instagram"
                src={instagram}
                className="p-1 sm:hover:transform sm:hover:scale-110 sm:hover:opacity-80 sm:duration-300 sm:ease-in-out"
              />
            </a>
            <a href="https://www.tiktok.com/@saficas.com.br?_t=8ldfvWX9fK1&_r=1" target="_blank" title="Tiktok" className="bg-[#EDEDED] rounded-full h-14 w-14 sm:h-20 sm:w-20 text-black p-3 border-2 border-stone-900 place-content-center">
              <Image
                alt="Tiktok"
                src={tiktok}
                className="p-1 sm:hover:transform sm:hover:scale-110 sm:hover:opacity-80 sm:duration-300 sm:ease-in-out sm:pl-2"
              />
            </a>
            <a href="https://t.me/saficascombr" target="_blank" title="Telegram" className="bg-[#EDEDED] rounded-full h-14 w-14 sm:h-20 sm:w-20 text-black p-3 border-2 border-stone-900 place-content-center">
              <Image
                alt="Telegram"
                src={telegram}
                className="p-1 sm:hover:transform sm:hover:scale-110 sm:hover:opacity-80 sm:duration-300 sm:ease-in-out"
              />
            </a>
            <a href="https://whatsapp.com/channel/0029VaWM1RWDZ4LcdMrrM23Z" target="_blank" title="Whatsapp" className="bg-[#EDEDED] rounded-full h-14 w-14 sm:h-20 sm:w-20 text-black p-3 border-2 border-stone-900 place-content-center">
              <Image
                alt="Whatsapp"
                src={whatsapp}
                className="p-1 sm:hover:transform sm:hover:scale-110 sm:hover:opacity-80 sm:duration-300 sm:ease-in-out"
              />
            </a>
          </div>
        </div>
        
      </main>
    </header>
  );
}
