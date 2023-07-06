import { useEffect, useId, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import AlbertoBona from '@/images/palestrantes/alberto-bona.jpeg'
import CarlaPereira from '@/images/palestrantes/carla-pereira.jpeg'
import CarolinaMozzini from '@/images/palestrantes/carolina-mozzini.jpeg'
import EmiliaMartinez from '@/images/palestrantes/emilia-martinez.jpeg'
import LuaAlvez from '@/images/palestrantes/lua-alves.jpeg'
import VinicioBarros from '@/images/palestrantes/vinicio-barros.jpeg'



const palestrantesNacionais = [
    {
        id: 1,
        name: 'Luá Alves 🇧🇷',
        role: '',
        image: LuaAlvez,
    },
    {
        id: 2,
        name: 'Alberto Bona 🇧🇷',
        role: '',
        image: AlbertoBona,
    },
    {
      id: 3,
      name: 'Emília C Martinez 🇧🇷',
      role: '',
      image: EmiliaMartinez,
    },
    {
        id: 4,
        name: 'Vinicio Dos Santos Barros 🇧🇷',
        role: '',
        image: VinicioBarros, 
    },
    {
        id: 5,
        name: 'Carolina Barreto Mozzini 🇧🇷',
        role: '',
        image: CarolinaMozzini,
    },
    {
        id: 6,
        name: 'Carla Pereira 🇧🇷',
        role: '',
        image: CarlaPereira,
    },  
]

const palestrantesInternacionais= [

]

     


export function Palestrantes({language}) {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="palestrantes"
      className=" mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20"
    >
      <Container>
        <div className="text-center py-4  lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display pt-20 pb-4 text-4xl font-display tracking-tighter text-primary-green  sm:text-5xl"
          >
            Palestrantes Confirmados
          </h2>
        </div>
        <h3 className='mb-4 text-2xl font-semibold text-dark-brown tracking-tighter'>
          { language === 'pt' ?
            'Palestrantes Nacionais'
           :
            'Palestrantes Nacionais'
          }
        </h3>
        <div
          className="grid grid-cols-1 items-start gap-x-4 gap-y-8  sm:gap-y-16 lg:grid-cols-4 md:grid-cols-3"
        >
                {palestrantesNacionais.map((member, memberIndex) => (
                  <div key={memberIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <Image
                          className="mx-auto h-[17.5rem] w-60 rounded-lg object-cover transition duration-300 group-hover:scale-110"
                          src={member.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />

                    </div>
                    <h3 className="mt-4 font-display text-xl text-center text-dark-brown font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-center text-slate-500">
                      {member.role}
                    </p>
                  </div>
                ))}
        </div>
        {/* <h3 className='my-12 text-2xl font-semibold text-dark-brown tracking-tighter'>
          { language === 'pt' ?
            'Palestrantes Internacionais'
            :
            'Palestrantes Internacionais'
          }
 
        </h3> */}
        <div
          className="grid grid-cols-1 items-start gap-x-4 gap-y-8  sm:gap-y-16 lg:grid-cols-4 md:grid-cols-3"
        >
                {palestrantesInternacionais.map((member, memberIndex) => (
                  <div key={memberIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <Image
                          className="mx-auto h-90 w-60 rounded-lg object-cover transition duration-300 group-hover:scale-110"
                          src={member.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />

                    </div>
                    <h3 className="mt-8 font-display text-xl text-center text-dark-brown font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-center text-slate-500">
                      {member.role}
                    </p>
                  </div>
                ))}
        </div>
      </Container>
    </section>
  )
}
