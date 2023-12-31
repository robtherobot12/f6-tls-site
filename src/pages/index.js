import ImageStrip from '@/components/ImageStrip'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>*H!TS*</title>
    </Head>
    <main
      className={`${inter.className} w-screen h-screen`}
    >
      <div className="flex w-screen justify-center mt-8 bg-[#070707]">
        <Image src="/_H!TS_.png" width={150} height={150} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="bg-gradient-to-b from-[#070707] to-transparent w-screen h-24 z-50" />

        <div className="flex w-screen h-screen justify-evenly max-w-screen min-w-screen items-center overflow-hidden absolute">
          <ImageStrip className="flex-grow" img1={"/IMG_2924.png"} img2={"/IMG_2927.png"} img3={"/IMG_2928.png"} />
          <div className="overflow-hidden w-3/5 self-end ">
            <Image src="/man.png" width="2548" height="2548"  />
          </div>
          <ImageStrip img1={"/IMG_2930.png"} img2={"/IMG_2938.png"} img3={"/IMG_2939.png"} />
        </div>

        <div className="bg-gradient-to-t from-[#070707] to-transparent w-screen h-64 z-50" />
      </div>
    </main>
    </>
  )
}
