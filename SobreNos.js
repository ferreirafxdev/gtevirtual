import React from 'react';
import Image from 'next/image';

const SobreNos = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre o GTE - Grupo de Transportes Especiais Virtual</h1>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulando com excelência as operações do Grupo de Transportes Especiais da Força Aérea Brasileira na rede VATSIM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              O GTE Virtual foi fundado em 2023 por um grupo de entusiastas da aviação militar brasileira, com o objetivo de replicar com fidelidade as operações do Grupo de Transportes Especiais da Força Aérea Brasileira (FAB) no ambiente de simulação da VATSIM.
            </p>
            <p className="text-gray-700 mb-4">
              Inspirados pela importância estratégica e pelo prestígio do GTE real, nossa equipe se dedica a reproduzir com o máximo de realismo as missões de transporte de autoridades, incluindo o Presidente da República, ministros de Estado e chefes de missões diplomáticas.
            </p>
            <p className="text-gray-700">
              Desde nossa fundação, temos trabalhado continuamente para aprimorar nossos procedimentos, expandir nossa frota virtual e treinar nossos pilotos para garantir que cada voo seja uma representação fiel das operações reais do GTE.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder para imagem - será substituída pela imagem real */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Imagem do GTE</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">O GTE Real</h2>
          <p className="text-gray-700 mb-4">
            O Grupo de Transportes Especiais (GTE) é uma unidade aérea da Força Aérea Brasileira responsável pelo transporte de autoridades nacionais e estrangeiras. Fundado em 4 de junho de 1941 como Seção de Aviões de Comando, no antigo Campo do Calabouço (atual Aeroporto Santos-Dumont), no Rio de Janeiro, o GTE é uma das unidades aéreas mais antigas da FAB.
          </p>
          <p className="text-gray-700 mb-4">
            Em 1954, a unidade passou à subordinação do Gabinete do Ministro da Aeronáutica, sendo renomeada como Esquadrão de Transporte Especial. A denominação atual data de 1957, e a transferência do Rio de Janeiro para Brasília ocorreu em 1960, com a inauguração da nova capital federal.
          </p>
          <p className="text-gray-700 mb-4">
            Atualmente, o GTE opera a partir da Base Aérea de Brasília e é composto por três esquadrões:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>1º Esquadrão: responsável pelo transporte do Presidente da República</li>
            <li>2º Esquadrão: dedicado ao transporte de ministros e outras autoridades</li>
            <li>3º Esquadrão: opera helicópteros para transporte de autoridades</li>
          </ul>
          <p className="text-gray-700">
            Com mais de 530 mil horas voadas, o GTE opera atualmente as aeronaves Airbus A319 (VC-1), Embraer 190 (VC-2), Embraer 135 e 145 (VC-99), além dos helicópteros EC-135 (VH-35) e EC-225 (VH-36).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Missão</h3>
            <p className="text-gray-700 text-center">
              Simular com máxima fidelidade as operações do Grupo de Transportes Especiais da FAB, promovendo o conhecimento sobre a aviação militar brasileira e oferecendo uma experiência imersiva na rede VATSIM.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Visão</h3>
            <p className="text-gray-700 text-center">
              Ser reconhecido como o grupo virtual de referência em simulação de operações de transporte VIP militar no Brasil, destacando-se pelo profissionalismo, realismo e excelência técnica.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Valores</h3>
            <p className="text-gray-700 text-center">
              Comprometimento com o realismo, excelência operacional, trabalho em equipe, respeito aos procedimentos da aviação real e contínuo aperfeiçoamento técnico.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Cel. Av. Virtual Ricardo Almeida</h3>
              <p className="text-green-700 font-medium mb-2">Comandante do GTE Virtual</p>
              <p className="text-gray-600 text-sm">Piloto na VATSIM desde 2015, com mais de 3.000 horas de voo simulado.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Ten. Cel. Av. Virtual Marcos Silva</h3>
              <p className="text-green-700 font-medium mb-2">Comandante do 1º Esquadrão</p>
              <p className="text-gray-600 text-sm">Especialista em operações com Airbus A319 (VC-1) e procedimentos presidenciais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Maj. Av. Virtual Carla Mendes</h3>
              <p className="text-green-700 font-medium mb-2">Comandante do 2º Esquadrão</p>
              <p className="text-gray-600 text-sm">Responsável pelas operações com Embraer 190 (VC-2) e VC-99.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Cap. Av. Virtual Paulo Ribeiro</h3>
              <p className="text-green-700 font-medium mb-2">Comandante do 3º Esquadrão</p>
              <p className="text-gray-600 text-sm">Especialista em operações com helicópteros EC-135 (VH-35) e EC-225 (VH-36).</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Como posso me juntar ao GTE Virtual?</h3>
              <p className="text-gray-700">
                Para se juntar à nossa equipe, é necessário ser membro ativo da VATSIM, ter experiência em simulação de voo e conhecimento básico dos procedimentos da aviação brasileira. Os processos seletivos são anunciados periodicamente em nossa página. Entre em contato através da seção "Contato" para mais informações.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quais aeronaves são utilizadas nas operações?</h3>
              <p className="text-gray-700">
                Utilizamos réplicas virtuais das mesmas aeronaves operadas pelo GTE real: Airbus A319 (VC-1), Embraer 190 (VC-2), Embraer 135/145 (VC-99), EC-135 (VH-35) e EC-225 (VH-36). Todas as aeronaves possuem pinturas (liveries) fiéis às originais.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Como são planejadas as missões?</h3>
              <p className="text-gray-700">
                Nossas missões são planejadas com base na agenda real do Presidente da República e outras autoridades. Utilizamos procedimentos, rotas e horários similares aos reais, adaptados para o ambiente de simulação da VATSIM, sempre respeitando as regras da plataforma.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">O GTE Virtual tem alguma relação oficial com a FAB?</h3>
              <p className="text-gray-700">
                Não. O GTE Virtual é uma organização independente de entusiastas da aviação militar brasileira e não possui vínculo oficial com a Força Aérea Brasileira ou com o Grupo de Transportes Especiais real. Nosso objetivo é puramente educacional e recreativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
