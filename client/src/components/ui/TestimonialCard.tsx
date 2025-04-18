export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 relative">
      <div className="absolute -top-4 left-6 text-primary text-5xl">"</div>
      <p className="text-neutral-500 italic pt-4">{testimonial.text}</p>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <img 
            className="h-10 w-10 rounded-full object-cover" 
            src={testimonial.author.avatar} 
            alt={testimonial.author.name} 
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-900">{testimonial.author.name}</p>
          <p className="text-xs text-neutral-500">{testimonial.author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
