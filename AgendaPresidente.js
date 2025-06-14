import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const AgendaPresidente = () => {
  const [agendaData, setAgendaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Função para formatar a data no padrão brasileiro
  const formatDate = (date) => {
    return format(date, "dd/MM/yyyy", { locale: ptBR });
  };

  // Função para buscar a agenda do presidente
  const fetchAgenda = async (date) => {
    setLoading(true);
    try {
      // Formatar a data para o formato usado na URL do site do governo
      const formattedDate = format(date, "yyyy-MM-dd");
      
      // Em um ambiente real, isso seria uma chamada de API ou um serviço de scraping
      // Para fins de demonstração, estamos usando dados estáticos
      
      // Simulação de dados da agenda para demonstração
      const mockAgendaData = [
        {
          id: 1,
          hora: "08h00",
          titulo: "Partida para Belo Horizonte",
          local: "Base Aérea de Brasília",
          descricao: "Embarque na aeronave VC-1 (Airbus A319) do GTE"
        },
        {
          id: 2,
          hora: "09h00",
          titulo: "Chegada a Belo Horizonte",
          local: "Aeroporto da Pampulha",
          descricao: "Recepção pelas autoridades locais"
        },
        {
          id: 3,
          hora: "10h15",
          titulo: "Cerimônia de Apresentação dos Avanços do Novo Acordo Rio Doce em Minas Gerais",
          local: "Palácio da Liberdade",
          descricao: "Participação na cerimônia com autoridades estaduais e federais"
        },
        {
          id: 4,
          hora: "13h40",
          titulo: "Visita e Cerimônia de Entrega de Máquinas Agrícolas",
          local: "Parque de Exposições",
          descricao: "Entrega de equipamentos a municípios de Minas Gerais no âmbito do PROMAQ"
        },
        {
          id: 5,
          hora: "16h10",
          titulo: "Partida para Brasília",
          local: "Aeroporto da Pampulha",
          descricao: "Embarque na aeronave VC-1 (Airbus A319) do GTE"
        },
        {
          id: 6,
          hora: "17h10",
          titulo: "Chegada a Brasília",
          local: "Base Aérea de Brasília",
          descricao: "Retorno ao Palácio da Alvorada"
        }
      ];

      // Em um ambiente de produção, aqui seria implementada a lógica para buscar
      // os dados reais da agenda do presidente no site do governo
      
      setAgendaData(mockAgendaData);
      setLoading(false);
    } catch (err) {
      console.error("Erro ao buscar agenda:", err);
      setError("Não foi possível carregar a agenda do presidente. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  // Efeito para buscar a agenda quando o componente é montado ou a data muda
  useEffect(() => {
    fetchAgenda(currentDate);
    
    // Em um ambiente real, poderíamos configurar uma atualização periódica
    const intervalId = setInterval(() => {
      fetchAgenda(currentDate);
    }, 3600000); // Atualiza a cada hora
    
    return () => clearInterval(intervalId);
  }, [currentDate]);

  // Função para navegar para o dia anterior
  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  // Função para navegar para o próximo dia
  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Função para voltar para o dia atual
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-green-700 text-white p-4">
        <h2 className="text-2xl font-bold">Agenda do Presidente</h2>
        <p className="text-sm opacity-80">Atualizada diariamente</p>
      </div>
      
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button 
          onClick={goToPreviousDay}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          &larr; Anterior
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold">
            {format(currentDate, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </h3>
          <button 
            onClick={goToToday}
            className="text-sm text-blue-600 hover:underline"
          >
            Hoje
          </button>
        </div>
        
        <button 
          onClick={goToNextDay}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Próximo &rarr;
        </button>
      </div>
      
      <div className="p-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 p-4">
            <p>{error}</p>
          </div>
        ) : agendaData.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-gray-500">Não há compromissos agendados para esta data.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {agendaData.map((item) => (
              <div key={item.id} className="border-l-4 border-green-700 pl-4 py-2">
                <div className="flex items-start">
                  <div className="bg-green-700 text-white px-2 py-1 rounded text-sm mr-3">
                    {item.hora}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.titulo}</h4>
                    <p className="text-gray-600">{item.local}</p>
                    <p className="text-sm mt-1">{item.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        <p>Fonte: Agenda Oficial da Presidência da República</p>
        <p>Última atualização: {format(new Date(), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}</p>
      </div>
    </div>
  );
};

export default AgendaPresidente;
