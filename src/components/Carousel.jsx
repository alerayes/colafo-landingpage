
'use client'

import { Container } from '@/components/Container'
import { useState } from 'react'
import Image from 'next/image'



import image1 from '@/images/local-1.png'
import image2 from '@/images/local-2.png'
import image3 from '@/images/local-3.png'
import image4 from '@/images/local-4.png'


const images = [
    image1,
    image2,
    image3,
    image4,
  ];

export function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

  return (
    <Container>
        <div className="flex items-center justify-center ">
            <button
                className=" text-gray-700 font-bold py-2 px-4 rounded-l"
                onClick={prevImage}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </button>
            <Image
                className="mx-auto h-96 w-3/4 rounded-lg object-contain transition duration-300 group-hover:scale-110"
                src={images[currentImage]}
                alt=""
                priority
                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <button
                className=" text-gray-700 font-bold py-2 px-4 rounded-r"
                onClick={nextImage}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    </Container>
  )
}
