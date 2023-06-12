import { Container } from '@/components/Container'

export function Event({language}) {

  return (
    <section
      id="event"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="text-center lg:mx-0 py-5">
          <h2
            className="font-display py-4 text-4xl font-display tracking-tighter text-primary-green sm:text-5xl"
          > 
          { language === 'pt' ?
            'Conheça o Evento'
           :
            'Conoce el evento' 
          }
          </h2>
        </div>
        <div className="mx-auto mt-1 grid max-w-3  xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className=" text-lg leading-7 text-gray-700 lg:col-span-7">
            <p>
              { language === 'pt' ?
                'Sediado em São Paulo/ htBrasil, o COLAFO reunirá mais de 450 congressistas para discussão da atuação fisioterapêutica dentro da Oncologia, além das tradicionais palestras com grandes referências da área, teremos palestras com demonstração prática em formato HANDS ON e experiências únicas com apresentação de palhaços, grupo de dança de pacientes mastectomizadas, entre outras surpresas que estão sendo preparadas.'
               :
                'Con sede en São Paulo/htBrasil, COLAFO reunirá a más de 450 delegados para discutir el papel fisioterapéutico dentro de la Oncología, además de las conferencias tradicionales con grandes referencias en el área, tendremos conferencias con demostraciones prácticas en formato HANDS ON y experiencias únicas. con la presentación de payasos, grupo de baile de pacientes mastectomizadas, entre otras sorpresas que se están preparando.' 
              }
            </p>
            <p className="mt-6">
              { language === 'pt' ?
                'O COLAFO vai além de um evento científico, esse evento promoverá um intercâmbio com fisioterapeutas de toda América Latina para fortalecimento da Fisioterapia em Oncologia a nível internacional, sendo além da proposta de atualização uma oportunidade de troca de experiências e networking com profissionais nacionais e internacionais.'
                :
                'COLAFO va más allá de un evento científico, este evento promoverá un intercambio con fisioterapeutas de toda Latinoamérica para fortalecer la Fisioterapia en Oncología a nivel internacional, siendo además de la propuesta de actualización, una oportunidad de intercambio de experiencias y networking con profesionales internacionales.'
              }

            </p>
            <p className="mt-6">
              { language === 'pt' ?
                'As palestras terão tradução simultânea português - espanhol - português para que o idioma não seja uma barreira entre nós.'
                :
                'Las conferencias tendrán traducción simultánea portugués - español - portugués para que el idioma no sea una barrera entre nosotros.'
              }
            </p>
            <p className="mt-6">
              { language === 'pt' ?
                'Agora é só garantir sua inscrição e deixar um espacinho na sua mala, pois vai voltar cheia de novos conhecimentos'
                :
                'Ahora todo lo que tienes que hacer es garantizar tu registro y dejar un poco de espacio en tu maleta, ya que regresarás lleno de nuevos conocimientos.'
              }
            </p>
          </div>
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-primary-green pl-8">
              <blockquote className="text-md font-semibold leading-8 tracking-tight text-gray-900">
                <p className='italic'> 
                  { language === 'pt' ?
                    '"Bem-vindos ao I Congresso Latino-americano de Fisioterapia em Oncologia! Preparem-se para dias incríveis em um evento de palestrantes nacionais e internacionais, referências em suas áreas de atuação.'
                   :
                    '"¡Bienvenidos al 1er Congreso Latinoamericano de Fisioterapia en Oncología! Prepárate para días increíbles en un evento con ponentes nacionales e internacionales, referentes en sus áreas de especialización.' 
                  }
                </p>
                <p className='mt-3 italic'>
                  { language === 'pt' ?
                    'A Fisioterapia em oncologia é uma área em franca expansão, onde pesquisas e tratamentos se renovam de forma extraordinária. O fisioterapeuta precisa de atualização constante para oferecer o melhor ao seu paciente. A meta é ter um congresso de ponta, inovador, com o objetivo de oferecer aos participantes um programa científico cuidadosamente elaborado, com importantes temas baseados em evidências científicas.'
                  :
                    'La fisioterapia en oncología es un área en auge, donde la investigación y los tratamientos se renuevan de manera extraordinaria. El fisioterapeuta necesita una actualización constante para ofrecer lo mejor a su paciente. El objetivo es tener un congreso vanguardista e innovador, con el objetivo de ofrecer a los participantes un programa científico cuidadosamente diseñado, con temas importantes basados ​​en evidencia científica.'
                  }
                </p>
                <p className='mt-3 italic'>
                  { language === 'pt' ?
                    'Um dos diferenciais deste evento é a realização de palestras Hands on. Além de dar a aula, alguns professores também demonstrarão suas técnicas.'
                   :
                    'Uno de los diferenciales de este evento es la realización de conferencias Hands on. Además de enseñar la clase, algunos profesores también demostrarán sus técnicas.' 
                  }
                </p>
                <p className='mt-3 italic'>
                  { language === 'pt' ?
                    'Em São Paulo reuniremos colegas de diferentes lugares, sendo uma oportunidade única de aumentar suas conexões profissionais. Sem dúvidas, você vai se encantar! Nos dias 11, 12 e 13 de abril vivenciaremos essa experiência! Até lá!"'
                   :
                    'En São Paulo reuniremos a colegas de diferentes lugares, siendo una oportunidad única para aumentar sus conexiones profesionales. Sin duda, ¡quedarás encantado! ¡Los días 11, 12 y 13 de abril viviremos esta experiencia! ¡Hasta allá!"' 
                  }
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Dra. Laura Rezende</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>             
      </Container>
    </section>
  )
}
