import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About getBadger - Our Mission & Story</title>
        <meta name="description" content="Learn about getBadger's mission to provide open source tools for affiliate marketers and online shoppers." />
      </Helmet>
      
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About getBadger</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-neutral-500">
              Learn about our mission and the team behind our open source tools
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      <CTASection />
    </>
  );
};

export default About;
