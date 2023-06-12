import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="py-4 bg-primary-green">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <p className=" text-base text-white mx-auto md:mt-0">
          Congresso Latino-Americano de Fisioterapia em Oncologia
        </p>
      </Container>
    </footer>
  )
}
