import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const IconComponent = feature.icon;
  
  return (
    <div className="pt-6">
      <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="-mt-6">
          <div>
            <span 
              className={`inline-flex items-center justify-center p-3 ${feature.iconBgColor} rounded-md shadow-lg`}
            >
              <IconComponent className="text-white h-6 w-6" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-neutral-900 tracking-tight">{feature.title}</h3>
          <p className="mt-5 text-base text-neutral-500">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
