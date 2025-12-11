import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ResearchPage() {
  const services = [
    {
      title: 'Bluebook Preparation',
      description: 'In-depth exploration of market trends, industry players, and regulatory landscapes',
    },
    {
      title: 'Industry Coverage',
      description: 'Comprehensive sell-side research and investment recommendations',
    },
    {
      title: 'Equity Research Reports',
      description: 'Detailed analyses with buy, hold, or sell recommendations for public companies',
    },
    {
      title: 'Financial & Valuation Models',
      description: 'Bespoke models grounded in meticulous analysis',
    },
    {
      title: 'Fixed Income Research',
      description: 'Analysis of bonds and income-generating assets',
    },
    {
      title: 'M&A Analysis',
      description: 'Expert insights on mergers and acquisitions',
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-r from-primary-indigo to-blue-900 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Kedge Research</h1>
            <p className="text-xl text-gray-100">Institutional-grade investment research and market intelligence</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-width-container">
            <p className="text-lg text-gray-700 mb-12">
              RedeFin Capital provides comprehensive investment research services to funds, wealth managers, and institutional investors. Our team delivers specialized advisory including due diligence and transaction structuring to support informed investment decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
