'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Comece a Fazer a Diferença Hoje
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cada doação, por menor que seja, tem o poder de transformar vidas. 
          Junte-se a milhares de pessoas que já estão criando um futuro melhor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/doar"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Doar Agora
            <FiArrowRight />
          </Link>
          <Link
            href="/instituicoes"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-semibold text-lg border-2 border-white"
          >
            Conhecer Instituições
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Transparência Total</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Certificado de Doação</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
