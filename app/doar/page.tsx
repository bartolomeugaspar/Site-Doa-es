'use client'

import { useState } from 'react'
import { FiDollarSign, FiHeart, FiCheck } from 'react-icons/fi'

export default function DoarPage() {
  const [donationType, setDonationType] = useState<'money' | 'goods'>('money')
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [goodsType, setGoodsType] = useState('')
  const [goodsDescription, setGoodsDescription] = useState('')

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui virá a integração com o sistema de pagamento
    alert('Sistema de pagamento em desenvolvimento. Em breve você poderá fazer doações reais!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FiHeart className="text-5xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faça Sua Doação</h1>
          <p className="text-lg md:text-xl opacity-90">
            Doe dinheiro, roupas, alimentos ou outros bens. Sua contribuição transforma vidas.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Donation Type Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                O que você deseja doar?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setDonationType('money')}
                  className={`p-6 rounded-xl border-2 font-semibold transition-all ${
                    donationType === 'money'
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-3xl mb-2">💰</div>
                  <div>Dinheiro</div>
                  <div className="text-xs text-gray-500 mt-1">Doação monetária</div>
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('goods')}
                  className={`p-6 rounded-xl border-2 font-semibold transition-all ${
                    donationType === 'goods'
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-3xl mb-2">📦</div>
                  <div>Bens Materiais</div>
                  <div className="text-xs text-gray-500 mt-1">Roupas, alimentos, etc</div>
                </button>
              </div>
            </div>

            {donationType === 'money' ? (
              <>
            {/* Frequency Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Tipo de Doação
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`p-3 sm:p-4 rounded-xl border-2 font-semibold transition-all text-sm sm:text-base ${
                    frequency === 'once'
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Doação Única
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                    frequency === 'monthly'
                      ? 'border-primary-600 bg-primary-50 text-primary-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Doação Mensal
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Valor da Doação
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value.toString())}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                      amount === value.toString()
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {value.toLocaleString()} Kz
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <FiDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  placeholder="Outro valor (Kz)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Método de Pagamento
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {['Multicaixa Express', 'PayPay', 'Cartão de Crédito'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                      paymentMethod === method
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-green-900 mb-3">Ao doar, você recebe:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-green-800">
                  <FiCheck className="text-green-600" />
                  <span>Certificado de doação (válido para dedução fiscal)</span>
                </li>
                <li className="flex items-center gap-2 text-green-800">
                  <FiCheck className="text-green-600" />
                  <span>Relatórios de transparência sobre o uso da doação</span>
                </li>
                <li className="flex items-center gap-2 text-green-800">
                  <FiCheck className="text-green-600" />
                  <span>Atualizações sobre o impacto gerado (fotos e vídeos)</span>
                </li>
                <li className="flex items-center gap-2 text-green-800">
                  <FiCheck className="text-green-600" />
                  <span>Acompanhamento completo no seu perfil</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!amount || !paymentMethod}
              className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              Continuar para Pagamento
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Pagamento 100% seguro e criptografado
            </p>
            </>
            ) : (
              <>
              {/* Goods Donation */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Tipo de Bem
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  {['Roupas', 'Alimentos', 'Brinquedos', 'Livros', 'Móveis', 'Eletrônicos', 'Medicamentos', 'Outros'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setGoodsType(type)}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                        goodsType === type
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Descrição dos Bens
                </label>
                <textarea
                  placeholder="Descreva os itens que deseja doar (quantidade, estado de conservação, etc)..."
                  value={goodsDescription}
                  onChange={(e) => setGoodsDescription(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-blue-900 mb-3">📍 Próximos passos:</h3>
                <ol className="space-y-2 text-blue-800 text-sm">
                  <li>1. Preencha o formulário com os detalhes da doação</li>
                  <li>2. Entraremos em contato para combinar a coleta ou entrega</li>
                  <li>3. Você receberá um certificado de doação</li>
                  <li>4. Acompanhe o impacto dos seus bens doados</li>
                </ol>
              </div>

              <button
                type="submit"
                disabled={!goodsType || !goodsDescription}
                className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                Solicitar Coleta/Entrega
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                📦 Entraremos em contato em até 24 horas
              </p>
              </>
            )}
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl font-bold text-primary-600 mb-2">100%</p>
            <p className="text-gray-600">Transparente</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl font-bold text-primary-600 mb-2">15.000+</p>
            <p className="text-gray-600">Vidas Impactadas</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl font-bold text-primary-600 mb-2">R$ 2.5M</p>
            <p className="text-gray-600">Doados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
