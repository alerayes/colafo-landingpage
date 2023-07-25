import Image from 'next/image'

import { Container } from '@/components/Container'
import AbraleLogo from '@/images/logos/abrale-logo.png'
import AFOALogo from '@/images/logos/afoa-logo.jpeg'
import UNIFAELogo from '@/images/logos/unifae-logo.jpeg'
import AbralinfeLogo from '@/images/logos/abralinfe-logo.jpeg'
import SochkoLogo from '@/images/logos/sochko-logo.jpeg'


export function ApoioInstitucional() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className="mt-8 text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Apoio Institucional
          </h2>
        </div>
        <div className="py-2 mx-auto mb-8 place-content-center ">
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="https://www.instagram.com/abraleoficial/" className=''>
                  <Image src={AbraleLogo} alt={'abrale-logo'} unoptimized width={300} height={140}/>
              </a>
              <a href="https://www.instagram.com/afoa.argentina/" className=''>
                  <Image src={AFOALogo} alt={'afoa-logo'} unoptimized width={140} height={50}/>
              </a>
              <a href="https://www.instagram.com/unifae/" className=' ml-6 mt-6'>
                  <Image src={UNIFAELogo} alt={'unifae-logo'} unoptimized width={220} height={150}/>
              </a>
              <a href="https://www.instagram.com/abralinfe/" className=''>
                  <Image src={AbralinfeLogo} alt={'abralinfe-logo'} unoptimized width={140} height={50}/>
              </a>
            </div>
        </div>
        <div className="py-2 mx-auto mb-8 place-content-center ">
            <div
              className="flex flex-col items-center justify-center md:flex-row "
            >
              <a href="" className='-mt-3'>
                  <Image src={SochkoLogo} alt={'sochko-logo'} unoptimized width={200} height={140}/>
              </a>
            </div>
        </div>
        <div className="mx-auto my-4 h-px w-48 bg-primary-green/50" />
      </Container>
    </section>
  )
}
