import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RedeFin Capital</h3>
            <p className="text-gray-300">Investment Banking & Transaction Advisory</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/investment-banking">Investment Banking</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/moonshot">Moonshot</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">contact@redefincapital.com</p>
            <p className="text-gray-300">+91-7380798555</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 RedeFin Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
