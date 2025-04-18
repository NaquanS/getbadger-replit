import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="absolute -left-20 top-1/2 w-60 h-60 rounded-full bg-indigo-100/50"></div>
        <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-primary/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center py-12 md:py-16 lg:py-20">
          {/* Hero content */}
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Open source tools for</span>
              <span className="block text-primary mt-1">affiliate marketers</span>
            </h1>
            
            <p className="mt-4 text-base text-neutral-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              Streamline your affiliate marketing strategies and enhance your online shopping experience with getBadger's suite of innovative, open-source tools.
            </p>
            
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Increase conversion rates by up to 60%</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100% open source</span>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/tools">
                  <span className="flex items-center justify-center">
                    Explore tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-gray-50" asChild>
                <Link href="/contact">
                  <span>Contact us</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="mt-12 relative lg:mt-0 flex justify-center">
            <div className="relative lg:max-w-md xl:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-indigo-300/20 rounded-2xl transform rotate-1"></div>
              <img 
                className="relative rounded-2xl shadow-2xl object-cover w-full max-h-[500px]" 
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80" 
                alt="Affiliate marketing visualization" 
              />
              
              {/* Stats floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 md:p-6 hidden sm:block">
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Average ROI</p>
                <p className="text-2xl font-bold text-primary">+245%</p>
                <div className="mt-1 flex items-center">
                  <span className="text-green-500 text-xs font-medium">↑ 27%</span>
                  <span className="text-xs text-neutral-400 ml-1">from last year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
