'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Users, Home } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data';

export default function HomePage() {
  const featuredProperties = properties.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/luxuryhome/1920/1080"
            alt="Luxury Home Background"
            fill
            className="object-cover opacity-40"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Discover Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Dream Property
              </span>
            </h1>
            <p className="mt-4 text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light">
              Exclusive listings, unparalleled service, and a seamless experience in finding your perfect luxury home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/properties"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white text-lg font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center group w-full sm:w-auto justify-center"
              >
                View Properties
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-zinc-800/50 hover:bg-zinc-800 text-white text-lg font-semibold rounded-full border border-zinc-700 hover:border-red-500/50 transition-all backdrop-blur-sm w-full sm:w-auto justify-center flex"
              >
                Contact an Agent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative z-30 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Home, label: 'Properties Sold', value: '1,200+' },
              { icon: Users, label: 'Happy Clients', value: '850+' },
              { icon: TrendingUp, label: 'Years Experience', value: '15+' },
              { icon: Star, label: '5-Star Reviews', value: '4.9/5' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
              >
                <div className="inline-flex p-3 rounded-xl bg-red-500/10 text-red-500 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-zinc-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-red-500">Listings</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl">
                Explore our handpicked selection of premium properties available right now.
              </p>
            </div>
            <Link
              href="/properties"
              className="hidden md:flex items-center text-red-500 hover:text-red-400 font-semibold transition-colors group"
            >
              See All Properties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link
              href="/properties"
              className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold transition-colors group"
            >
              See All Properties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Read testimonials from our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Homeowner',
                text: 'The team at wpbuildify made finding our dream home an absolute breeze. Their attention to detail and understanding of the luxury market is unmatched.',
                image: 'https://picsum.photos/seed/user1/100/100'
              },
              {
                name: 'Michael Chen',
                role: 'Investor',
                text: 'I have worked with many agencies, but wpbuildify stands out. Their professionalism and exclusive access to off-market properties gave me a significant advantage.',
                image: 'https://picsum.photos/seed/user2/100/100'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Seller',
                text: 'Selling a luxury property can be stressful, but they handled everything perfectly. The marketing was top-notch, and we closed above our asking price.',
                image: 'https://picsum.photos/seed/user3/100/100'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 relative group hover:border-red-500/30 transition-colors"
              >
                <div className="flex text-red-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-zinc-800 group-hover:border-red-500 transition-colors">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-zinc-950 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Contact our expert agents today and start your journey to luxury living.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white text-lg font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
