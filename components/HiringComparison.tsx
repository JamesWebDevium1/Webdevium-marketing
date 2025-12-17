import { ComparisonDataItem } from '@/lib/wp';

interface HiringComparisonProps {
  comparisonData?: ComparisonDataItem[];
}

export function HiringComparison({ comparisonData }: HiringComparisonProps) {
  // Check if comparisonData is an array and has items
  if (!comparisonData || comparisonData.length === 0) {
    return null;
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-8">
            HIRING IN-HOUSE VS WEBDEVIUM
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 px-6 py-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Category</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Hiring In-House</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Webdevium</h3>
                  <p className="text-sm text-black-600 mt-1 italic">All inclusive monthly rate</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6 hover:shadow-md transition-shadow`}
                >
                  <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="text-left">
                      <span className="font-medium text-gray-900">{row.category}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-700">{row.inhouse}</span> {/* Fixed property name */}
                    </div>
                    <div className="text-center">
                      <span className="text-gray-900">{row.webdevium}</span>
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
