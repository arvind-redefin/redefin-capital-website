export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-indigo to-blue-900 text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Redefine Your Growth Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Providing financial solutions precisely tailored to your unique needs, meticulously crafted by our industry experts and experienced advisors.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-indigo">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
