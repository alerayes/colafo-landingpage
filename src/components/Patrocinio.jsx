import Image from 'next/image'

import { Container } from '@/components/Container'



export function Patrocinio() {
  return (
    <section id="realizacao"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className="text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Seja um patrocinador
          </h2>
        </div>
        <div>
            <p className='mt-1 tracking-tight text-center text-md text-slate-900'>
                Cota Ouro
            </p>
            <p className='mt-1 tracking-tight text-center text-md text-slate-900'>
                Cota Prata
            </p>
            <p className='mt-1 tracking-tight text-center text-md text-decoration underline text-slate-900'>
                Baixe o booking comercial
            </p>
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
