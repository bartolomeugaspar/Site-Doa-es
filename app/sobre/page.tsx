export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-lg md:text-xl opacity-90">
            Nossa missão é conectar pessoas generosas a causas que transformam vidas
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A plataforma <strong>Doar com Propósito</strong> nasceu da necessidade de criar uma ponte 
            transparente e confiável entre pessoas que desejam fazer a diferença e instituições sociais 
            que precisam de apoio para continuar transformando vidas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Acreditamos que cada doação, independente do valor, tem o poder de gerar impacto real 
            quando direcionada com transparência e responsabilidade. Por isso, criamos uma plataforma 
            onde você pode acompanhar exatamente para onde vai cada centavo doado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Missão</h3>
            <p className="text-gray-600">
              Democratizar o acesso à doação e garantir transparência total no uso dos recursos.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visão</h3>
            <p className="text-gray-600">
              Ser a plataforma de doações mais transparente e confiável de Angola.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
            <p className="text-gray-600">
              Transparência, empatia, responsabilidade e impacto social real.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Compromissos</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-gray-900">100% Transparência:</strong>
                <span className="text-gray-700"> Relatórios detalhados de todas as doações e aplicações.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-gray-900">Verificação Rigorosa:</strong>
                <span className="text-gray-700"> Todas as instituições são cuidadosamente verificadas.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-gray-900">Taxa Mínima:</strong>
                <span className="text-gray-700"> Apenas 5% para manutenção da plataforma, 95% vai direto para as causas.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong className="text-gray-900">Acompanhamento:</strong>
                <span className="text-gray-700"> Você recebe atualizações sobre o impacto das suas doações.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
