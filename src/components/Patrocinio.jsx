import { Container } from '@/components/Container'


export function Patrocinio() {
  return (
    <section id="realizacao"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className="mt-8 text-center mb-4 lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Seja um patrocinador
          </h2>
        </div>
        <div className='mb-10 flex'>
            <a className=' tracking-tight mx-auto text-md text-decoration underline text-slate-900'
               href='/booking-comercial.pdf'
               download='booking-comercial.pdf'>
                Baixe o booking comercial
            </a>
        </div>
        <div className="mx-auto my-4 h-px w-64 bg-primary-green/50" />
      </Container>
    </section>
  )
}
