const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 prose prose-indigo mx-auto text-neutral-500">
          <p>
            Founded in 2018, getBadger started with a simple idea: affiliate marketing and online shopping tools should be accessible, efficient, and powerful. Our team of marketing professionals and software engineers came together to build solutions that address the real challenges facing modern affiliate marketers and online shoppers.
          </p>
          <p>
            Today, we serve over 2,000 marketers and companies worldwide, from individual bloggers to large e-commerce enterprises. Our platform helps affiliate marketers increase conversions, improve tracking accuracy, and gain valuable insights from their campaigns, while helping shoppers find the best deals online.
          </p>
          <p>
            Our open-source approach allows for unprecedented customization and integration capabilities, making getBadger the most flexible affiliate marketing solution on the market. We believe in the power of community and collaboration, which is why all our tools are open source and freely available.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">2,000+</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Active Users</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">94%</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">User Satisfaction</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">65%</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Average Conversion Boost</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="mt-2 text-sm font-medium text-neutral-500">Platform Integrations</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-neutral-500 text-center">
              We're on a mission to democratize affiliate marketing technology and empower both marketers and shoppers with transparent, powerful tools that level the playing field and create more value for everyone in the ecosystem.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-neutral-900">Alex Johnson</h3>
              <p className="text-sm text-neutral-500">Founder & CEO</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-neutral-900">Maria Rodriguez</h3>
              <p className="text-sm text-neutral-500">Chief Technology Officer</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-neutral-900">David Kim</h3>
              <p className="text-sm text-neutral-500">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
