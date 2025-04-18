import NewsletterForm from '@/components/ui/NewsletterForm';

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Stay Updated with Affiliate Marketing Trends
        </h2>
        <p className="mt-4 text-lg text-neutral-500">
          Subscribe to our newsletter for the latest tips, trends, and updates in affiliate marketing and online shopping tools.
        </p>
        
        <div className="mt-8 max-w-xl mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
