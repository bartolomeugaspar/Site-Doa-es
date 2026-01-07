'use client'

import { useState } from 'react'
import { FiSearch, FiFilter, FiMapPin, FiUsers } from 'react-icons/fi'
import Link from 'next/link'

export default function InstituicoesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const categories = ['Todas', 'Orfanatos', 'Educação', 'Saúde', 'Assistência Social', 'ONGs']

  const institutions = [
    {
      id: 1,
      name: 'Lar das Crianças Esperança',
      category: 'Orfanatos',
      location: 'Luanda, Angola',
      description: 'Acolhemos 45 crianças órfãs, oferecendo moradia, alimentação, educação e muito amor.',
      beneficiaries: 45,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070',
      goal: 'R$ 50.000',
      raised: 'R$ 38.500',
    },
    {
      id: 2,
      name: 'Escola Comunitária Saber',
      category: 'Educação',
      location: 'Benguela, Angola',
      description: 'Educação de qualidade gratuita para crianças de comunidades carentes.',
      beneficiaries: 220,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022',
      goal: 'R$ 75.000',
      raised: 'R$ 62.000',
    },
    {
      id: 3,
      name: 'Centro de Saúde Vida Nova',
      category: 'Saúde',
      location: 'Huambo, Angola',
      description: 'Atendimento médico gratuito e campanhas de vacinação.',
      beneficiaries: 500,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070',
      goal: 'R$ 80.000',
      raised: 'R$ 68.000',
    },
    {
      id: 4,
      name: 'ONG Mãos Solidárias',
      category: 'ONGs',
      location: 'Lubango, Angola',
      description: 'Distribuição de alimentos, roupas e apoio para famílias vulneráveis.',
      beneficiaries: 300,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073',
      goal: 'R$ 40.000',
      raised: 'R$ 35.200',
    },
  ]

  const filteredInstitutions = institutions.filter(inst => {
    const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inst.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todas' || inst.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Instituições Verificadas</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Todas as instituições são cuidadosamente verificadas para garantir transparência e impacto real.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar instituições..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">{filteredInstitutions.length}</span> instituições
          </p>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstitutions.map((institution) => (
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
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  ✓ Verificada
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {institution.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {institution.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FiMapPin className="text-primary-600" />
                  <span>{institution.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {institution.description}
                </p>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <FiUsers className="text-primary-600" />
                  <span className="font-semibold text-gray-700">
                    {institution.beneficiaries}+ beneficiados
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-700">Meta atual:</span>
                    <span className="text-primary-600 font-bold">
                      {institution.raised} de {institution.goal}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{
                        width: `${(parseFloat(institution.raised.replace(/[^\d]/g, '')) / parseFloat(institution.goal.replace(/[^\d]/g, ''))) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold">
                  Apoiar Esta Causa
                </button>
              </div>
            </Link>
          ))}
        </div>

        {filteredInstitutions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nenhuma instituição encontrada.</p>
          </div>
        )}
      </div>
    </div>
  )
}
