import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, href = "/booking" }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href={href}
        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
      >
        Learn More
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
