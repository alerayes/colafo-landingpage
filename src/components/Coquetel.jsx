import Image from 'next/image'

import { Container } from '@/components/Container'


export function Coquetel() {
  return (
    <section id="coquetel" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Coquetel de Confraternização
          </h2>
        </div>
        <div className="mx-auto mb-2  place-content-center ">
          <div className='mt-4'>
            <p className='text-center '>12/04/2024 19:00</p>
            <p className='text-center'>No local do evento</p>
          </div>   
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
