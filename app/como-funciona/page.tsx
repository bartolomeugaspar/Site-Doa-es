export default function ComoFuncionaPage() {
  const steps = [
    {
      number: 1,
      title: 'Escolha uma Causa',
      description: 'Navegue pelas instituições verificadas e encontre uma causa que toque seu coração. Veja fotos, vídeos e histórias reais.',
      details: [
        'Filtre por categoria (educação, saúde, alimentação, etc.)',
        'Veja a localização e objetivos de cada instituição',
        'Conheça as histórias de quem está sendo ajudado'
      ]
    },
    {
      number: 2,
      title: 'Escolha o Tipo de Doação',
      description: 'Decida se prefere doar dinheiro ou bens materiais como roupas, alimentos, brinquedos e mais.',
      details: [
        'Doação monetária: única ou recorrente',
        'Bens materiais: roupas, alimentos, livros, móveis, etc',
        'Não há valor mínimo - toda contribuição é bem-vinda'
      ]
    },
    {
      number: 3,
      title: 'Complete a Doação',
      description: 'Para doações monetárias, pague com segurança. Para bens, coordene a entrega ou coleta.',
      details: [
        'Dinheiro: Multicaixa Express, PayPay, cartão ou transferência',
        'Bens: Agendaremos coleta ou você pode entregar',
        'Confirmação instantânea por email e SMS'
      ]
    },
    {
      number: 4,
      title: 'Acompanhe o Impacto',
      description: 'Receba atualizações e relatórios sobre como sua doação está transformando vidas.',
      details: [
        'Relatórios mensais de transparência',
        'Fotos e vídeos do impacto gerado',
        'Certificado de doação para dedução fiscal',
        'Histórias de quem foi beneficiado'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h1>
          <p className="text-lg md:text-xl opacity-90">
            Doar nunca foi tão fácil e transparente. Veja o passo a passo completo.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex gap-8 items-start">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-primary-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Fazer a Diferença?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Comece agora e veja como é fácil transformar vidas com transparência total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/doar"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-lg"
            >
              Fazer Doação
            </a>
            <a
              href="/instituicoes"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-semibold text-lg"
            >
              Ver Instituições
            </a>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso doar bens usados?
              </h3>
              <p className="text-gray-600">
                Sim! Aceitamos roupas, calçados, móveis e outros itens em bom estado de conservação. 
                Basta estar limpo e funcional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Qual é o valor mínimo para doar?
              </h3>
              <p className="text-gray-600">
                Não há valor mínimo para doações monetárias. Para bens, qualquer quantidade é bem-vinda.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Como posso ter certeza que meu dinheiro chegará à instituição?
              </h3>
              <p className="text-gray-600">
                Todas as transações são rastreadas e você receberá relatórios mensais detalhando 
                exatamente como sua doação foi utilizada, com fotos e comprovantes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso cancelar uma doação recorrente?
              </h3>
              <p className="text-gray-600">
                Sim, você pode cancelar a qualquer momento através do seu perfil, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
