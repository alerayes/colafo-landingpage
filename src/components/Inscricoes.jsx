import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from './Button'
import { Modal } from './Modal'

const dataPortuguese = [
  { 
    id: 1,
    categoria: 'Estudante', 
    primeiraData: 'R$ 550,00', 
    segundaData: 'R$ 660,00', 
    terceiraData: 'R$ 770,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 2,
    categoria: 'Alunos e Ex-Alunos BioOnco (Pós Graduação)', 
    primeiraData: 'R$ 660,00', 
    segundaData: 'R$ 770,00', 
    terceiraData: 'R$ 880,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 3,
    categoria: 'Profissionais', 
    primeiraData: 'R$ 770,00', 
    segundaData: 'R$ 880,00', 
    terceiraData: 'R$ 990,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 4,
    categoria: 'Curso Pré Congresso Internacional Linfedema', 
    primeiraData: 'R$ 200,00', 
    segundaData: 'R$ 250,00', 
    terceiraData: 'R$ 300,00',
    noLocal: 'R$ 350,00' 
  },
  { 
    id: 5,
    categoria: 'Curso Pré Congresso Internacional Linfedema', 
    primeiraData: 'R$ 200,00', 
    segundaData: 'R$ 250,00', 
    terceiraData: 'R$ 300,00',
    noLocal: 'R$ 350,00' 
  },
  { 
    id: 6,
    categoria: 'Coquetel/ Networking', 
    primeiraData: 'R$ 100,00', 
    segundaData: 'R$ 150,00', 
    terceiraData: 'R$ 200,00',
    noLocal: 'Não disponível para venda no local' 
  },
]

const dataSpanish = [
  { 
    id: 1,
    categoria: 'Alumno', 
    primeiraData: 'R$ 550,00', 
    segundaData: 'R$ 660,00', 
    terceiraData: 'R$ 770,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 2,
    categoria: 'Alumnos y Antiguos Alumnos de BioOnco (Postgrado)', 
    primeiraData: 'R$ 660,00', 
    segundaData: 'R$ 770,00', 
    terceiraData: 'R$ 880,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 3,
    categoria: 'Profesionales', 
    primeiraData: 'R$ 770,00', 
    segundaData: 'R$ 880,00', 
    terceiraData: 'R$ 990,00',
    noLocal: 'R$ 1000,00' 
  },
  { 
    id: 4,
    categoria: 'Curso internacional pre-congreso Linfedema', 
    primeiraData: 'R$ 200,00', 
    segundaData: 'R$ 250,00', 
    terceiraData: 'R$ 300,00',
    noLocal: 'R$ 350,00' 
  },
  { 
    id: 5,
    categoria: 'Curso internacional pre congreso Rehabilitación Integrativa', 
    primeiraData: 'R$ 200,00', 
    segundaData: 'R$ 250,00', 
    terceiraData: 'R$ 300,00',
    noLocal: 'R$ 350,00' 
  },
  { 
    id: 6,
    categoria: 'Cóctel / Networking', 
    primeiraData: 'R$ 100,00', 
    segundaData: 'R$ 150,00', 
    terceiraData: 'R$ 200,00',
    noLocal: 'No disponible para la venta en el sitio' 
  },
]


export function Inscricoes({language}) {


  return (
    <section
      id="inscricoes"
      className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="text-center lg:mx-0">
          <h2
            className="font-display py-4 text-4xl font-display tracking-tighter text-primary-green sm:text-5xl"
          >
            { language === 'pt' ?
            'Inscrições'
            :
            'Registros'
            }
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle  shadow-2xl rounded-lg">
              <table className="w-9/12 mx-auto divide-y divide-gray-300">
                <thead className='bg-primary-green'>
                  <tr>
                    
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 lg:pl-8"
                    >
                      Lote 1
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        { language === 'pt' ?
                          'Até 20/09/2023'
                        :
                          'Hasta 20/09/2023'  
                        } 
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        { language === 'pt' ?
                          'Até 20/12/2023'
                        :
                          'Hasta 20/12/2023'  
                        }  
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        { language === 'pt' ?
                          'Até 30/03/2024'
                        :
                          'Hasta 30/03/2024'  
                        } 
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        { language === 'pt' ?
                          'No Local'
                        :
                          'En el congreso'  
                        }
 
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {language === 'pt' ? dataPortuguese.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {item.categoria}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.primeiraData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.segundaData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.terceiraData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.noLocal}</td>
                    </tr>
                  ))
                  :
                  dataSpanish.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {item.categoria}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.primeiraData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.segundaData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.terceiraData}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.noLocal}</td>
                    </tr>
                  ))
                  }   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-12'>
          <button
              type="button"
              className="rounded-md bg-primary-green px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-light-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <a href="https://www.sympla.com.br/eventos/congresso-palestra">
              { language === 'pt' ?
                'Inscreva-se Agora'
              :
                'Suscríbete Ahora'
              }
              </a>

          </button>          
      </div>
      <Modal language={language}/>    
      </Container>
    </section>
  )
}
