import { useEffect, useId, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import AlbertoBona from '@/images/palestrantes/alberto-bona.jpeg'
import CarlaPereira from '@/images/palestrantes/carla-pereira.jpeg'
import CarolinaMozzini from '@/images/palestrantes/carolina-mozzini.jpeg'
import EmiliaMartinez from '@/images/palestrantes/emilia-martinez.jpeg'
import LuaAlvez from '@/images/palestrantes/lua-alves.jpeg'
import VinicioBarros from '@/images/palestrantes/vinicio-barros.jpeg'
import PatriciaFigueira from '@/images/avatars/draPatriciaFigueira.jpeg'
import ErickaValentin from '@/images/palestrantes/ericka-valentin.jpeg'
import CinaraSacomori from '@/images/palestrantes/cinara-sacomori.jpeg'
import MirellaDias from '@/images/palestrantes/mirella-dias.png'
import AngelaMarx from '@/images/palestrantes/angela-marx.jpeg'
import LauraRezende from '@/images/palestrantes/laura-rezende.png'
import DanielAlveno from '@/images/palestrantes/daniel-alveno.jpeg'
import JulianaLenzi from '@/images/palestrantes/juliana-lenzi.jpeg'
import GabrielaAbreu from '@/images/palestrantes/gabriela-abreu.jpeg'
import PaulinaAraya from '@/images/avatars/drapauliniaaraya.jpeg'
import AndreaMendoza from '@/images/avatars/draandreamendoza.jpeg'
import GrasianiBreggue from '@/images/avatars/dragrasianebreggue.jpeg'
import KamilaFavarao from '@/images/palestrantes/kamila-favarao.jpeg'
import MarcelaBardin from '@/images/palestrantes/marcela-bardin.jpeg'
import ClaudiaFratta from '@/images/palestrantes/claudia-fratta.jpeg'
import LilianaTsai from '@/images/palestrantes/liliana-tsai.jpeg'
import DanieleSalvaia from '@/images/palestrantes/daniele-salvaia.jpeg'
import PaulaTonini from '@/images/palestrantes/paula-tonini.jpeg'
import JoseLuisCiucci from '@/images/palestrantes/jose-luis-ciucci.jpeg'
import AndreaMelendi from '@/images/palestrantes/andrea-melendi.jpeg'


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
    {
        id: 7,
        name: 'Patricia Figueira 🇧🇷',
        role: '',
        image: PatriciaFigueira,
    },
    {
        id: 8,
        name: 'Ericka Valentin 🇧🇷',
        role: '',
        image: ErickaValentin
    },
    {
        id: 9,
        name: 'Mirella Dias 🇧🇷',
        role: '',
        image: MirellaDias
    },
    {
        id: 10,
        name: 'Ângela Marx 🇧🇷',
        role: '',
        image: AngelaMarx
    },
    {
        id: 11,
        name: 'Laura Rezende 🇧🇷',
        role: '',
        image: LauraRezende
    },
    {
        id: 12,
        name: 'Daniel Alveno 🇧🇷',
        role: '',
        image: DanielAlveno
    },
    {
        id: 13,
        name: 'Juliana Lenzi 🇧🇷',
        role: '',
        image: JulianaLenzi
    },      
    {
        id: 14,
        name: 'Gabriela Abreu 🇧🇷',
        role: '',
        image: GabrielaAbreu
    },
    {
        id: 15,
        name: 'Grasiani Breggue 🇧🇷',
        role: '',
        image: GrasianiBreggue
    },
    {
        id: 16,
        name: 'Kamila Favarão 🇧🇷',
        role: '',
        image: KamilaFavarao
    },
    {
        id: 17,
        name: 'Marcela Bardin 🇧🇷',
        role: '',
        image: MarcelaBardin
    },
    {
        id: 18,
        name: 'Claudia Fratta 🇧🇷',
        role: '',
        image: ClaudiaFratta
    },
    {
        id: 19,
        name: 'Liliana Tsai 🇧🇷',
        role: '',
        image: LilianaTsai
    },
    {
        id: 20,
        name: 'Daniele Salvaia 🇧🇷',
        role: '',
        image: DanieleSalvaia
    },
    {
        id: 21,
        name: 'Paula Tonini 🇧🇷',
        role: '',
        image: PaulaTonini
    },                     
]

const palestrantesInternacionais= [
    {
        id: 1,
        name: 'Paulina Araya 🇨🇱',
        role: '',
        image: PaulinaAraya
    },
    {
        id: 2,
        name: 'Andrea Mendoza 🇦🇷',
        role: '',
        image: AndreaMendoza
    },  
    {
        id: 3,
        name: 'Cinara Sacomori 🇨🇱 🇧🇷 ',
        role: '',
        image: CinaraSacomori
    },
    {
        id: 3,
        name: 'Jose Luis Ciucci 🇦🇷',
        role: '',
        image: JoseLuisCiucci
    },
    {
        id: 3,
        name: 'Andrea Melendi 🇦🇷',
        role: '',
        image: AndreaMelendi
    },
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
        <h3 className='my-12 text-2xl font-semibold text-dark-brown tracking-tighter'>
          { language === 'pt' ?
            'Palestrantes Internacionais'
            :
            'Palestrantes Internacionais'
          }
 
        </h3>
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
