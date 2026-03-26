'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, Check, ArrowLeft, ArrowRight, Share2, Heart, Phone, Mail } from 'lucide-react';
import { properties, formatPrice } from '@/lib/data';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-red-500 hover:text-red-400 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Link href="/properties" className="text-zinc-400 hover:text-white flex items-center transition-colors text-sm font-medium uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Listings
          </Link>
          <div className="flex space-x-4">
            <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5 mr-2" /> Share
            </button>
            <button className="flex items-center text-zinc-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5 mr-2" /> Save
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-wider rounded-full border border-red-500/30">
                  {property.type}
                </span>
                <span className="flex items-center text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1" /> {property.location}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {property.title}
              </h1>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-4xl font-bold text-red-500">{formatPrice(property.price)}</p>
              <p className="text-zinc-400 text-sm mt-1">Estimated Mortgage: $45,200/mo</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[60vh] min-h-[400px]"
        >
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
            <Image 
              src={property.image} 
              alt={property.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden group">
              <Image 
                src={`https://picsum.photos/seed/${property.id}a/800/600`} 
                alt={`${property.title} Interior`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image 
                src={`https://picsum.photos/seed/${property.id}b/800/600`} 
                alt={`${property.title} Exterior`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white font-semibold flex items-center">
                  View All Photos <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <div className="flex flex-col items-center justify-center text-center border-r border-zinc-800">
                <Bed className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-2xl font-bold text-white">{property.beds}</span>
                <span className="text-zinc-400 text-sm uppercase tracking-wider">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-r border-zinc-800">
                <Bath className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-2xl font-bold text-white">{property.baths}</span>
                <span className="text-zinc-400 text-sm uppercase tracking-wider">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <Square className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-2xl font-bold text-white">{property.sqft}</span>
                <span className="text-zinc-400 text-sm uppercase tracking-wider">Square Feet</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">About This Property</h2>
              <p className="text-zinc-300 leading-relaxed text-lg font-light">
                {property.description}
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg font-light mt-4">
                Designed with meticulous attention to detail, this property offers an unparalleled living experience. The expansive floor plan flows effortlessly, creating inviting spaces for both grand entertaining and intimate gatherings. Every finish has been carefully selected to ensure the highest standard of luxury.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Property Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-1 bg-red-500/10 rounded-full">
                      <Check className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Location</h2>
              <div className="w-full h-80 bg-zinc-900 rounded-2xl border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                 <Image src={`https://picsum.photos/seed/map${property.id}/800/400?blur=2`} alt="Map Placeholder" fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-red-500 mx-auto mb-2" />
                      <p className="text-white font-medium">{property.location}</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Sidebar / Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Interested in this property?</h3>
              <p className="text-zinc-400 text-sm mb-6">Contact our luxury real estate specialists to schedule a private viewing.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" defaultValue={`I am interested in ${property.title}. Please contact me with more information.`}></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  Request Information
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image src="https://picsum.photos/seed/agent1/100/100" alt="Agent" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Alexander Wright</p>
                    <p className="text-zinc-400 text-sm">Senior Luxury Agent</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="tel:+15551234567" className="flex items-center text-zinc-300 hover:text-red-500 transition-colors text-sm">
                    <Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567
                  </a>
                  <a href="mailto:alexander@wpbuildify.com" className="flex items-center text-zinc-300 hover:text-red-500 transition-colors text-sm">
                    <Mail className="w-4 h-4 mr-2" /> alexander@wpbuildify.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
