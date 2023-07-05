import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Inscricoes } from '@/components/Inscricoes'
import { Event } from '@/components/Event'
import { ComissaoOrganizacao } from '@/components/ComissaoOrganizacao'
import { Local } from '@/components/Local'
import { Realizacao } from '@/components/Realizacao'
import { Organizacao } from '@/components/Organizacao'
import { AgenciaOficial } from '@/components/AgenciaOficial'
import { ApoioInstitucional } from '@/components/ApoioInstitucional'
import { Coquetel } from '@/components/Coquetel'
import { ProgramaCultural } from '@/components/ProgramaCultural'
import { SpanishSchedule } from '@/components/SpanishSchedule'
import { Patrocinio } from '@/components/Patrocinio'
import { Palestrantes } from '@/components/Palestrantes'


export default function Home() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };


  return (
    <>
      <Head>
        <title>Congresso Latino-Americano de Fisioterapia em Oncologia</title>
        <meta
          name="Congresso Latino-Americano de Fisioterapia em Oncologia"
          content=""
        />
      </Head>
      <Header language={language} handleLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language}/>
        <Event language={language}/>
        <ComissaoOrganizacao language={language} />
        { language === 'pt' ?
         <Schedule language={language} />
         :
         <SpanishSchedule language={language}/>
        }
        <Palestrantes language={language} />
        <Inscricoes language={language} /> 
        <Local language={language}/>
        <AgenciaOficial language={language}/>
        <Realizacao language={language}/>
        <Organizacao/>
        <Patrocinio />
        <ApoioInstitucional language={language}/>
        <Coquetel language={language}/>
        <ProgramaCultural language={language}/>  
      </main>
    <Footer />
    </>
  )
}
