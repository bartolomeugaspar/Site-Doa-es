'use client'

import { FiBarChart2, FiDollarSign, FiTrendingUp, FiPieChart } from 'react-icons/fi'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function TransparenciaPage() {
  const monthlyData = [
    { month: 'Jul', value: 45000 },
    { month: 'Ago', value: 52000 },
    { month: 'Set', value: 48000 },
    { month: 'Out', value: 61000 },
    { month: 'Nov', value: 58000 },
    { month: 'Dez', value: 72000 },
  ]

  const distributionData = [
    { name: 'Educação', value: 40, color: '#22c55e' },
    { name: 'Saúde', value: 30, color: '#3b82f6' },
    { name: 'Alimentação', value: 20, color: '#f59e0b' },
    { name: 'Infraestrutura', value: 10, color: '#8b5cf6' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparência Total</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Veja exatamente para onde vai cada centavo doado. 
            Prestação de contas clara e acessível para todos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <FiDollarSign className="text-primary-600" />
              </div>
              <p className="text-gray-600 text-sm">Total Arrecadado</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">2.5M Kz</p>
            <p className="text-sm text-green-600 mt-1">+15% vs mês anterior</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-secondary-50 rounded-lg flex items-center justify-center">
                <FiBarChart2 className="text-secondary-600" />
              </div>
              <p className="text-gray-600 text-sm">Doações Este Mês</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">72K Kz</p>
            <p className="text-sm text-green-600 mt-1">+24% crescimento</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-warm-50 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="text-warm-600" />
              </div>
              <p className="text-gray-600 text-sm">Pessoas Beneficiadas</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">15.000+</p>
            <p className="text-sm text-green-600 mt-1">Em 50+ instituições</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <FiPieChart className="text-green-600" />
              </div>
              <p className="text-gray-600 text-sm">Taxa Administrativa</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">5%</p>
            <p className="text-sm text-gray-600 mt-1">95% vai direto</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Monthly Donations */}
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Doações Mensais (Kz)</h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distribution by Category */}
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Distribuição por Área</h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Para Onde Vai Seu Dinheiro</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Educação (40%)</span>
                <span className="text-primary-600 font-bold">1.0M Kz</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-600 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Material escolar, bolsas de estudo, reformas de escolas
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Saúde (30%)</span>
                <span className="text-secondary-600 font-bold">750K Kz</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-secondary-600 h-3 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Consultas, medicamentos, campanhas de vacinação
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Alimentação (20%)</span>
                <span className="text-warm-600 font-bold">500K Kz</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-warm-600 h-3 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Refeições diárias, cestas básicas, programas nutricionais
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Infraestrutura (10%)</span>
                <span className="text-purple-600 font-bold">250K Kz</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Reformas, equipamentos, manutenção das instalações
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Atividades Recentes</h3>
          <div className="space-y-4">
            {[
              { date: '05/01/2026', action: 'Compra de 50 kits escolares', institution: 'Escola Comunitária Saber', amount: '15.000 Kz' },
              { date: '03/01/2026', action: 'Reforma de 2 salas de aula', institution: 'Centro Educacional Esperança', amount: '45.000 Kz' },
              { date: '28/12/2025', action: 'Campanha de vacinação', institution: 'Centro de Saúde Vida Nova', amount: '22.000 Kz' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b last:border-b-0">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.institution} • {activity.date}</p>
                </div>
                <span className="font-bold text-primary-600">{activity.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
