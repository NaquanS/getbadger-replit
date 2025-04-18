import { 
  Users, 
  BarChart3, 
  Link, 
  Search, 
  DollarSign, 
  ShoppingCart 
} from 'lucide-react';
import type { Feature } from '@/components/ui/FeatureCard';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Link Management',
    description: 'Create, manage, and track your affiliate links with smart redirects and detailed analytics.',
    icon: Link,
    iconBgColor: 'bg-primary',
  },
  {
    id: 2,
    title: 'Product Comparison',
    description: 'Compare products across multiple retailers to find the best affiliate programs and commission rates.',
    icon: ShoppingCart,
    iconBgColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Price Tracking',
    description: 'Monitor price changes for products across multiple websites and get alerts for price drops.',
    icon: DollarSign,
    iconBgColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Gain insights into your affiliate marketing performance with comprehensive analytics and reporting.',
    icon: BarChart3,
    iconBgColor: 'bg-indigo-500',
  },
  {
    id: 5,
    title: 'Audience Insights',
    description: 'Understand your audience better with detailed insights into their shopping preferences and behaviors.',
    icon: Users,
    iconBgColor: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Deal Finder',
    description: 'Automatically find the best deals and highest commission opportunities across your affiliate networks.',
    icon: Search,
    iconBgColor: 'bg-amber-500',
  }
];
