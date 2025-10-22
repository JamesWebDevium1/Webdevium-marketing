import { Step, WPImage } from '@/lib/wp';

interface StepsProps {
	steps: Step[];
	title?: string;
	subtitle?: string;
}

export function Steps({
	steps,
	title = 'WHY WEBDEVIUM',
	subtitle,
}: StepsProps) {
	if (!steps || steps.length === 0) return null;

	return (
		<section className="py-24">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-primary text-shadow-soft">
						{title}
					</h2>
					{subtitle && (
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
					)}
				</div>

				<div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
					{steps.map((step, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center"
						>
						<div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-10">
					
								<img
									src={(step.icon as WPImage).mediaItemUrl}
									alt={(step.icon as WPImage).altText || 'Step icon'}
									className="w-16 h-16 object-contain"
								/>
							
						</div>

						<h3 className="text-xl font-bold text-black-900 mb-10">
								{step.title}
							</h3>

						<p className="text-gray-700 leading-relaxed">
								{step.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

