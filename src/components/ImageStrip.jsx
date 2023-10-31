import Image from 'next/image'
import React from 'react'

export default function ImageStrip({img1, img2, img3}) {
  return (
    <div className="flex flex-col">
        {
            [img1, img2, img3].map((value, index) => (
                <div className="p-4 hover:cursor-pointer hover:scale-105 transition-all" key={index}>
                    <Image src={value} height={200} width={200} />
                </div>
            ))
        }
    </div>
  )
}
