"use client"

import React, { useState } from 'react';
import { Container } from './Container';

const portugueseData = [
    { 
        id: 1,
        justificativa: 'Motivos Pessoais *', 
        prazo: 'Até 30 (trinta) dias antes do início do Congresso. Após este período não haverá devolução',
        percentual: '50% do valor pago',
    },
    { 
        id: 2,
        justificativa: 'Problemas de Saúde **',
        prazo: 'Até o dia 04/04/2024',
        percentual: '70% do valor pago',
    },
    {   
        id: 3,
        justificativa: 'Duplicidade de pagamento ***',
        prazo: 'Sem prazo limite',
        percentual: '100% do valor pago'
    },
];

const spanishData = [
    { 
        id: 1,
        justificativa: 'Motivos personales *', 
        prazo: 'Até 30 (trinta) dias antes do início do Congresso. Após este período não haverá devolução',
        percentual: '50% do valor pago',
    },
    { 
        id: 2,
        justificativa: 'Problemas de salud **',
        prazo: 'Até o dia 04/04/2024',
        percentual: '70% do valor pago',
    },
    {   
        id: 3,
        justificativa: 'Duplicación de pago ***',
        prazo: 'Sem prazo limite',
        percentual: '100% do valor pago'
    },
];



export function Modal({language}) {

const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
    setIsOpen(true);
  };

  
  const closeModal = () => {
    setIsOpen(false);
  };

  return (

    <div className='flex justify-center mb-8'> 
      <button
        onClick={openModal}
        className=" text-black text-sm font-normal underline decoration-solid py-2 px-4 rounded"
      >
        Regras de Devolução do COLAFO
      </button>

      {isOpen && (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto w-full sm:w-auto">
                      <h2 className="text-2xl font-semibold mb-4">Regras de Devolução do COLAFO</h2>
                      <div className="max-h-80 overflow-y-auto">
                          <div className="flex flex-col overflow-x-auto sm:-mx20 mb-10 ">
                              <div className="sm:-mx-6 lg:-mx-8 border">
                                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                      <div className="overflow-x-auto flex justify-center">
                                          <table className="w-10/12 divide-y divide-gray-200 place-self-center ">
                                              <thead className="bg-gray-50">
                                                  <tr>
                                                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                          Justificativa
                                                      </th>
                                                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                          Prazo para Solicitação
                                                      </th>
                                                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                          Percentual a ser reembolsado
                                                      </th>
                                                  </tr>
                                              </thead>
                                              <tbody className="bg-white divide-y divide-gray-200">
                                                  {language === 'pt' ? portugueseData.map((row) => (
                                                      <tr key={row.id}>
                                                          <td className="px-4 py-2 whitespace-wrap">{row.justificativa}</td>
                                                          <td className="px-6 py-4 whitespace-wrap">{row.prazo}</td>
                                                          <td className="px-6 py-4 whitespace-nowrap">{row.percentual}</td>
                                                      </tr>
                                                  ))
                                                  :
                                                  spanishData.map((row) => (
                                                    <tr key={row.id}>
                                                        <td className="px-4 py-2 whitespace-wrap">{row.justificativa}</td>
                                                        <td className="px-6 py-4 whitespace-wrap">{row.prazo}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{row.percentual}</td>
                                                    </tr>
                                                    ))
                                                }
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div>
                                <p>
                                    { language === 'pt' ?
                                        '*Motivos pessoais – Enviar e-mail com solicitação de devolução da taxa de inscrição + cópia do comprovante de pagamento.'
                                     :
                                        '*Motivos personales – Enviar un e-mail solicitando la devolución del importe de la inscripción + copia del comprobante de pago.'
                                    }
                                </p>                  
                                <p>
                                    { language === 'pt' ?
                                        '**Problemas de saúde – Enviar e-mail com solicitação de devolução da taxa de inscrição + cópia do atestado médico + cópia do comprovante de pagamento.'
                                     :
                                        '**Problemas de salud – Enviar un correo electrónico solicitando la devolución del valor de la inscripción + copia del certificado médico + copia del comprobante de pago.'    
                                    }
                                </p>
                                <p>
                                    { language === 'pt' ?
                                        '***Duplicidade de pagamento – Enviar e-mail com solicitação de devolução da taxa de inscrição – informar na justificativa o nome da Instituição que efetuou o pagamento + cópia do comprovante de pagamento'
                                     :   
                                        '***Duplicación de pago – Enviar un correo electrónico solicitando la devolución del valor de la inscripción – informar el nombre de la Institución que realizó el pago en la justificación + copia del recibo de pago'
                                    }
                                </p>
                          </div>
                      </div>
                      <div className='flex justify-end'>
                          <button
                              onClick={closeModal}
                              className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mt-4"
                          >
                              Fechar
                          </button>
                      </div>
                  </div>
              </div>
              <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeModal}
          ></div>
        </>
      )}
    </div>

    
  )
}
