import NewsletterForm from '@/components/ui/NewsletterForm';
import { MailCheck, TrendingUp, Award } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-white to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-1 bg-primary/10 rounded-full mb-6">
          <span className="px-3 py-1 text-xs font-medium text-primary">Join 2,000+ subscribers</span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl lg:text-5xl">
          Stay Updated with Affiliate Marketing Trends
        </h2>
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our newsletter for the latest tips, trends, and updates in affiliate marketing and online shopping tools.
        </p>
        
        <div className="mt-10 max-w-xl mx-auto">
          <NewsletterForm />
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                <MailCheck className="h-5 w-5" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-neutral-900">Weekly Updates</h3>
              <p className="mt-1 text-sm text-neutral-500">Get market insights every Thursday</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-neutral-900">Trend Reports</h3>
              <p className="mt-1 text-sm text-neutral-500">Monthly deep dives into data</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-neutral-900">Premium Content</h3>
              <p className="mt-1 text-sm text-neutral-500">Exclusive guides and tutorials</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
