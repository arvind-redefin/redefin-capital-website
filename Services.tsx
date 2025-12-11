export default function Services() {
  const services = [
    {
      name: 'Investment Banking',
      description: 'Real estate fundraising, M&A advisory, capital structuring',
      icon: '💼',
    },
    {
      name: 'Kedge Research',
      description: 'Institutional-grade equity research and market analysis',
      icon: '📊',
    },
    {
      name: 'Moonshot',
      description: 'Early-stage investment platform connecting founders and investors',
      icon: '🚀',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
