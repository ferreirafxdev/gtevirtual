import React from 'react';
import Image from 'next/image';

const OperacoesVatsim = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Operações VATSIM</h1>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulando com precisão as operações do GTE na maior rede de simulação aérea online do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder para imagem - será substituída pela imagem real */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Imagem de operação VATSIM</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é a VATSIM?</h2>
            <p className="text-gray-700 mb-4">
              A VATSIM (Virtual Air Traffic Simulation Network) é uma comunidade global de entusiastas da aviação que simula operações de tráfego aéreo em tempo real. Fundada em 2001, a rede conecta pilotos virtuais e controladores de tráfego aéreo de todo o mundo, criando um ambiente de simulação realista e imersivo.
            </p>
            <p className="text-gray-700 mb-4">
              Com mais de 100.000 membros registrados, a VATSIM oferece uma plataforma onde os procedimentos, comunicações e operações da aviação real são replicados com alto grau de fidelidade, permitindo uma experiência educacional e recreativa única.
            </p>
            <p className="text-gray-700">
              No GTE Virtual, utilizamos a infraestrutura da VATSIM para simular as operações do Grupo de Transportes Especiais da FAB, seguindo os mesmos procedimentos, rotas e protocolos utilizados nas missões reais de transporte de autoridades.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossas Operações na VATSIM</h2>
          <p className="text-gray-700 mb-6 text-center">
            O GTE Virtual realiza operações regulares na rede VATSIM, simulando missões de transporte de autoridades com base na agenda real do Presidente da República e outras autoridades governamentais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planejamento de Missões</h3>
              <p className="text-gray-700">
                Nossas missões são cuidadosamente planejadas com base na agenda oficial do Presidente e outras autoridades. Utilizamos dados reais de rotas, procedimentos e horários, adaptados para o ambiente de simulação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operações em Tempo Real</h3>
              <p className="text-gray-700">
                Realizamos voos em tempo real na rede VATSIM, interagindo com controladores de tráfego aéreo e outros pilotos, seguindo procedimentos de comunicação padrão e protocolos de segurança.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coordenação de Equipe</h3>
              <p className="text-gray-700">
                Nossas operações envolvem coordenação entre pilotos, co-pilotos e equipe de apoio em solo, replicando a estrutura organizacional e a cadeia de comando do GTE real.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Aeronaves e Rotas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frota Virtual</h3>
              <p className="text-gray-700 mb-4">
                Nossa frota virtual é composta por réplicas fiéis das aeronaves utilizadas pelo GTE real:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Airbus A319 (VC-1)</strong> - Utilizada principalmente para o transporte do Presidente da República em viagens de médio e longo alcance.</li>
                <li><strong>Embraer 190 (VC-2)</strong> - Empregada para o transporte de ministros e autoridades em viagens domésticas e regionais.</li>
                <li><strong>Embraer 135/145 (VC-99)</strong> - Utilizada para transporte de comitivas menores e em aeroportos com restrições operacionais.</li>
                <li><strong>Eurocopter EC-135 (VH-35)</strong> - Helicóptero para transporte de autoridades em curtas distâncias.</li>
                <li><strong>Eurocopter EC-225 (VH-36)</strong> - Helicóptero de médio porte para transporte de comitivas maiores.</li>
              </ul>
              <p className="text-gray-700">
                Todas as aeronaves possuem pinturas (liveries) fiéis às originais, com detalhes internos e externos reproduzidos com precisão.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rotas Frequentes</h3>
              <p className="text-gray-700 mb-4">
                Nossas operações abrangem principalmente as seguintes rotas:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Brasília (SBBR) - São Paulo (SBSP/SBGR)</strong> - Rota mais frequente para compromissos presidenciais.</li>
                <li><strong>Brasília (SBBR) - Rio de Janeiro (SBRJ/SBGL)</strong> - Segunda rota mais utilizada.</li>
                <li><strong>Brasília (SBBR) - Capitais Estaduais</strong> - Para eventos oficiais nos estados.</li>
                <li><strong>Rotas Internacionais</strong> - Para cúpulas, reuniões multilaterais e visitas de Estado.</li>
                <li><strong>Operações Especiais</strong> - Incluindo evacuações aeromédicas e missões humanitárias.</li>
              </ul>
              <p className="text-gray-700">
                Todas as rotas são planejadas com base em procedimentos reais, respeitando as características operacionais de cada aeronave e aeroporto.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Como Participar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Requisitos para Pilotos</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ser membro ativo da VATSIM com conta em situação regular.</li>
                <li>Possuir experiência mínima de 50 horas de voo na rede VATSIM.</li>
                <li>Conhecimento básico dos procedimentos de aviação brasileira.</li>
                <li>Familiaridade com fraseologia aeronáutica em português e inglês.</li>
                <li>Comprometimento com realismo e profissionalismo nas operações.</li>
                <li>Disponibilidade para participar de pelo menos dois eventos mensais.</li>
                <li>Capacidade de trabalhar em equipe e seguir procedimentos padronizados.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Processo de Admissão</h3>
              <ol className="list-decimal pl-6 mb-4 text-gray-700">
                <li>Preencha o formulário de inscrição disponível na seção "Contato".</li>
                <li>Aguarde o contato da nossa equipe para uma entrevista inicial.</li>
                <li>Participe de uma avaliação teórica sobre procedimentos e conhecimentos básicos.</li>
                <li>Realize um voo de avaliação com um instrutor do GTE Virtual.</li>
                <li>Após aprovação, participe do programa de treinamento específico para a aeronave designada.</li>
                <li>Complete o período probatório de três meses com participação em operações supervisionadas.</li>
              </ol>
              <p className="text-gray-700">
                O processo de admissão visa garantir que todos os membros compartilhem do mesmo compromisso com o realismo e a qualidade das operações.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Calendário de Operações</h2>
          <p className="text-gray-700 mb-6 text-center">
            Nossas operações são programadas com base na agenda oficial do Presidente da República e outras autoridades. Abaixo estão os próximos eventos confirmados:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-100 text-left text-gray-700 font-semibold border-b">Data</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-gray-700 font-semibold border-b">Missão</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-gray-700 font-semibold border-b">Rota</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-gray-700 font-semibold border-b">Aeronave</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-gray-700 font-semibold border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">15/06/2025</td>
                  <td className="py-3 px-4 border-b">Transporte Presidencial</td>
                  <td className="py-3 px-4 border-b">SBBR-SBGR-SBBR</td>
                  <td className="py-3 px-4 border-b">VC-1 (Airbus A319)</td>
                  <td className="py-3 px-4 border-b"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Confirmado</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">18/06/2025</td>
                  <td className="py-3 px-4 border-b">Transporte Ministerial</td>
                  <td className="py-3 px-4 border-b">SBBR-SBRF-SBBR</td>
                  <td className="py-3 px-4 border-b">VC-2 (Embraer 190)</td>
                  <td className="py-3 px-4 border-b"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Confirmado</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">22/06/2025</td>
                  <td className="py-3 px-4 border-b">Visita de Estado</td>
                  <td className="py-3 px-4 border-b">SBBR-SBGL-SAEZ</td>
                  <td className="py-3 px-4 border-b">VC-1 (Airbus A319)</td>
                  <td className="py-3 px-4 border-b"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pendente</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">25/06/2025</td>
                  <td className="py-3 px-4 border-b">Transporte Comitiva</td>
                  <td className="py-3 px-4 border-b">SBBR-SBCF-SBBR</td>
                  <td className="py-3 px-4 border-b">VC-99 (Embraer 145)</td>
                  <td className="py-3 px-4 border-b"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pendente</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            * O calendário é atualizado semanalmente com base na agenda oficial e disponibilidade da equipe.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Downloads</h2>
          <p className="text-gray-700 mb-6 text-center">
            Disponibilizamos materiais para nossos membros e entusiastas que desejam simular operações do GTE:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pinturas (Liveries)</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Pinturas oficiais das aeronaves do GTE para os principais simuladores de voo.
              </p>
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Download
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manuais e Checklists</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Procedimentos operacionais, checklists e manuais adaptados para simulação.
              </p>
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Download
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cartas Aeronáuticas</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Cartas de rotas frequentes e procedimentos especiais para operações do GTE.
              </p>
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperacoesVatsim;
