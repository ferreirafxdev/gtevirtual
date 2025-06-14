import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AgendaPresidente from '../components/AgendaPresidente';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GTE - Grupo de Transportes Especiais Virtual</title>
        <meta name="description" content="Site oficial do GTE Virtual - Simulando com excelência as operações do Grupo de Transportes Especiais da Força Aérea Brasileira na rede VATSIM." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/vc1_airbus_a319_gte.jpeg" 
              alt="Aeronave VC-1 do GTE" 
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GTE - Grupo de Transportes Especiais Virtual
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Simulando com excelência as operações do Grupo de Transportes Especiais da Força Aérea Brasileira na rede VATSIM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sobre-nos">
                <a className="px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 text-lg font-medium">
                  Conheça o GTE Virtual
                </a>
              </Link>
              <Link href="/operacoes-vatsim">
                <a className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-green-800 transition duration-300 text-lg font-medium">
                  Operações VATSIM
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Aeronaves Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Frota</h2>
              <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Operamos réplicas virtuais das mesmas aeronaves utilizadas pelo GTE real, com pinturas fiéis às originais.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vc1_airbus_a319_gte.jpeg" 
                    alt="Airbus A319 (VC-1)" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Airbus A319 (VC-1)</h3>
                  <p className="text-gray-700 mb-4">
                    Aeronave presidencial utilizada para transporte do Presidente da República em viagens de médio e longo alcance.
                  </p>
                  <Link href="/galeria">
                    <a className="text-green-700 font-medium hover:underline">Ver mais detalhes &rarr;</a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vc2_embraer190_gte.jpeg" 
                    alt="Embraer 190 (VC-2)" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Embraer 190 (VC-2)</h3>
                  <p className="text-gray-700 mb-4">
                    Utilizada para transporte de ministros e autoridades em viagens domésticas e regionais.
                  </p>
                  <Link href="/galeria">
                    <a className="text-green-700 font-medium hover:underline">Ver mais detalhes &rarr;</a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vc99_embraer135_gte.jpg" 
                    alt="Embraer 135/145 (VC-99)" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Embraer 135/145 (VC-99)</h3>
                  <p className="text-gray-700 mb-4">
                    Empregada para transporte de comitivas menores e em aeroportos com restrições operacionais.
                  </p>
                  <Link href="/galeria">
                    <a className="text-green-700 font-medium hover:underline">Ver mais detalhes &rarr;</a>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/galeria">
                <a className="px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 inline-block">
                  Ver toda a frota
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Agenda do Presidente Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Agenda do Presidente</h2>
              <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acompanhe os compromissos oficiais do Presidente da República, atualizados diariamente.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <AgendaPresidente />
            </div>
            
            <div className="text-center mt-12">
              <Link href="/agenda-presidente">
                <a className="px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 inline-block">
                  Ver agenda completa
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* VATSIM Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Operações na VATSIM</h2>
                <div className="w-24 h-1 bg-green-700 mb-6"></div>
                <p className="text-xl text-gray-700 mb-6">
                  O GTE Virtual realiza operações regulares na rede VATSIM, simulando missões de transporte de autoridades com base na agenda real do Presidente da República.
                </p>
                <p className="text-gray-700 mb-8">
                  Nossas missões são cuidadosamente planejadas com base em dados reais, seguindo os mesmos procedimentos, rotas e protocolos utilizados nas operações reais do GTE.
                </p>
                <Link href="/operacoes-vatsim">
                  <a className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 inline-block">
                    Saiba mais sobre nossas operações
                  </a>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/vh35_ec135_gte.jpg" 
                  alt="Operações VATSIM" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Junte-se à Nossa Equipe</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Você é um entusiasta da aviação militar e tem experiência na VATSIM? Venha fazer parte do GTE Virtual e participe de operações que simulam com fidelidade as missões do Grupo de Transportes Especiais da FAB.
            </p>
            <Link href="/contato">
              <a className="px-8 py-3 bg-white text-green-700 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium inline-block">
                Entre em Contato
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
