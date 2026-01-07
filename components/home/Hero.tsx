'use client'

import Link from 'next/link'
import { FiHeart, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Transforme Vidas com <span className="text-primary-600">Sua Doação</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Doe dinheiro, roupas, alimentos ou outros bens. Conecte-se a causas reais e 
              acompanhe o impacto. Cada contribuição transforma sonhos em realidade para crianças, 
              famílias e comunidades que precisam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/doar"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiHeart />
                Doar Agora
                <FiArrowRight />
              </Link>
              <Link
                href="/instituicoes"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all font-semibold text-lg border-2 border-primary-600"
              >
                Ver Instituições
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Transparente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Seguro & Confiável</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                alt="Crianças felizes em atividade educacional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold mb-1">Maria, 8 anos</p>
                <p className="text-sm opacity-90">
                  "Graças às doações, agora tenho livros e material para estudar!"
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -left-2 sm:-left-4 top-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]"
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary-600">1.500+</p>
              <p className="text-xs sm:text-sm text-gray-600">Crianças Apoiadas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-2 sm:-right-4 bottom-1/4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]"
            >
              <p className="text-2xl sm:text-3xl font-bold text-secondary-600">50+</p>
              <p className="text-xs sm:text-sm text-gray-600">Instituições Parceiras</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
