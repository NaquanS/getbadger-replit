import FeatureCard from '@/components/ui/FeatureCard';
import { features } from '@/data/features';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Powerful Tools for Affiliate Marketers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            Everything affiliate marketers and online shoppers need to succeed in the digital marketplace.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
