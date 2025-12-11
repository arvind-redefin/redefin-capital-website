export default function Stats() {
  const stats = [
    { value: '75', label: 'Years Cumulative Experience' },
    { value: '₹550 Cr', label: 'Deals Closed' },
    { value: '20+', label: 'Service Offerings' },
    { value: '1500+', label: 'Investors Onboarded' },
  ]

  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-indigo mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
