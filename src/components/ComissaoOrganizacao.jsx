import { useEffect, useId, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import draPatriciaFigueira from '@/images/avatars/draPatriciaFigueira.jpeg'
import draAndreiaNunes from '@/images/avatars/draAndreiaNunes.jpeg'
import draAnaCarolinaGoncalves from '@/images/avatars/draAnaCarolinaGoncalves.jpeg'
import draAnaPaulaOliveira from '@/images/avatars/draAnaPaulaOliveira.jpeg'
import draBeatrizFernandes from '@/images/avatars/draBeatrizFernandes.jpeg'
import draDeboraCandeias from '@/images/avatars/draDeboraCandeias.jpeg'
import draLauraRezende from '@/images/avatars/dralaurarezende.jpeg'
import draAndreaMendoza from '@/images/avatars/draandreamendoza.jpeg'
import draGrasianeBreggue from '@/images/avatars/dragrasianebreggue.jpeg'
import draJulianaLenzi from '@/images/avatars/drajulianalenzi.jpeg'
import draPauliniaAraya from '@/images/avatars/drapauliniaaraya.jpeg'

const comissaoOrganizadora = [
    {
        id: 1,
        name: 'Dra. Patricia Figueira 🇧🇷',
        role: 'Presidente',
        image: draPatriciaFigueira,
    },
    {
        id: 2,
        name: 'Dra. Ana Paula Oliveira 🇧🇷',
        role: 'Coordenadora de Ensino BioOnco ',
        image: draAnaPaulaOliveira,
    },
    {
      id: 3,
      name: 'Dra. Ana Carolina Gonçalves 🇧🇷',
      role: '',
      image: draAnaCarolinaGoncalves,
    },
    {
        id: 4,
        name: 'Dra. Andreia Nunes 🇧🇷',
        role: '',
        image: draAndreiaNunes, 
    },
    {
        id: 5,
        name: 'Dra. Beatriz Fernandes 🇧🇷',
        role: '',
        image: draBeatrizFernandes,
    },
    {
        id: 6,
        name: 'Dra. Débora Candeias 🇧🇷',
        role: '',
        image: draDeboraCandeias,
    },  
]

const comissaoCientifica = [
  {
    id: 1,
    name: 'Dra. Laura Rezende 🇧🇷',
    role: 'Presidente',
    image: draLauraRezende
  },
  {
    id: 2,
    name: 'Dra. Andrea Mendoza 🇦🇷',
    role: '',
    image: draAndreaMendoza
  },
  {
    id: 3,
    name: 'Dra. Grasiane Breggue 🇧🇷',
    role: '',
    image: draGrasianeBreggue
  },
  {
    id: 4,
    name: 'Dra. Juliana Lenzi 🇧🇷',
    role: '',
    image: draJulianaLenzi
  },
  {
    id: 5,
    name: 'Dra. Paulina Araya 🇨🇱',
    role: '',
    image: draPauliniaAraya
  },
]

     


export function ComissaoOrganizacao({language}) {
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
      id="organizacao"
      className=" mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="text-center py-4 lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display pt-20 pb-4 text-4xl font-display tracking-tighter text-primary-green  sm:text-5xl"
          >
            Coordenadoras
          </h2>
        </div>
        <h3 className='mb-4 text-2xl font-semibold text-dark-brown tracking-tighter'>
          { language === 'pt' ?
            'Comissão Organizadora'
           :
            'Comité de Organizacion'
          }
        </h3>
        <div
          className="grid grid-cols-1 items-start gap-x-4 gap-y-8  sm:gap-y-16 lg:grid-cols-4 md:grid-cols-3"
        >
                {comissaoOrganizadora.map((member, memberIndex) => (
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
                    <h3 className="mt-4 font-display text-xl text-center text-dark-brown font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-center text-slate-500">
                      {member.role}
                    </p>
                  </div>
                ))}
        </div>
        <h3 className='my-12 text-2xl font-semibold text-dark-brown tracking-tighter'>
          { language === 'pt' ?
            'Comissão Cientifica'
            :
            'Comisión Científica'
          }
 
        </h3>
        <div
          className="grid grid-cols-1 items-start gap-x-4 gap-y-8  sm:gap-y-16 lg:grid-cols-4 md:grid-cols-3"
        >
                {comissaoCientifica.map((member, memberIndex) => (
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
