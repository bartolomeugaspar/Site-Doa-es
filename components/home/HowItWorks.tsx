'use client'

import { FiSearch, FiHeart, FiEye, FiSmile } from 'react-icons/fi'

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiSearch className="text-4xl" />,
      title: 'Escolha uma Causa',
      description: 'Navegue por instituições verificadas e encontre uma causa que toque seu coração.',
      color: 'bg-primary-50 text-primary-600',
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: 'Faça Sua Doação',
      description: 'Doe dinheiro ou bens materiais. Doações monetárias podem ser únicas ou recorrentes.',
      color: 'bg-secondary-50 text-secondary-600',
    },
    {
      icon: <FiEye className="text-4xl" />,
      title: 'Acompanhe o Impacto',
      description: 'Veja relatórios transparentes de como sua doação está transformando vidas.',
      color: 'bg-warm-50 text-warm-600',
    },
    {
      icon: <FiSmile className="text-4xl" />,
      title: 'Veja a Diferença',
      description: 'Receba atualizações e histórias reais das pessoas que você está ajudando.',
      color: 'bg-green-50 text-green-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doar nunca foi tão fácil e transparente. Veja como você pode fazer a diferença em 4 passos simples.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.color} mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                
                {/* Step number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
