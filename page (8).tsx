import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact RedeFin Capital',
  description: 'Get in touch with RedeFin Capital for investment banking and advisory services.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-indigo to-blue-900 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100">Let's discuss how we can help you achieve your financial goals</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="max-width-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-gold"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-gold"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-gold"
                  />
                  <select className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-gold">
                    <option>Select Interest</option>
                    <option>Investment Banking</option>
                    <option>Research</option>
                    <option>Moonshot Platform</option>
                    <option>Other</option>
                  </select>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-gold"
                  ></textarea>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:contact@redefincapital.com" className="text-primary-gold hover:underline">
                      contact@redefincapital.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href="tel:+917380798555" className="text-primary-gold hover:underline">
                      +91-7380798555
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Headquarters</h3>
                    <p className="text-gray-700">
                      Hyderabad, Telangana<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Office</h3>
                    <p className="text-gray-700">
                      Strong presence in<br />
                      Mumbai, Maharashtra
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com/company/redefin-capital" className="text-primary-gold hover:underline">LinkedIn</a>
                      <a href="https://twitter.com/redefin_capital" className="text-primary-gold hover:underline">Twitter</a>
                      <a href="https://instagram.com/redefin_capital" className="text-primary-gold hover:underline">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
