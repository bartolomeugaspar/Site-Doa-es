'use client'

import { FiUsers, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi'

const ImpactStats = () => {
  const stats = [
    {
      icon: <FiUsers className="text-4xl" />,
      value: '15.000+',
      label: 'Vidas Impactadas',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: <FiHeart className="text-4xl" />,
      value: 'R$ 2.5M',
      label: 'Doações Realizadas',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      value: '50+',
      label: 'Instituições Apoiadas',
      color: 'text-warm-500',
      bgColor: 'bg-warm-50',
    },
    {
      icon: <FiAward className="text-4xl" />,
      value: '100%',
      label: 'Transparência Total',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${stat.bgColor} ${stat.color} mb-3 sm:mb-4`}>
                {stat.icon}
              </div>
              <p className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
