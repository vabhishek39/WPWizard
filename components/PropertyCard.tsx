import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { formatPrice } from '@/lib/data';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    type: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60" />
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              {property.type}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-2xl font-bold text-white">{formatPrice(property.price)}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-zinc-400 mb-6">
            <MapPin className="w-4 h-4 mr-1 shrink-0 text-red-500" />
            <span className="text-sm truncate">{property.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-auto pt-4 border-t border-zinc-800">
            <div className="flex items-center space-x-2">
              <Bed className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-300">{property.beds} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-300">{property.baths} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <Square className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-zinc-300">{property.sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
