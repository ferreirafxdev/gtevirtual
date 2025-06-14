import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Componente para a página de Galeria
const Galeria = () => {
  // Array com informações das aeronaves
  const aeronaves = [
    {
      id: 'vc1',
      nome: 'Airbus A319 (VC-1)',
      descricao: 'Aeronave presidencial utilizada para transporte do Presidente da República em viagens de médio e longo alcance.',
      imagem: '/images/vc1_airbus_a319_gte.jpeg',
      especificacoes: {
        fabricante: 'Airbus',
        modelo: 'A319CJ',
        capacidade: 'Até 40 passageiros em configuração VIP',
        alcance: '11.100 km',
        velocidade: '871 km/h',
        teto: '12.500 m',
      }
    },
    {
      id: 'vc2',
      nome: 'Embraer 190 (VC-2)',
      descricao: 'Utilizada para transporte de ministros e autoridades em viagens domésticas e regionais.',
      imagem: '/images/vc2_embraer190_gte.jpeg',
      especificacoes: {
        fabricante: 'Embraer',
        modelo: '190AR',
        capacidade: 'Até 30 passageiros em configuração VIP',
        alcance: '4.500 km',
        velocidade: '850 km/h',
        teto: '12.000 m',
      }
    },
    {
      id: 'vc99',
      nome: 'Embraer 135/145 (VC-99)',
      descricao: 'Empregada para transporte de comitivas menores e em aeroportos com restrições operacionais.',
      imagem: '/images/vc99_embraer135_gte.jpg',
      especificacoes: {
        fabricante: 'Embraer',
        modelo: 'ERJ-135/145',
        capacidade: 'Até 20 passageiros em configuração VIP',
        alcance: '3.700 km',
        velocidade: '830 km/h',
        teto: '11.300 m',
      }
    },
    {
      id: 'vh35',
      nome: 'Eurocopter EC-135 (VH-35)',
      descricao: 'Helicóptero para transporte de autoridades em curtas distâncias.',
      imagem: '/images/vh35_ec135_gte.jpg',
      especificacoes: {
        fabricante: 'Eurocopter (Airbus Helicopters)',
        modelo: 'EC-135',
        capacidade: 'Até 6 passageiros em configuração VIP',
        alcance: '650 km',
        velocidade: '254 km/h',
        teto: '3.050 m',
      }
    },
    {
      id: 'vh36',
      nome: 'Eurocopter EC-225 (VH-36)',
      descricao: 'Helicóptero de médio porte para transporte de comitivas maiores.',
      imagem: '/images/vh36_ec225_gte.jpg',
      especificacoes: {
        fabricante: 'Eurocopter (Airbus Helicopters)',
        modelo: 'EC-225 Super Puma',
        capacidade: 'Até 19 passageiros em configuração VIP',
        alcance: '857 km',
        velocidade: '275 km/h',
        teto: '5.900 m',
      }
    }
  ];

  // Estado para controlar qual aeronave está sendo visualizada em detalhe
  const [aeronaveAtiva, setAeronaveAtiva] = React.useState(null);

  // Função para abrir o modal de detalhes
  const abrirDetalhes = (aeronave) => {
    setAeronaveAtiva(aeronave);
  };

  // Função para fechar o modal de detalhes
  const fecharDetalhes = () => {
    setAeronaveAtiva(null);
  };

  return (
    <div className="bg-white py-12">
      <Head>
        <title>Galeria de Aeronaves | GTE Virtual</title>
        <meta name="description" content="Conheça as aeronaves operadas pelo Grupo de Transportes Especiais da Força Aérea Brasileira." />
      </Head>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeria de Aeronaves</h1>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as aeronaves operadas pelo Grupo de Transportes Especiais da Força Aérea Brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aeronaves.map((aeronave) => (
            <div 
              key={aeronave.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              onClick={() => abrirDetalhes(aeronave)}
            >
              <div className="relative h-64">
                <Image 
                  src={aeronave.imagem} 
                  alt={aeronave.nome} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{aeronave.nome}</h3>
                <p className="text-gray-700 mb-4">
                  {aeronave.descricao}
                </p>
                <button 
                  className="text-green-700 font-medium hover:underline flex items-center"
                  onClick={() => abrirDetalhes(aeronave)}
                >
                  Ver detalhes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalhes da aeronave */}
        {aeronaveAtiva && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto">
              <div className="relative h-80">
                <Image 
                  src={aeronaveAtiva.imagem} 
                  alt={aeronaveAtiva.nome} 
                  layout="fill"
                  objectFit="cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2"
                  onClick={fecharDetalhes}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{aeronaveAtiva.nome}</h2>
                <p className="text-gray-700 mb-6">{aeronaveAtiva.descricao}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Especificações Técnicas</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 font-medium">Fabricante:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.fabricante}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Modelo:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.modelo}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Capacidade:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.capacidade}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Alcance:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.alcance}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Velocidade de Cruzeiro:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.velocidade}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Teto Operacional:</p>
                      <p className="text-gray-900">{aeronaveAtiva.especificacoes.teto}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
                    onClick={fecharDetalhes}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;
