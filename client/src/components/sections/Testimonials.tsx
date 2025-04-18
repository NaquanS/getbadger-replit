import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Trusted by Marketers & Shoppers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            See what users are saying about getBadger's tools.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
