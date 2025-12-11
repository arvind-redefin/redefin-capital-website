export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About RedeFin Capital</h2>
            <p className="text-lg text-gray-700 mb-4">
              RedeFin Capital is a sector-agnostic boutique consultancy providing comprehensive business consultancy services. We address the diverse needs of both early-stage and established businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We serve as a strategic link between businesses and our extensive network of 1,500+ investors. Beyond facilitating initial investment opportunities, we also provide investors with in-depth, sector-specific research reports.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary-gold text-xl">✓</span>
                <span>Expert Investment Banking Advisory</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-gold text-xl">✓</span>
                <span>Real Estate Capital Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-gold text-xl">✓</span>
                <span>Institutional-Grade Research</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-indigo to-blue-900 rounded-lg h-96 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">800+</div>
              <div className="text-xl">Crores in Closed Deals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
