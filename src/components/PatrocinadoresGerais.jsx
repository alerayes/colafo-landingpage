import Image from 'next/image'

import { Container } from '@/components/Container'
import ZenFisio from '@/images/patrocinadores/zenfisio-logo.jpeg'

export function PatrocinadoresGerais() {
  return (
    <section id="patrocinadores"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" mt-8 mb-4 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Patrocinadores
          </h2>
        </div>
        <div className="mx-auto mb-10 mt-2  place-content-center ">
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.instagram.com/zenfisio/?hl=en" className='mb-8 mt-4'>
                  <Image src={ZenFisio} alt={'zenfisio-logo'} unoptimized width={160} height={10}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
