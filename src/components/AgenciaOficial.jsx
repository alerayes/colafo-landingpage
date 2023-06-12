import Image from 'next/image'

import { Container } from '@/components/Container'
import BalityLogo from '@/images/logos/bality-logo.jpeg'


export function AgenciaOficial() {
  return (
    <section id="agenciaOficial"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-20 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Agência
          </h2>
        </div>
        <div className="mx-auto mb-2  place-content-center ">
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.bality.com.br/">
                  <Image src={BalityLogo} alt={'bality-logo'} unoptimized width={100} height={100}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
