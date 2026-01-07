import Link from 'next/link'
import { FiHeart, FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <FiHeart className="text-2xl text-primary-500" />
              <span>Doar com Propósito</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Conectando pessoas generosas a causas que transformam vidas. 
              Transparência total, impacto real e mudança sustentável nas comunidades.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-500 transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="mailto:contato@doarcomproposito.org" className="hover:text-primary-500 transition-colors" aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/instituicoes" className="hover:text-primary-500 transition-colors">Instituições</Link></li>
              <li><Link href="/como-funciona" className="hover:text-primary-500 transition-colors">Como Funciona</Link></li>
              <li><Link href="/transparencia" className="hover:text-primary-500 transition-colors">Transparência</Link></li>
              <li><Link href="/sobre" className="hover:text-primary-500 transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="hover:text-primary-500 transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-primary-500 transition-colors">Termos de Uso</Link></li>
              <li><Link href="/contato" className="hover:text-primary-500 transition-colors">Contato</Link></li>
              <li><Link href="/faq" className="hover:text-primary-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Doar com Propósito. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com 💚 para transformar vidas.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
