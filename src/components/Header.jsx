
import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'



const navigationPortuguese = [
  { name: 'O Evento', href: '#event' },
  { name: 'Inscrições', href: '#inscricoes' },
  { name: 'Organização', href: '#organizacao' },
  { name: 'Programação', href: '#schedule' },
  { name: 'Palestrantes', href: '#palestrantes'},
  { name: 'Local', href: '#local' },
]

const navigationSpanish = [
  { name: 'El Evento', href: '#event' },
  { name: 'Registros', href: '#inscricoes' },
  { name: 'Organização', href: '#organizacao' },
  { name: 'El Programa', href: '#schedule' },
  { name: 'Palestrantes', href: '#palestrantes'},
  { name: 'Local', href: '#local' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Header({language, handleLanguageChange}) {

  return (
    <header className="relative z-50 sticky top-0 ">
      <Container>
      <Disclosure as="nav" className="bg-primary-green">
      {({ open }) => (
        <>
          <div className=" sm:px-4 xl:max-w-screen-xl xl:mx-auto ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden md:hidden">
                {/* Mobile menu button*/}	
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-light-green hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="m-0 flex flex-1 items-center justify-center sm:items-stretch md:items-stretch sm:justify-start md:justify-start">
                <div className="hidden sm:ml-0  md:ml-0 sm:block md:block">
                  <div className="flex space-x-4">
                    {navigationPortuguese.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-light-green hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute text-white inset-y-0 right-0 flex items-center pr-2 sm:static md:static sm:inset-auto md:inset-auto sm:ml-6 md:ml-8 sm:pr-0 md:pr-0">
                <button className='font-medium tracking-tighter transform transition-transform hover:scale-110 hover:font-bold' onClick={() => handleLanguageChange('pt')}>PT </button>
                <span className='mx-1 font-medium'> | </span>
                <button  className='font-medium tracking-tighter transform transition-transform hover:scale-110 hover:font-bold' onClick={() => handleLanguageChange('es')}>ES </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden md:hidden">
            <div className="space-y-1 px-12 pb-3 pt-2">
              {navigationPortuguese.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-light-green hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      </Container>
    </header>
  )
}
