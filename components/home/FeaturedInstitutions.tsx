'use client'

import { FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const FeaturedInstitutions = () => {
  const institutions = [
    {
      id: 1,
      name: 'Lar das Crianças Esperança',
      category: 'Orfanato',
      location: 'Luanda, Angola',
      description: 'Acolhemos 45 crianças, oferecendo moradia, educação e afeto para um futuro melhor.',
      beneficiaries: 45,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070',
      verified: true,
    },
    {
      id: 2,
      name: 'Escola Comunitária Saber',
      category: 'Educação',
      location: 'Benguela, Angola',
      description: 'Educação de qualidade para 200+ crianças de famílias carentes da comunidade.',
      beneficiaries: 220,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022',
      verified: true,
    },
    {
      id: 3,
      name: 'Centro de Saúde Vida Nova',
      category: 'Saúde',
      location: 'Huambo, Angola',
      description: 'Atendimento médico gratuito e campanhas de vacinação para comunidades carentes.',
      beneficiaries: 500,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070',
      verified: true,
    },
    {
      id: 4,
      name: 'ONG Mãos Solidárias',
      category: 'Assistência Social',
      location: 'Lubango, Angola',
      description: 'Distribuição de alimentos, roupas e apoio psicológico para famílias vulneráveis.',
      beneficiaries: 300,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073',
      verified: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instituições Verificadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas as instituições são cuidadosamente verificadas para garantir transparência e impacto real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutions.map((institution) => (
            <Link
              key={institution.id}
              href={`/instituicoes/${institution.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={institution.image}
                  alt={institution.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {institution.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    ✓ Verificada
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                  {institution.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {institution.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FiMapPin className="text-primary-600" />
                  <span>{institution.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {institution.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <FiUsers className="text-primary-600" />
                    <span className="font-semibold text-gray-700">
                      {institution.beneficiaries}+ pessoas
                    </span>
                  </div>
                  <FiArrowRight className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/instituicoes"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all font-semibold"
          >
            Ver Todas as Instituições
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInstitutions
