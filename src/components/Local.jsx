'use cient'

import { Container } from '@/components/Container'
import { Carousel } from '@/components/Carousel'


export function Local() {


  return (
    <section
      id="local"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="text-center py-4 lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display pt-20 pb-4 text-4xl font-display tracking-tighter text-primary-green  sm:text-5xl"
          >
            Local
          </h2>
        </div>
        <Carousel />
        <div className='mt-4'>
          <h3 className='text-center font-bold'>IAMSPE</h3>
          <p className='text-center '>Rua Pedro de Toledo, 1800</p>
          <p className='text-center'>Avenida Ibirapuera 1215</p>
          <p className='text-center'>Ibirapuera São Paulo - SP</p>
        </div>   
      </Container>
    </section>
  )
}
