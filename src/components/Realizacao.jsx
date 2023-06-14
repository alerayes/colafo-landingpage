import Image from 'next/image'

import { Container } from '@/components/Container'
import BioOncoLogo from '@/images/logos/logo-bioonco.png'


export function Realizacao() {
  return (
    <section id="realizacao"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className="mt-8 mb-4 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Realização
          </h2>
        </div>
        <div className="mx-auto mb-8 place-content-center ">
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.bioonco.com.br/" className='mb-4'>
                  <Image src={BioOncoLogo} alt={'bioonco-logo'} unoptimized width={180} height={100}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
