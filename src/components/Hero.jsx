import Image from 'next/image'

import { Container } from '@/components/Container'

export function Hero({language}) {
  return (
    <div className="relative mx-auto items-center max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <Container className="relative">
        <div className=" max-w-6xl lg:max-w-4xl">
          <h1 className="font-display text-5xl font-bold tracking-tighter  sm:text-7xl">
            <span className="sr-only">Congresso Latino-Americano de Fisioterapia em Oncologia - </span>
            <span className='text-black'>
              { language === 'pt' ?
              'Congresso Latino-Americano de'
              :
              'Congresso Latinomericano de'
              }
            </span> 
            <span className='text-primary-green'> 
              { language === 'pt' ?
              ' Fisioterapia em Oncologia'
              :
              ' Fisioterapia en Oncología'
              }
            </span>
          </h1>
        </div>
      </Container>
    </div>
  )
}
