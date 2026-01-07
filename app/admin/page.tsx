'use client'

import { useState } from 'react'
import { FiHome, FiUsers, FiHeart, FiBarChart2, FiSettings, FiCheckCircle, FiXCircle } from 'react-icons/fi'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data - substituir por dados reais da API
  const stats = {
    totalDonations: 2500000,
    pendingInstitutions: 5,
    activeInstitutions: 50,
    totalUsers: 3420,
  }

  const pendingInstitutions = [
    {
      id: 1,
      name: 'Centro Comunitário São José',
      category: 'Assistência Social',
      location: 'Luanda',
      submittedAt: '2026-01-05',
    },
    {
      id: 2,
      name: 'Escola Primária Futuro',
      category: 'Educação',
      location: 'Benguela',
      submittedAt: '2026-01-04',
    },
  ]

  const recentDonations = [
    {
      id: 1,
      donor: 'João Silva',
      institution: 'Lar das Crianças',
      amount: 2500,
      date: '2026-01-07',
      status: 'completed',
    },
    {
      id: 2,
      donor: 'Maria Santos',
      institution: 'Escola Saber',
      amount: 1000,
      date: '2026-01-06',
      status: 'completed',
    },
  ]

  const handleApprove = (id: number) => {
    alert(`Instituição ${id} aprovada!`)
    // Implementar lógica de aprovação
  }

  const handleReject = (id: number) => {
    alert(`Instituição ${id} rejeitada!`)
    // Implementar lógica de rejeição
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          <p className="text-gray-300 mt-2">Gerencie instituições, doações e usuários</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiHome />
                  Visão Geral
                </button>
                <button
                  onClick={() => setActiveTab('institutions')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'institutions'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiUsers />
                  Instituições
                  {pendingInstitutions.length > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {pendingInstitutions.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('donations')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'donations'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiHeart />
                  Doações
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'reports'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiBarChart2 />
                  Relatórios
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiSettings />
                  Configurações
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Visão Geral</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Total Arrecadado</p>
                    <p className="text-3xl font-bold text-primary-600">
                      {stats.totalDonations.toLocaleString()} Kz
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Instituições Ativas</p>
                    <p className="text-3xl font-bold text-secondary-600">
                      {stats.activeInstitutions}
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Aguardando Aprovação</p>
                    <p className="text-3xl font-bold text-warm-600">
                      {stats.pendingInstitutions}
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Usuários Cadastrados</p>
                    <p className="text-3xl font-bold text-green-600">
                      {stats.totalUsers.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Doações Recentes</h3>
                  <div className="space-y-4">
                    {recentDonations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                        <div>
                          <p className="font-semibold text-gray-900">{donation.donor}</p>
                          <p className="text-sm text-gray-600">
                            {donation.institution} • {donation.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary-600">{donation.amount.toLocaleString()} Kz</p>
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            {donation.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Institutions Tab */}
            {activeTab === 'institutions' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Instituições Aguardando Aprovação
                </h2>
                
                <div className="space-y-4">
                  {pendingInstitutions.map((institution) => (
                    <div key={institution.id} className="bg-white rounded-2xl shadow-md p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {institution.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {institution.category}
                            </span>
                            <span>{institution.location}</span>
                            <span>Enviado em {institution.submittedAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApprove(institution.id)}
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <FiCheckCircle />
                            Aprovar
                          </button>
                          <button
                            onClick={() => handleReject(institution.id)}
                            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <FiXCircle />
                            Rejeitar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Donations Tab */}
            {activeTab === 'donations' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas as Doações</h2>
                
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Doador
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Instituição
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Valor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {donation.donor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {donation.institution}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">
                            {donation.amount.toLocaleString()} Kz
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {donation.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              {donation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Relatórios</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-left">
                    <FiBarChart2 className="text-3xl text-primary-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Relatório Mensal</h3>
                    <p className="text-sm text-gray-600">
                      Resumo de doações e atividades do mês
                    </p>
                  </button>
                  
                  <button className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-left">
                    <FiBarChart2 className="text-3xl text-secondary-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Relatório Anual</h3>
                    <p className="text-sm text-gray-600">
                      Balanço completo do ano fiscal
                    </p>
                  </button>
                  
                  <button className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-left">
                    <FiUsers className="text-3xl text-warm-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Instituições</h3>
                    <p className="text-sm text-gray-600">
                      Relatório de performance das instituições
                    </p>
                  </button>
                  
                  <button className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-left">
                    <FiHeart className="text-3xl text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Impacto Social</h3>
                    <p className="text-sm text-gray-600">
                      Métricas de impacto e beneficiários
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
