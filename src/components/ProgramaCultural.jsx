import Image from 'next/image'

import { Container } from '@/components/Container'


const categories = [
  {
    name: 'Museus',
    featured: [
      {
        name: 'MAM',
        href: 'https://mam.org.br/',
      },
      {
        name: 'MIS',
        href: 'https://www.mis-sp.org.br/',
      },
      {
        name: 'MASP',
        href: 'https://masp.org.br/',
      },
      {
        name: 'Museu do Ipiranga',
        href: 'https://museudoipiranga.org.br/',
      },
      {
        name: 'Pinacoteca',
        href: 'https://pinacoteca.org.br/',
      },
      {
        name: 'MAC',
        href: 'http://www.mac.usp.br/mac/',
      },
      {
        name: 'Bienal',
        href: 'https://www.bienal.org.br/',
      },
      {
        name: 'Museu da Língua Portuguesa',
        href: 'https://museudalinguaportuguesa.org.br'
      },
      {
        name: 'Memorial da América Latina',
        href: 'https://memorial.org.br/',
      }
    ]
  },
  {
    name: 'Geral',
    featured: [
      {
        name: 'Mercado Municipal',
        href: 'http://mercadao.mercadospspe.com.br/eventos-gastronomico/',
      },
      {
        name: 'Parque Ibirapuera',
      },
      {
        name: 'Avenida Paulista',
      },
      {
        name: 'Casa das Rosas',
        href: 'https://www.casadasrosas.org.br/',
      },
      {
        name: 'Theatro Municipal',
        href: 'https://theatromunicipal.org.br/pt-br/',
      },
      {
        name: 'Sala São Paulo',
        href: 'http://www.salasaopaulo.art.br/home.aspx',
      },
      {
        name: 'Bairro Bixiga (Italiano)',
      },
      {
        name: 'Bairro Liberdade (Japonês)',
      },
      {
        name: 'Centro de Tradições Nordestinas',
        href: 'https://www.ctn.org.br/',
      },
      {
        name: 'Centro Cultura Banco do Brasil',
        href: 'https://ccbb.com.br/',
      },
      {
        name: 'Pateo do Collegio',
        href: 'https://www.pateodocollegio.com.br/',
      },
      {
        name: 'Rua 25 de Março',
      },
      {
        name: 'Mosteiro São Bento',
      }
    ]
  },
  {
    name: 'Mirantes',
    featured: [
      {
        name: 'Mirante FIESP',
        href: 'https://www.sescsp.org.br/programacao/mirante-sesc-avenida-2/',
      },
      {
        name: 'Farol Santander',
        href: 'https://www.farolsantander.com.br/#/'
      },
      {
        name: 'Sampa Sky',
        href: 'https://sampasky.com.br/'
      }
    ]
  }
]


    

export function ProgramaCultural() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Container>
      <div className="text-center lg:mx-0">
          <h2
            id="speakers-title"
            className=" text-2xl font-semibold text-primary-green tracking-tighter"
          >
            Programa Cultural de São Paulo
          </h2>
        </div>
        <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-base font-bold text-dark-brown">{category.name}</h3>
              <ul className="mt-4">
                {category.featured.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2  text-sm">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
