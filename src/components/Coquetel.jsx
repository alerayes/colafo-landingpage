import Image from 'next/image'

import { Container } from '@/components/Container'


export function Coquetel() {
  return (
    <section id="coquetel" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-8 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Coquetel de Confraternização
          </h2>
        </div>
        <div className="mx-auto mb-10  place-content-center ">
          <div className='mt-4'>
            <p className='text-center mb-4 font-semibold text-gray-600'>12/04/2024 18:30 - 20:30</p>
            <p className='text-center'>Faça parte de um seleto grupo e esteja junto com profissionais renomados da América Latina na área de fisioterapia em oncologia em um momento de networking, fortalecimento de laços e trocas culturais e profissionais.</p>
            <p className='text-center'>Incluso: Cardápio especial com comidinhas quentes, salgados, doces e bebidas para tornar este momento ainda mais agradável.</p>
            <p className='text-center'>Não fique de fora! Liberamos somente 100 vagas exclusivas para participação no Coquetel especial do COLAFO 2024.</p>
            
          </div>   
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
