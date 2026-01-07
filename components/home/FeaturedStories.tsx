'use client'

import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2069',
      title: 'Escola Transformada',
      institution: 'Centro Educacional Esperança',
      description: 'Com as doações recebidas, reformamos 5 salas de aula e compramos computadores para 120 alunos.',
      impact: '120 crianças agora têm acesso a tecnologia',
      raised: 'R$ 45.000',
      goal: 'R$ 50.000',
      category: 'Educação'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064',
      title: 'Alimentação Garantida',
      institution: 'Lar das Crianças Felizes',
      description: 'Graças à sua generosidade, agora servimos 3 refeições nutritivas diárias para 80 crianças.',
      impact: '80 crianças bem alimentadas todos os dias',
      raised: 'R$ 30.000',
      goal: 'R$ 30.000',
      category: 'Alimentação'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073',
      title: 'Saúde em Primeiro Lugar',
      institution: 'Centro de Saúde Comunitário',
      description: 'Equipamos nossa clínica com novos aparelhos e atendemos 500+ famílias mensalmente.',
      impact: '500 famílias atendidas por mês',
      raised: 'R$ 68.000',
      goal: 'R$ 80.000',
      category: 'Saúde'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o impacto real das doações. Cada contribuição gera mudanças concretas e duradouras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                  {story.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-primary-600 mb-3 font-medium">
                  {story.institution}
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {story.description}
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4 rounded">
                  <p className="text-sm text-green-800 font-semibold">
                    ✓ {story.impact}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-700">Arrecadado:</span>
                    <span className="text-primary-600 font-bold">{story.raised} de {story.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{
                        width: `${(parseFloat(story.raised.replace(/[^\d]/g, '')) / parseFloat(story.goal.replace(/[^\d]/g, ''))) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>

                <Link
                  href={`/historias/${story.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  Ler história completa
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/historias"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold"
          >
            Ver Todas as Histórias
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStories
