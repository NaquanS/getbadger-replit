import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="group relative">
      <div className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        <div className="h-48 bg-gray-200 aspect-w-16 aspect-h-9">
          <img 
            src={tool.image} 
            alt={`${tool.title} screenshot`} 
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900">
            {tool.title}
          </h3>
          <p className="mt-2 text-base text-neutral-500">
            {tool.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-6">
            <Link href={tool.link}>
              <a className="text-primary hover:text-primary/80 font-medium flex items-center">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
