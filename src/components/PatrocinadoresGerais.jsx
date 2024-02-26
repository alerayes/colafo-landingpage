import Image from 'next/image'

import { Container } from '@/components/Container'
import ZenFisio from '@/images/patrocinadores/zenfisio-logo.jpeg'
import NegocioFisioterapia from '@/images/logos/negociofisioterapia-logo.png'
import PitayasProductions from '@/images/logos/pitayaproductions-logo.jpeg'
import Outback from '@/images/logos/outback-logo.jpeg'
import Abbraccio from '@/images/logos/abbraccio-logo.jpeg'



export function PatrocinadoresGerais() {
  return (
    <section id="patrocinadores"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-8 mb-4 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Parceiros
          </h2>
        </div>
        <div className="mx-auto mb-10 mt-2  place-content-center ">
            <div
              className="flex flex-col items-center justify-center md:flex-row"
            >
              <a href="https://www.instagram.com/zenfisio/?hl=en" className='mb-8 mt-4'>
                  <Image src={ZenFisio} alt={'zenfisio-logo'} unoptimized width={140} height={10}/>
              </a>              
              <a href="https://www.instagram.com/negociofisioterapia/?hl=en" className='mb-8 mt-4 md:ml-10'>
                  <Image src={NegocioFisioterapia} alt={'negociofisioterapia-logo'} unoptimized width={250} height={10}/>
              </a>
              <a href="https://www.instagram.com/outbackbrasil/?hl=en" className='mb-8 mt-4 md:ml-10'>
                  <Image src={Outback} alt={'outback-logo'} unoptimized width={250} height={10}/>
              </a>
              <a href="https://www.instagram.com/abbracciorestaurante/?hl=en" className='mb-8 mt-4 md:ml-10'>
                  <Image src={Abbraccio} alt={'abbraccio-logo'} unoptimized width={250} height={10}/>
              </a>
              <a href="https://www.instagram.com/pitayasproductionsbr/?hl=en" className='mb-8 mt-4 md:ml-10'>
                  <Image src={PitayasProductions} alt={'pitayasproductions-logo'} unoptimized width={250} height={10}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
