'use client'

import { useState } from 'react'
import { FiUser, FiHeart, FiFileText, FiSettings, FiDownload } from 'react-icons/fi'

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Dados mockados - substituir por dados reais da API
  const userData = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    totalDonated: 15000,
    donationsCount: 12,
    favoriteInstitutions: 3,
  }

  const donations = [
    {
      id: 1,
      institution: 'Lar das Crianças Esperança',
      amount: 2500,
      date: '2026-01-05',
      status: 'Concluída',
      type: 'Única',
    },
    {
      id: 2,
      institution: 'Escola Comunitária Saber',
      amount: 1000,
      date: '2025-12-20',
      status: 'Concluída',
      type: 'Mensal',
    },
    {
      id: 3,
      institution: 'Centro de Saúde Vida Nova',
      amount: 5000,
      date: '2025-11-15',
      status: 'Concluída',
      type: 'Única',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-600">
              <FiUser className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{userData.name}</h1>
              <p className="text-lg opacity-90">{userData.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  <FiUser />
                  Visão Geral
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
                  Minhas Doações
                </button>
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'certificates'
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FiFileText />
                  Certificados
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                  <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
                    <p className="text-gray-600 mb-2">Total Doado</p>
                    <p className="text-3xl font-bold text-primary-600">
                      {userData.totalDonated.toLocaleString()} Kz
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Doações Realizadas</p>
                    <p className="text-3xl font-bold text-secondary-600">
                      {userData.donationsCount}
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <p className="text-gray-600 mb-2">Instituições Apoiadas</p>
                    <p className="text-3xl font-bold text-warm-500">
                      {userData.favoriteInstitutions}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Impacto Gerado</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Crianças beneficiadas</span>
                      <span className="font-bold text-primary-600">~45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Refeições fornecidas</span>
                      <span className="font-bold text-primary-600">~500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Materiais escolares distribuídos</span>
                      <span className="font-bold text-primary-600">~30</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Donations Tab */}
            {activeTab === 'donations' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Minhas Doações</h2>
                
                <div className="space-y-4">
                  {donations.map((donation) => (
                    <div key={donation.id} className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {donation.institution}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date(donation.date).toLocaleDateString('pt-BR')} • {donation.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right flex-1 sm:flex-initial">
                            <p className="text-xl sm:text-2xl font-bold text-primary-600">
                              {donation.amount.toLocaleString()} Kz
                            </p>
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                              {donation.status}
                            </span>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <FiDownload className="text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Certificados de Doação</h2>
                
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <div className="text-center py-8">
                    <FiFileText className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Você pode baixar certificados de todas as suas doações para fins fiscais.
                    </p>
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold">
                      Baixar Todos os Certificados
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h2>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        defaultValue={userData.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={userData.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notificações
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                          <span className="text-gray-700">Receber atualizações sobre minhas doações</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                          <span className="text-gray-700">Newsletter mensal</span>
                        </label>
                      </div>
                    </div>
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold">
                      Salvar Alterações
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
