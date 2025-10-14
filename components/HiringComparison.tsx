export function HiringComparison() {
  const comparisonData = [
    {
      category: "Senior Developer",
      inHouse: "$160K+/year + benefits (~$200K total)",
      webdevium: "Included",
    },
    {
      category: "Project Manager",
      inHouse: "$100K-$120K/year",
      webdevium: "Included",
    },
    {
      category: "QA Engineer",
      inHouse: "$80K-$100K/year",
      webdevium: "Included",
    },
    {
      category: "Recruiting/Overhead",
      inHouse: "Recruiter fees, onboarding, HR, churn risk",
      webdevium: "Included",
    },
    {
      category: "Flexibility",
      inHouse: "Slow to scale, locked into salaries",
      webdevium: "Scale up/down monthly",
    },
    {
      category: "Total Annual Cost",
      inHouse: "$400K+ (team of 3-4)",
      webdevium: "$144K ($12K/month, all-in)",
    },
    {
      category: "Speed to Value",
      inHouse: "3-6 months to hire & ramp",
      webdevium: "Immediate start",
    },
    {
      category: "Risk",
      inHouse: "High (bad hires, turnover)",
      webdevium: "Low (month-to-month, proven team)",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            HIRING IN-HOUSE VS WEBDEVIUM
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-50 px-6 py-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Category</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Hiring In-House</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Webdevium</h3>
                  <p className="text-sm text-gray-600 mt-1">All inclusive monthly rate</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <div key={index} className="px-6 py-6 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="text-left">
                      <span className="font-medium text-gray-900">{row.category}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-700">{row.inHouse}</span>
                    </div>
                    <div className="text-center">
                      <span className="font-semibold text-green-600">{row.webdevium}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
