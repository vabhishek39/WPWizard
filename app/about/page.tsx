'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Shield, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Eleanor Vance',
      role: 'Founder & CEO',
      image: 'https://picsum.photos/seed/ceo/400/500',
      bio: 'With over 20 years in luxury real estate, Eleanor founded wpbuildify to redefine the premium property market.'
    },
    {
      name: 'James Sterling',
      role: 'Head of Acquisitions',
      image: 'https://picsum.photos/seed/acquisitions/400/500',
      bio: 'James specializes in identifying off-market opportunities and negotiating complex international transactions.'
    },
    {
      name: 'Sophia Chen',
      role: 'Lead Designer',
      image: 'https://picsum.photos/seed/designer/400/500',
      bio: 'Sophia ensures every property we list is presented flawlessly, maximizing its appeal to discerning buyers.'
    },
    {
      name: 'Marcus Thorne',
      role: 'Senior Broker',
      image: 'https://picsum.photos/seed/broker/400/500',
      bio: 'Marcus brings a wealth of knowledge regarding the local market and has closed over $500M in sales.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-zinc-950">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Luxury Real Estate
              </span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Founded in 2005, wpbuildify has grown from a boutique agency into a global leader in premium property sales. We don&apos;t just sell homes; we curate lifestyles for the world&apos;s most discerning clientele.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">$5B+</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Total Sales Volume</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">15+</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Global Offices</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-zinc-800"
          >
            <Image 
              src="https://picsum.photos/seed/agencyoffice/800/1200" 
              alt="wpbuildify Office" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Core Values</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The principles that guide every interaction, negotiation, and transaction at wpbuildify.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail in every aspect of our service.' },
              { icon: Shield, title: 'Integrity', desc: 'Unwavering commitment to honesty and transparency.' },
              { icon: Award, title: 'Excellence', desc: 'Striving for the highest standards in the luxury market.' },
              { icon: Users, title: 'Discretion', desc: 'Absolute confidentiality for our high-profile clients.' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <value.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet The <span className="text-red-500">Experts</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Our team of seasoned professionals brings decades of combined experience in the luxury real estate sector.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-500 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed px-2">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
