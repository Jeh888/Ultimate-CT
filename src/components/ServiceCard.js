import Link from 'next/link';

export default function ServiceCard({ service, location = null }) {
  const href = location 
    ? `/locations/${location}/${service.slug}`
    : `/${service.slug}`;

  return (
    <Link href={href} className="group block">
      <div className="bg-white border border-gray-100 p-6 hover:border-primary-200 transition-all duration-300 h-full">
        <h3 className="font-display text-lg text-gray-900 group-hover:text-primary-700 transition-colors mb-3">
          {service.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-sm text-primary-700 font-medium">{service.priceRange}</span>
          <span className="text-primary-600 text-sm group-hover:translate-x-1 transition-transform duration-300">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}
