import Image from 'next/image'

import { Container } from '@/components/Container'
import AbraleLogo from '@/images/logos/abrale-logo.png'


export function ApoioInstitucional() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className=" text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Apoio Institucional
          </h2>
        </div>
        <div className="mx-auto mb-2  place-content-center ">
            <div
              className="flex items-center justify-center"
            >
              <a href="https://www.abrale.org.br/">
                  <Image src={AbraleLogo} alt={'abrale-logo'} unoptimized width={190} height={140}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
