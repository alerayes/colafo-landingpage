import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'


const spanishSchedule = [
  {
    date: '11 de Abril',
    dateTime: '11-04-2024',
    summary:
      '',
    timeSlots: [
      {
        name: 'Linfedema: desde las bases anatómicas hasta el tratamiento',
        start: '08:00',
        end: '12:00',
        speakers: [
          {
            id: 1,
            name: 'José Luis Ciucci (Argentina)'
          },
          {
            id: 2,
            name: 'Andrea Mendoza (Argentina)'
          }
        ]
      },
      {
        name: 'Rehabilitación integrativa en oncología',
        start: '14:00',
        end: '18:00',
        speakers: [
          {
            id: 1,
            name: 'Gabriel López – MD Anderson Cancer Center (EUA)'
          },
          {
            id: 2,
            name: 'Paulina Araya (Chile)',
          }
        ]
      },
    ]
  },
  {
    date: '12 de Abril',
    dateTime: '12/04/2024',
    timeSlots: [
      {
        name: 'Credenciamento e entrega de material',
        start: '07:30',
      },
      {
        name: 'Abertura',
        start: '08:00',
      },
      {
        name: 'Palestra Hands on: Agentes eletrofísicos na neuropatia periférica induzida pela quimioterapia',
        start: '08:30',
        end: '09:10',
        speakers: [
          {
            id: 1,
            name: 'Laura Rezende'
          }
        ],
        blocks: [
          {
            id: 1,
            time: '9:00',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Mesa redonda: Métodos de avaliação na fisioterapia em oncologia',
        start: '09:10',
        end: '09:50',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '09:10',
            name: 'PROMs Patient reported outcomes',
            speaker: 'Paulina Araya (CHI)'
          },
          {
            id: 2,
            time: '09:25',
            name: 'Termografia em Oncologia',
            speaker: 'Gabriela Abreu (BRA)'
          },
          {
            id: 3,
            time: '09:40',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Mesa redonda: Linfedema',
        start: '09:50',
        end: '10:50',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '09:50',
            name: 'Linfedema: Definição, classificação e estadiamento',
            speaker: 'José Luis Ciucci (ARG)'
          },
          {
            id: 2,
            time: '10:05',
            name: 'Enfaixamento versus vestimenta inelástica: qual a melhor opção?',
            speaker: 'Andrea Mendoza (ARG)'
          },
          {
            id: 3,
            time: '10:20',
            name: 'O papel da terapia manual no tratamento do linfedema',
            speaker: 'Ângela Marx (BRA)'
          },
          {
            id: 4,
            time: '10:35',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Intervalo',
        start: '10:50',
      },
      {
        name: 'Mesa redonda: Fisioterapia no Câncer de Mama',
        start: '11:20',
        end: '12:20',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '11:20',
            name: 'Seroma: da prevenção ao tratamento',
            speaker: 'Erica Fabro'
          },
          {
            id: 2,
            time: '11:35',
            name: 'Pré-habilitação no câncer de mama',
            speaker: 'Andrea Melendi(ARG)'
          },
          {
            id: 3,
            time: '11:50',
            name: 'Síndrome da Rede Axilar, podemos considerar uma complicação crônica?',
            speaker: 'Patrícia Figueira (BRA)'
          },
          {
            id: 4,
            time: '12:05',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Uso do Dry Needling na dor miofascial em pacientes oncológicos.',
        start: '12:20',
        end: '12:40',
        speakers: [
          {
            id: 1,
            name: 'Daniele Salvaia'
          }
        ],
        blocks: [
          {
            id: 1,
            time: '12:35',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Almoço',
        start: '12:40',
      },
      {
        name: 'Hands on : Linfedema grau 3 - como tratar?',
        start: '14:00',
        end: '14:40',
        speakers: [
          {
            id: 1,
            name: 'Luiz Montoya (MEX)'
          }
        ],
        blocks: [
          {
            id: 1,
            time: '14:30',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Mesa: Oncologia geral',
        start: '14:40',
        end: '15:40',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '14:40',
            name: 'Reabilitação com criocongelamento nos tumores ósseos',
            speaker: 'Emília Cardoso Martinez (BRA) '
          },
          {
            id: 2,
            time: '14:55',
            name: 'Fisioterapia na oncopediatria',
            speaker: 'Liliana Tsai (BRA)'
          },
          {
            id: 3,
            time: '15:10',
            name: 'Caso Clínico: tratamento fisioterapêutico em paciente com Melanoma',
            speaker: 'Larissa Campanholi (BRA)'
          },
          {
            id: 4,
            time: '15:25',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Intervalo',
        start: '15:40',
      },
      {
        name: 'Mesa redonda: Diversidade na oncologia',
        start: '16:10',
        end: '16:40',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '16:10',
            name: 'Câncer em Pessoas Transgêneros: o que o fisioterapeuta precisa saber?',
            speaker: 'Luá Alves (BRA)',
          },
          {
            id: 2,
            time: '16:25',
            name: 'Reabilitação pélvica na população LGBTQIA+',
            speaker: ' Mauro Barbosa (BRA)',
          },
          {
            id: 3,
            time: '16:40',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Palestra Hands on: Terapia por ondas de choque na oncologia',
        start: '16:40',
        end: '17:20',
        speakers: [
          {
            id: 1,
            name: 'Juliana Lenzi',
          }
        ],
        blocks: [
          {
            id: 1,
            time: '17:10',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Apresentação do Coral Sua Voz',
        start: '17:10',
        end: '17:40',
      },
      {
        name: 'Encontro Sociedades Latinoamericanas de Fisioterapia em Oncologia',
        start: '17:40',
        end: '18:20',
      },
      {
        name: 'Coquetel de confraternização',
        start: '18:30',
        end: '20:30',
      },
    ],
  },
  {
    date: '13 de Abril',
    dateTime: '13-04-2024',
    summary:
      '',
    timeSlots: [
      {
        name: 'Palestra Hands on: Prescrição de meias e braçadeiras',
        start: '08:00',
        end: '08:40',
        speakers: [
          {
            id: 1,
            name: 'Anke Bergmann',
          }
        ],
        blocks: [
          {
            id: 1,
            time: '08:30',
            name: 'Discussão',
          }
        ]
      },
      {
        name: 'Mesa redonda – Fisioterapia nas disfunções pélvicas',
        start: '08:40',
        end: '09:55',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '08:40',
            name: 'Incontinência fecal pós cirurgia de câncer colorretal: abordagem da fisioterapia',
            speaker: 'Cláudia Fratta',
          },
          {
            id: 2,
            time: '08:55',
            name: 'Manometria anorretal de alta resolução',
            speaker: ' Cinara Sacomori (Chile)',
          },
          {
            id: 3,
            time: '09:10',
            name: 'Disfunções urinárias no câncer ginecológico: como eu trato?',
            speaker: 'Marcela Bardin',
          },
          {
            id: 4,
            time: '09:25',
            name: 'Biofeedback nas disfunções pélvicas em pacientes oncológicos ',
            speaker: 'Adriane Bertotto',
          },
          {
            id: 5,
            time: '09:40',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Mesa redonda: Exercício físico em oncologia',
        start: '09:55',
        end: '10:35',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '09:55',
            name: 'Exercícios em pacientes metastáticos',
            speaker: 'Kamila Favarão',
          },
          {
            id: 2,
            time: '10:10',
            name: 'Exercício de alta intensidade durante a quimioterapia',
            speaker: 'Grasiane',
          },
          {
            id: 3,
            time: '10:25  ',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Pesquisa Clínica e inteligência artificial na Saúde',
        start: '10:35',
        end: '10:55',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '10:50',
            name: 'Discussão',
            speaker: '',
          }
        ]
      },
      {
        name: 'Mesa redonda: Fisioterapia no câncer de cabeça e pescoço',
        start: '10:55',
        end: '11:35',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '10:55',
            name: 'Cirurgia robótica no CCP e seu impacto funcional',
            speaker: 'Telma Ribeiro - AC Camargo',
          },
          {
            id: 2,
            time: '11:10',
            name: 'Como lidar com a síndrome do ombro',
            speaker: 'Carolina Mozzini',
          },
          {
            id: 3,
            time: '11:25',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Intervalo',
        start: '11:35',
      },
      {
        name: 'Mesa redonda: Paciente crítico em oncologia',
        start: '12:05',
        end: '13:05',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '12:05',
            name: 'Fisioterapia na TMO: Cuidado Centrado no Paciente',
            speaker: 'Marister Cocco',
          },
          {
            id: 2,
            time: '12:20',
            name: 'Fisioterapia Oncológica na UTI prática baseada em evidência',
            speaker: 'Vinicio',
          },
          {
            id: 3,
            time: '12:35',
            name: 'Terapia por CAR-T Cell e suas repercussões físicas',
            speaker: 'Paula Tonini'
          },
          {
            id: 4,
            time: '12:50',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Almoço',
        start: '13:05',
      },
      {
        name: 'Palestra Hands on: Linfotaping ',
        start: '14:30',
        end: '15:10',
        speakers: [
          {
            id: 1,
            name: 'Mirella Dias',
          }
        ],
        blocks: [
          {
            id: 1,
            time: '15:00',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Mesa redonda – Oncologia na saúde do homem',
        start: '15:10',
        end: '16:10',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '15:10',
            name: 'Bomba peniana na disfunção erétil: Quais as evidências?',
            speaker: 'Alberto Bona',
          },
          {
            id: 2,
            time: '15:25',
            name: 'Sexualidade no homem com câncer',
            speaker: 'Carla Pereira',
          },
          {
            id: 3,
            time: '15:40',
            name: ' Gameterapia na reabilitação do câncer de próstata',
            speaker: 'Ericka Valentim'
          },
          {
            id: 4,
            time: '15:55',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Intervalo',
        start: '16:10',
      },
      {
        name: 'Mesa: Cuidados integral ao paciente',
        start: '16:40',
        end: '17:20',
        speakers: null,
        blocks: [
          {
            id: 1,
            time: '16:40',
            name: 'Terapia integrativa em oncologia',
            speaker: 'Gabriel López',
          },
          {
            id: 2,
            time: '16:55',
            name: 'A voz do fisioterapeuta na comunicação de más notícias',
            speaker: 'Daniel Alveno',
          },
          {
            id: 3,
            time: '17:10',
            name: 'Discussão',
          },
        ]
      },
      {
        name: 'Encerramento',
        start: '17:20',
        end: '17:30',
        speakers: null,
      },
      {
        name: 'Apresentação TrupeCalli',
        start: '17:30',
        end: '18:30',
        speakers: null,
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          spanishSchedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {spanishSchedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl text-center font-semibold tracking-tight text-primary-green">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-slate-600">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        ' bg-grey border-2 py-14 px-10 text-center shadow-2xl shadow-green-500/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          <h4 className="text-lg font-bold tracking-tight text-dark-brown">
            {timeSlot.name}
          </h4>
          {/* {timeSlot.speakers &&  timeSlot.speakers.map((speaker) => (
            <p className="mt-1 tracking-tight text-slate-600" key={speaker.id}>
                {speaker.name}
            </p>
          ))} */}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            {timeSlot.end && '-'} {' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
          </p>
          {timeSlot.blocks && timeSlot.blocks.map((block) => (
            <div key={block.id} className='mt-2'>
              <span className="mt-1 font-mono text-sm text-start text-slate-500">
                <time dateTime={`${day.dateTime}T${block.start}-08:00`}>
                  {block.time}
                </time> {' '} - {' '}
              </span>
              <span className='mt-1 tracking-tight font-semibold text-dark-brown'>
                {block.name}
              </span>
              {/* <p className='mt-1 tracking-tight font-regular text-slate-600'>
                {block.speaker}
              </p> */}
            </div>
          ))}

          <div className="mx-auto my-8 h-px w-48 bg-indigo-500/10" />
          {/* {timeSlot.speakers &&  timeSlot.speakers.map((speaker) => (
            <p className="mt-1 tracking-tight text-blue-900" key={speaker.id}>
                {speaker.name}
            </p>
          ))} */}
      
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {spanishSchedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function SpanishSchedule({language}) {
  return (
    <section id="schedule"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Container className="relative z-10">
      <div className="text-center lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display pt-20 text-4xl font-display tracking-tighter text-primary-green sm:text-5xl"
          >
            { language === 'pt' ?
                'Programação'
              :
                'Conoce el Programa'  
            }
          </h2>
        </div>
      </Container>
      <div className="relative mt-14">
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
