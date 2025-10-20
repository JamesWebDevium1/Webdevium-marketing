export function WhyWebdevium() {
  const features = [
    {
      icon: (
        <img src="/assets/images/why-web-1.png" alt="Predictable Throughput" className="w-16 h-16" />
      ),
      title: "Predictable Throughput, Not Hourly Chaos",
      description: "Get a dedicated level of engineering output every month — no guesswork, no bloated hourly invoices.",
    },
    {
      icon: (
        <img src="/assets/images/why-web-2.png" alt="Predictable Throughput" className="w-16 h-16" />
      ),
      title: "Senior Talent, Fraction of the Cost",
      description: "Access vetted senior developers, project managers, and QA without the planning overhead.",
    },
    {
      icon: (
        <img src="/assets/images/why-web-3.png" alt="Predictable Throughput" className="w-16 h-16" />
      ),
      title: "Flat Monthly Plans",
      description: "Starting at just $3.5K, scale your engineering capacity as you grow. Cancel anytime.",
    },
  ];

  return (
    <section className="py-24 image-container">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-primary text-shadow-soft">
            WHY WEBDEVIUM
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black-900 mb-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
