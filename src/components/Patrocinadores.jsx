import Image from 'next/image'

import { Container } from '@/components/Container'
import CLSP from '@/images/patrocinadores/clsp.jpeg'
import LEDUC from '@/images/patrocinadores/leduc.jpeg'
import Quark from '@/images/patrocinadores/quark.jpeg'
import Oncopuntura from '@/images/patrocinadores/oncopuntura.jpeg'
import Feijoeiro from '@/images/patrocinadores/feijoeiro-logo.jpeg'
import Venosan from '@/images/patrocinadores/venosan-logo.jpeg'
import Intima from '@/images/patrocinadores/intima-logo.jpeg'
import Ibramed from '@/images/patrocinadores/ibramed-logo.jpeg'
import Miotec from '@/images/patrocinadores/miotec-logo.jpeg'
import Oncosmetic from '@/images/patrocinadores/oncosmetic-logo.png'
import MMO from '@/images/patrocinadores/mmo-logo.jpeg'
import LojaMeuPerineo from '@/images/patrocinadores/lojameuperineo-logo.jpeg'
import Medi from '@/images/patrocinadores/medi.png'



export function Patrocinadores() {
  return (
    <section id="patrocinadores"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-20 mb-4 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Expositores
          </h2>
        </div>
        <div className="mx-auto mb-10 mt-2  place-content-center ">
            <h4 className='text-center font-semibold mb-8 text-yellow-600 text-lg '>Categoria Ouro</h4>
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="https://www.instagram.com/clsp.distribuidora/" className='mb-8 mt-4'>
                  <Image src={CLSP} alt={'clsp-logo'} unoptimized width={200} height={30}/>
              </a>
              <a href="https://www.instagram.com/ibramedbrasil?igsh=bmQ3OW5ldWg4b3A1" className='mb-8 mt-4'>
                  <Image src={Ibramed} alt={'ibramed-logo'} unoptimized width={220} height={30}/>
              </a>
            </div>
        </div>
        <div className="mx-auto mb-12 mt-2  place-content-center ">
            <h4 className='text-center font-semibold mb-12 text-zinc-500 text-xl'>Categoria Prata</h4>
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="https://www.instagram.com/quarkmedical/" className='mb-8 mr-7 '>
                  <Image src={Quark} alt={'quark-logo'} unoptimized width={190} height={140}/>
              </a>
              <a href="https://www.instagram.com/cursoleduc/" className='mb-4 mx-10'>
                  <Image src={LEDUC} alt={'leduc-logo'} unoptimized width={160} height={100}/>
              </a>
              <a href="https://www.instagram.com/fisiofernandafeijoeiro/?hl=en" className='mb-4 mx-10'>
                  <Image src={Feijoeiro} alt={'fernanda-feijoeiro'} unoptimized width={180} height={130}/>
              </a>
              <a href="https://www.instagram.com/oncopuntura/" className='mb-8 '>
                  <Image src={Oncopuntura} alt={'oncopuntura-logo'} unoptimized width={230} height={200}/>
              </a>
            </div>
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="https://www.instagram.com/miotec_insta?igsh=ZjN3eGg3MnhtcXNn" className='mt-10 mb-8 mr-7 '>
                  <Image src={Miotec} alt={'miotec-logo'} unoptimized width={210} height={140}/>
              </a>
              <a href="https://www.instagram.com/medibrasil/" className='mt-10 mb-8 mr-7 '>
                  <Image src={Medi} alt={'medi-logo'} unoptimized width={180} height={140}/>
              </a>
            </div>
        </div>
        <div className="mx-auto mb-4 mt-2  place-content-center ">
            <h4 className='text-center font-semibold  text-yellow-800 text-xl mb-12 md:mb-0'>Categoria Bronze</h4>
            <div
              className="flex flex-col items-center justify-center mt-12 md:flex-row mt-0"
            >
              <a href="https://www.instagram.com/venosanbrasil/?hl=en" className=' mr-7 '>
                  <Image src={Venosan} alt={'venosan-logo'} unoptimized width={270} height={170}/>
              </a>
              <a href="https://intimmasaude.com.br" className=' mr-7 '>
                  <Image src={Intima} alt={'intima-logo'} unoptimized width={270} height={150}/>
              </a>
              <a href="https://www.instagram.com/oncosmetic?igsh=dGl3NWJwd2Z0b2dj" className='mr-4 -ml-4'>
                  <Image src={Oncosmetic} alt={'oncosmetic-logo'} unoptimized width={290} height={200}/>
              </a>
              <a href="https://www.instagram.com/blisssaudeeestetica?igsh=MTNpZmhjbjB4ZWV1OQ==" className='mr-4 -ml-4 mb-12 mt-10'>
                  <Image src={MMO} alt={'mmo-logo'} unoptimized width={290} height={200}/>
              </a>
            </div>
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="https://www.instagram.com/lojameuperineo/" className='mt-10 mb-8 mr-7  md:mt-0'>
                  <Image src={LojaMeuPerineo} alt={'lojameuperineo-logo'} unoptimized width={180} height={140}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
